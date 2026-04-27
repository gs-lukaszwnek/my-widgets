export interface WidgetProps {
  temperatureUnit?: string;
  [key: string]: unknown;
}

export interface WidgetSDK {
  whenReady(): Promise<void>;
  shadowRoot: ShadowRoot;
  getContainer(): Element;
  getProps(): WidgetProps;
  on(event: string, callback: (data: unknown) => void): () => void;
  emit(event: string, data?: unknown): void;
}

export type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "HEAD"
  | "OPTIONS";

export interface ConnectorExecuteArgs {
  permalink: string;
  method: HttpMethod;
  payload?: Record<string, unknown>;
  queryParams?: Record<string, string>;
  headers?: Record<string, string>;
}

export interface ConnectorsAPI {
  execute(args: ConnectorExecuteArgs): Promise<Record<string, unknown>>;
}

export interface WidgetServiceSDK {
  connectors: ConnectorsAPI;
}
