export interface WidgetProps {
  title?: string;
  defaultQuery?: string;
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

export interface SwapiPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld?: string;
  url: string;
}
