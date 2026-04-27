export type Units = "celsius" | "fahrenheit";
export type Accent = "indigo" | "violet" | "cyan" | "emerald";

export interface WidgetProps {
  units?: Units;
  accent?: Accent;
  [key: string]: unknown;
}

export interface WidgetSDK {
  whenReady(): Promise<void>;
  shadowRoot: ShadowRoot;
  getContainer(): Element;
  getProps(): WidgetProps;
  on(event: string, callback: (data: any) => void): () => void;
  emit(event: string, data?: unknown): void;
}

export interface ConnectorsExecuteArgs {
  permalink: string;
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE" | "HEAD" | "OPTIONS";
  payload?: unknown;
  queryParams?: Record<string, string>;
  headers?: Record<string, string>;
}

export interface ConnectorsAPI {
  execute<T = unknown>(args: ConnectorsExecuteArgs): Promise<T>;
}

export interface WidgetServiceSDK {
  connectors: ConnectorsAPI;
  developerMode?: boolean;
  developerApiKey?: string;
  developerUserContext?: string;
  isBrowser?: boolean;
}

declare global {
  interface Window {
    WidgetServiceSDK: new () => WidgetServiceSDK;
  }
}

export interface ForecastResponse {
  current?: {
    temperature_2m?: number;
    weather_code?: number;
    is_day?: number;
    wind_speed_10m?: number;
    relative_humidity_2m?: number;
  };
  current_units?: {
    temperature_2m?: string;
    wind_speed_10m?: string;
  };
}

export interface ReverseGeocodeResponse {
  city?: string;
  locality?: string;
  principalSubdivision?: string;
  countryName?: string;
}
