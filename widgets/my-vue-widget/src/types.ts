export interface WidgetProps {
  title?: string;
  defaultCode?: string;
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

export interface ConnectorsAPI {
  execute<T = unknown>(params: {
    permalink: string;
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    queryParams?: Record<string, string | number | boolean>;
    payload?: unknown;
    headers?: Record<string, string>;
  }): Promise<T>;
}

export interface WidgetServiceSDK {
  connectors: ConnectorsAPI;
}

declare global {
  interface Window {
    WidgetServiceSDK: new () => WidgetServiceSDK;
  }
}

export interface CountryName {
  common: string;
  official: string;
}

export interface CountryFlags {
  png?: string;
  svg?: string;
  alt?: string;
}

export interface Country {
  name: CountryName;
  cca2?: string;
  cca3?: string;
  flag?: string;
  flags: CountryFlags;
  capital?: string[];
  region?: string;
  subregion?: string;
  population?: number;
  area?: number;
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol?: string }>;
  timezones?: string[];
  maps?: { googleMaps?: string };
}
