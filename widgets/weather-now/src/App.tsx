import { useState, useEffect, useCallback } from "react";
import type {
  WidgetSDK,
  WidgetServiceSDK,
  WidgetProps,
  ForecastResponse,
  ReverseGeocodeResponse,
  Accent,
  Units,
} from "./types";

interface WeatherSummary {
  tempValue: number;
  tempUnit: string;
  windValue: number;
  windUnit: string;
  humidity: number;
  weatherCode: number;
}

interface PlaceLabel {
  primary: string;
  secondary: string;
}

type LoadingState =
  | { status: "idle" }
  | { status: "requesting-location" }
  | { status: "loading" }
  | { status: "ready"; weather: WeatherSummary; place: PlaceLabel }
  | { status: "error"; message: string };

const WEATHER_CODE_MAP: Record<number, { icon: string; label: string }> = {
  0: { icon: "☀️", label: "Clear sky" },
  1: { icon: "🌤️", label: "Mainly clear" },
  2: { icon: "⛅", label: "Partly cloudy" },
  3: { icon: "☁️", label: "Overcast" },
  45: { icon: "🌫️", label: "Fog" },
  48: { icon: "🌫️", label: "Depositing rime fog" },
  51: { icon: "🌦️", label: "Light drizzle" },
  53: { icon: "🌦️", label: "Moderate drizzle" },
  55: { icon: "🌦️", label: "Dense drizzle" },
  56: { icon: "🌧️", label: "Light freezing drizzle" },
  57: { icon: "🌧️", label: "Dense freezing drizzle" },
  61: { icon: "🌧️", label: "Light rain" },
  63: { icon: "🌧️", label: "Moderate rain" },
  65: { icon: "🌧️", label: "Heavy rain" },
  66: { icon: "🌧️", label: "Light freezing rain" },
  67: { icon: "🌧️", label: "Heavy freezing rain" },
  71: { icon: "🌨️", label: "Light snow" },
  73: { icon: "🌨️", label: "Moderate snow" },
  75: { icon: "❄️", label: "Heavy snow" },
  77: { icon: "❄️", label: "Snow grains" },
  80: { icon: "🌦️", label: "Light rain showers" },
  81: { icon: "🌧️", label: "Moderate rain showers" },
  82: { icon: "⛈️", label: "Violent rain showers" },
  85: { icon: "🌨️", label: "Light snow showers" },
  86: { icon: "❄️", label: "Heavy snow showers" },
  95: { icon: "⛈️", label: "Thunderstorm" },
  96: { icon: "⛈️", label: "Thunderstorm with hail" },
  99: { icon: "⛈️", label: "Severe thunderstorm with hail" },
};

const DEFAULT_DESCRIPTOR = { icon: "🌡️", label: "Current conditions" };

const describeCode = (code: number | undefined) =>
  code === undefined ? DEFAULT_DESCRIPTOR : WEATHER_CODE_MAP[code] ?? DEFAULT_DESCRIPTOR;

const isAccent = (value: unknown): value is Accent =>
  value === "indigo" || value === "violet" || value === "cyan" || value === "emerald";

const getGeolocation = (): Promise<GeolocationCoordinates> =>
  new Promise((resolve, reject) => {
    if (!("geolocation" in navigator)) {
      reject(new Error("Geolocation is not supported in this browser."));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve(pos.coords),
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          reject(
            new Error("Location permission was denied. Update site settings to allow location access, then try again.")
          );
        } else if (err.code === err.POSITION_UNAVAILABLE) {
          reject(new Error("Your location is currently unavailable."));
        } else if (err.code === err.TIMEOUT) {
          reject(new Error("Locating you took too long. Please try again."));
        } else {
          reject(new Error("Could not determine your location."));
        }
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 }
    );
  });

export function App({
  sdk,
  widgetServiceSdk,
}: {
  sdk: WidgetSDK;
  widgetServiceSdk: WidgetServiceSDK;
}) {
  const [props, setProps] = useState<WidgetProps>(sdk.getProps());
  const [refreshKey, setRefreshKey] = useState(0);
  const [state, setState] = useState<LoadingState>({ status: "idle" });

  useEffect(() => sdk.on("propsChanged", setProps), [sdk]);

  const units: Units = props.units === "fahrenheit" ? "fahrenheit" : "celsius";
  const accent: Accent = isAccent(props.accent) ? props.accent : "indigo";

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      if (!cancelled) setState({ status: "requesting-location" });

      let coords: GeolocationCoordinates;
      try {
        coords = await getGeolocation();
      } catch (err) {
        if (!cancelled) {
          setState({
            status: "error",
            message: err instanceof Error ? err.message : "Could not determine your location.",
          });
        }
        return;
      }
      if (cancelled) return;
      setState({ status: "loading" });

      try {
        const queryCoords = {
          latitude: String(coords.latitude),
          longitude: String(coords.longitude),
        };
        const wind_unit = units === "fahrenheit" ? "mph" : "kmh";

        const [forecast, geo] = await Promise.all([
          widgetServiceSdk.connectors.execute<ForecastResponse>({
            permalink: "weather-now-forecast",
            method: "GET",
            queryParams: {
              ...queryCoords,
              current: "temperature_2m,weather_code,is_day,wind_speed_10m,relative_humidity_2m",
              temperature_unit: units,
              wind_speed_unit: wind_unit,
              timezone: "auto",
            },
          }),
          widgetServiceSdk.connectors.execute<ReverseGeocodeResponse>({
            permalink: "weather-now-reverse-geocode",
            method: "GET",
            queryParams: { ...queryCoords, localityLanguage: "en" },
          }),
        ]);

        if (cancelled) return;

        const current = forecast?.current;
        const currentUnits = forecast?.current_units;
        if (current?.temperature_2m === undefined || current.weather_code === undefined) {
          setState({ status: "error", message: "Weather data was incomplete. Please try again." });
          return;
        }

        const weather: WeatherSummary = {
          tempValue: Math.round(current.temperature_2m),
          tempUnit: currentUnits?.temperature_2m ?? (units === "fahrenheit" ? "°F" : "°C"),
          windValue: Math.round(current.wind_speed_10m ?? 0),
          windUnit: currentUnits?.wind_speed_10m ?? (units === "fahrenheit" ? "mph" : "km/h"),
          humidity: Math.round(current.relative_humidity_2m ?? 0),
          weatherCode: current.weather_code,
        };

        const primary = geo?.city ?? geo?.locality ?? "Your location";
        const secondaryParts = [geo?.principalSubdivision, geo?.countryName].filter(
          (s): s is string => typeof s === "string" && s.length > 0
        );
        const place: PlaceLabel = { primary, secondary: secondaryParts.join(", ") };

        setState({ status: "ready", weather, place });
      } catch {
        if (!cancelled) {
          setState({
            status: "error",
            message: "Couldn't reach the weather service. Please try again.",
          });
        }
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [units, widgetServiceSdk, refreshKey]);

  const retry = useCallback(() => setRefreshKey((k) => k + 1), []);

  return (
    <div className={`weather-stage accent-${accent}`}>
      <article className="weather-card" role="region" aria-label="Current weather">
        <div className="weather-card__inner" aria-live="polite" aria-busy={state.status === "loading" || state.status === "requesting-location"}>
          {state.status === "ready" ? (
            <ReadyView weather={state.weather} place={state.place} />
          ) : state.status === "error" ? (
            <ErrorView message={state.message} onRetry={retry} />
          ) : (
            <LoadingView
              label={state.status === "requesting-location" ? "Asking for your location…" : "Fetching weather…"}
            />
          )}
        </div>
      </article>
    </div>
  );
}

function LoadingView({ label }: { label: string }) {
  return (
    <div className="weather-state" role="status">
      <div className="weather-spinner" aria-hidden="true" />
      <p className="weather-state__label">{label}</p>
    </div>
  );
}

function ErrorView({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="weather-state" role="alert">
      <div className="weather-state__icon" aria-hidden="true">
        ⚠️
      </div>
      <p className="weather-state__label">{message}</p>
      <button type="button" className="weather-button" onClick={onRetry}>
        Try again
      </button>
    </div>
  );
}

function ReadyView({ weather, place }: { weather: WeatherSummary; place: PlaceLabel }) {
  const { icon, label } = describeCode(weather.weatherCode);
  return (
    <div className="weather-ready">
      <div className="weather-ready__icon" aria-hidden="true">
        {icon}
      </div>
      <div className="weather-ready__temperature">
        <span className="weather-ready__temp-value">{weather.tempValue}</span>
        <span className="weather-ready__temp-unit">{weather.tempUnit}</span>
      </div>
      <p className="weather-ready__condition">{label}</p>
      <h2 className="weather-ready__place">{place.primary}</h2>
      {place.secondary && <p className="weather-ready__place-secondary">{place.secondary}</p>}
      <dl className="weather-ready__stats">
        <div className="weather-stat">
          <dt className="weather-stat__label">Wind</dt>
          <dd className="weather-stat__value">
            {weather.windValue} <span className="weather-stat__unit">{weather.windUnit}</span>
          </dd>
        </div>
        <div className="weather-stat">
          <dt className="weather-stat__label">Humidity</dt>
          <dd className="weather-stat__value">
            {weather.humidity}
            <span className="weather-stat__unit">%</span>
          </dd>
        </div>
      </dl>
    </div>
  );
}
