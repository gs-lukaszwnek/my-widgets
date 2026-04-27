import { useState, useEffect, useCallback } from "react";
import type { WidgetSDK, WidgetProps, WidgetServiceSDK } from "./types";

interface WeatherSnapshot {
  temperature: number;
  humidity: number;
  windSpeed: number;
  weatherCode: number;
  unit: "celsius" | "fahrenheit";
}

interface Coords {
  latitude: number;
  longitude: number;
}

interface Place {
  city?: string;
  country?: string;
}

const readString = (value: unknown): string | undefined =>
  typeof value === "string" && value.length > 0 ? value : undefined;

const extractPlace = (value: unknown): Place => {
  if (typeof value !== "object" || value === null) return {};
  const city =
    ("city" in value ? readString(value.city) : undefined) ??
    ("locality" in value ? readString(value.locality) : undefined) ??
    ("principalSubdivision" in value
      ? readString(value.principalSubdivision)
      : undefined);
  const country =
    "countryName" in value ? readString(value.countryName) : undefined;
  return { city, country };
};

const normalizeUnit = (raw: unknown): "celsius" | "fahrenheit" =>
  raw === "fahrenheit" ? "fahrenheit" : "celsius";

const describeWeather = (code: number): string => {
  if (code === 0) return "Clear sky";
  if (code === 1) return "Mainly clear";
  if (code === 2) return "Partly cloudy";
  if (code === 3) return "Overcast";
  if (code === 45 || code === 48) return "Fog";
  if (code >= 51 && code <= 57) return "Drizzle";
  if (code >= 61 && code <= 67) return "Rain";
  if (code >= 71 && code <= 77) return "Snow";
  if (code >= 80 && code <= 82) return "Rain showers";
  if (code >= 85 && code <= 86) return "Snow showers";
  if (code === 95) return "Thunderstorm";
  if (code === 96 || code === 99) return "Thunderstorm with hail";
  return "Unknown conditions";
};

const weatherEmoji = (code: number): string => {
  if (code === 0) return "☀️";
  if (code === 1 || code === 2) return "⛅";
  if (code === 3) return "☁️";
  if (code === 45 || code === 48) return "🌫️";
  if (code >= 51 && code <= 67) return "🌧️";
  if (code >= 71 && code <= 86) return "❄️";
  if (code >= 95) return "⛈️";
  return "☁️";
};

const isWeatherPayload = (
  value: unknown,
): value is {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    weather_code: number;
  };
} => {
  if (typeof value !== "object" || value === null) return false;
  if (!("current" in value)) return false;
  const current = value.current;
  if (typeof current !== "object" || current === null) return false;
  if (
    !("temperature_2m" in current) ||
    !("relative_humidity_2m" in current) ||
    !("wind_speed_10m" in current) ||
    !("weather_code" in current)
  ) {
    return false;
  }
  return (
    typeof current.temperature_2m === "number" &&
    typeof current.relative_humidity_2m === "number" &&
    typeof current.wind_speed_10m === "number" &&
    typeof current.weather_code === "number"
  );
};

interface AppProps {
  sdk: WidgetSDK;
  widgetServiceSdk: WidgetServiceSDK;
}

export function App({ sdk, widgetServiceSdk }: AppProps) {
  const [props, setProps] = useState<WidgetProps>(sdk.getProps());
  const [coords, setCoords] = useState<Coords | null>(null);
  const [weather, setWeather] = useState<WeatherSnapshot | null>(null);
  const [place, setPlace] = useState<Place | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => sdk.on("propsChanged", () => setProps(sdk.getProps())), [sdk]);

  const requestLocation = useCallback(() => {
    setError(null);
    setLoading(true);
    setPlace(null);
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setError("Geolocation is not supported in this browser.");
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setCoords({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
      (err) => {
        const message =
          err.code === err.PERMISSION_DENIED
            ? "Location permission denied. Allow location access and try again."
            : err.code === err.POSITION_UNAVAILABLE
              ? "Location is currently unavailable."
              : "Could not determine your location.";
        setError(message);
        setLoading(false);
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 600_000 },
    );
  }, []);

  useEffect(() => {
    requestLocation();
  }, [requestLocation]);

  const unit = normalizeUnit(props.temperatureUnit);

  useEffect(() => {
    if (!coords) return;
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await widgetServiceSdk.connectors.execute({
          permalink: "weather-widget-open-meteo",
          method: "GET",
          queryParams: {
            latitude: coords.latitude.toFixed(4),
            longitude: coords.longitude.toFixed(4),
            current: "temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m",
            temperature_unit: unit,
          },
        });
        if (cancelled) return;
        if (!isWeatherPayload(response)) {
          setError("Weather data is unavailable right now.");
          setWeather(null);
          return;
        }
        setWeather({
          temperature: response.current.temperature_2m,
          humidity: response.current.relative_humidity_2m,
          windSpeed: response.current.wind_speed_10m,
          weatherCode: response.current.weather_code,
          unit,
        });
      } catch (err) {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Failed to load weather.");
        setWeather(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [coords, unit, widgetServiceSdk]);

  useEffect(() => {
    if (!coords) return;
    let cancelled = false;
    (async () => {
      try {
        const response = await widgetServiceSdk.connectors.execute({
          permalink: "weather-widget-reverse-geocode",
          method: "GET",
          queryParams: {
            latitude: coords.latitude.toFixed(4),
            longitude: coords.longitude.toFixed(4),
            localityLanguage: "en",
          },
        });
        if (cancelled) return;
        setPlace(extractPlace(response));
      } catch {
        if (!cancelled) setPlace(null);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [coords, widgetServiceSdk]);

  const unitSymbol = unit === "fahrenheit" ? "°F" : "°C";

  return (
    <div className="weather-stage">
      <div className="card weather-card">
        <div className="card-content has-text-centered">
          {loading && (
            <p className="is-size-5 has-text-grey">Loading weather…</p>
          )}

          {!loading && error && (
            <>
              <p className="title is-5 has-text-danger mb-2">Weather unavailable</p>
              <p className="subtitle is-6 has-text-grey-dark">{error}</p>
              <button
                type="button"
                className="button is-link is-small mt-3"
                onClick={requestLocation}
              >
                Try again
              </button>
            </>
          )}

          {!loading && !error && weather && (
            <>
              <p className="weather-emoji">{weatherEmoji(weather.weatherCode)}</p>
              <p className="title is-1 weather-temp">
                {Math.round(weather.temperature)}
                <span className="weather-unit">{unitSymbol}</span>
              </p>
              <p className="subtitle is-5 has-text-grey-dark">
                {describeWeather(weather.weatherCode)}
              </p>
              <div className="columns is-mobile is-centered weather-stats mt-4">
                <div className="column is-narrow">
                  <p className="heading">Humidity</p>
                  <p className="weather-stat-value">{weather.humidity}%</p>
                </div>
                <div className="column is-narrow">
                  <p className="heading">Wind</p>
                  <p className="weather-stat-value">
                    {Math.round(weather.windSpeed)} km/h
                  </p>
                </div>
              </div>
              {place?.city && (
                <p className="weather-place">
                  {place.city}
                  {place.country ? `, ${place.country}` : ""}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
