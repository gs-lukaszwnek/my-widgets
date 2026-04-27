import { useEffect, useState } from "react";
import type { WidgetSDK, WidgetServiceSDK } from "./types";

type Status =
  | { kind: "idle" }
  | { kind: "locating" }
  | { kind: "loading" }
  | { kind: "ready"; city: string; temperature: number; unit: string }
  | { kind: "error"; message: string };

const formatLatLon = (n: number) => n.toFixed(4);

const pickCity = (geo: Record<string, unknown>): string => {
  const candidates = ["city", "locality", "principalSubdivision", "countryName"];
  for (const key of candidates) {
    const value = geo[key];
    if (typeof value === "string" && value.trim().length > 0) return value;
  }
  return "Your location";
};

const pickTemperature = (
  weather: Record<string, unknown>,
): { temperature: number; unit: string } | null => {
  const current = weather.current as Record<string, unknown> | undefined;
  const units = weather.current_units as Record<string, unknown> | undefined;
  const temp = current?.temperature_2m;
  if (typeof temp !== "number") return null;
  const unitRaw = units?.temperature_2m;
  const unit = typeof unitRaw === "string" ? unitRaw : "°C";
  return { temperature: temp, unit };
};

export function App({
  sdk: _sdk,
  widgetServiceSdk,
}: {
  sdk: WidgetSDK;
  widgetServiceSdk: WidgetServiceSDK;
}) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  useEffect(() => {
    let cancelled = false;

    if (!("geolocation" in navigator)) {
      setStatus({
        kind: "error",
        message: "Geolocation is not supported in this browser.",
      });
      return;
    }

    setStatus({ kind: "locating" });

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        if (cancelled) return;
        const lat = formatLatLon(position.coords.latitude);
        const lon = formatLatLon(position.coords.longitude);
        setStatus({ kind: "loading" });
        try {
          const [geo, weather] = await Promise.all([
            widgetServiceSdk.connectors.execute({
              permalink: "weather-react-reverse-geocode",
              method: "GET",
              queryParams: { latitude: lat, longitude: lon },
            }),
            widgetServiceSdk.connectors.execute({
              permalink: "weather-react-current-weather",
              method: "GET",
              queryParams: { latitude: lat, longitude: lon },
            }),
          ]);
          if (cancelled) return;
          const city = pickCity(geo);
          const temp = pickTemperature(weather);
          if (!temp) {
            setStatus({ kind: "error", message: "Weather response missing temperature." });
            return;
          }
          setStatus({ kind: "ready", city, temperature: temp.temperature, unit: temp.unit });
        } catch (err) {
          if (cancelled) return;
          const message =
            err instanceof Error && err.message
              ? err.message
              : "Could not load weather data.";
          setStatus({ kind: "error", message });
        }
      },
      (geoError) => {
        if (cancelled) return;
        const message =
          geoError.code === geoError.PERMISSION_DENIED
            ? "Location permission denied."
            : "Could not determine your location.";
        setStatus({ kind: "error", message });
      },
      { enableHighAccuracy: false, maximumAge: 5 * 60 * 1000, timeout: 10_000 },
    );

    return () => {
      cancelled = true;
    };
  }, [widgetServiceSdk]);

  if (status.kind === "ready") {
    const rounded = Math.round(status.temperature);
    return (
      <section className="weather-card weather-card--ready">
        <div className="weather-card__city-row">
          <span className="weather-card__pin" aria-hidden="true">📍</span>
          <h3 className="weather-card__city">{status.city}</h3>
        </div>
        <div className="weather-card__temp-row">
          <span className="weather-card__temp">{rounded}</span>
          <span className="weather-card__unit">{status.unit}</span>
        </div>
      </section>
    );
  }

  if (status.kind === "error") {
    return (
      <section className="weather-card weather-card--error" role="alert">
        <h3 className="weather-card__city">Weather unavailable</h3>
        <p className="weather-card__hint">{status.message}</p>
      </section>
    );
  }

  const hint =
    status.kind === "locating" ? "Detecting your location…" : "Fetching weather…";
  return (
    <section className="weather-card weather-card--loading" aria-busy="true">
      <div className="weather-card__spinner" aria-hidden="true" />
      <p className="weather-card__hint">{hint}</p>
    </section>
  );
}
