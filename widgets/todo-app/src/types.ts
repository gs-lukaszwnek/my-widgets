export interface WidgetProps {
  title?: string;
  placeholder?: string;
  theme?: "light" | "dark";
  [key: string]: unknown;
}

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  created_at: string;
}

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";

export interface ConnectorExecuteInput {
  permalink: string;
  method?: HttpMethod;
  payload?: Record<string, unknown>;
  queryParams?: Record<string, string>;
  headers?: Record<string, string>;
}

export interface WidgetSDK {
  whenReady(): Promise<void>;
  shadowRoot: ShadowRoot;
  getContainer(): Element;
  getProps(): WidgetProps;
  on(event: string, callback: (data: any) => void): () => void;
  emit(event: string, data?: unknown): void;
}

export interface ConnectorsSDK {
  connectors: {
    execute<T = unknown>(input: ConnectorExecuteInput): Promise<T>;
  };
}

declare global {
  interface Window {
    WidgetServiceSDK?: new () => ConnectorsSDK;
  }
}
