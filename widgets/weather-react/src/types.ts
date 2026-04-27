export interface WidgetProps {
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

export interface ExecuteOptions {
  permalink: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";
  queryParams?: Record<string, string>;
  headers?: Record<string, string>;
  payload?: unknown;
}

export interface ConnectorsAPI {
  execute(options: ExecuteOptions): Promise<Record<string, unknown>>;
}

export interface WidgetServiceSDK {
  connectors: ConnectorsAPI;
}

declare global {
  interface Window {
    WidgetServiceSDK: new () => WidgetServiceSDK;
  }
}
