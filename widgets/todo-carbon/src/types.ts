export interface WidgetProps {
  title?: string;
  placeholder?: string;
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

export interface ConnectorExecuteArgs {
  permalink: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  payload?: Record<string, unknown>;
  queryParams?: Record<string, string>;
  headers?: Record<string, string>;
}

export interface ConnectorsSDK {
  connectors: {
    execute<T = unknown>(args: ConnectorExecuteArgs): Promise<T>;
  };
}

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  created_at: string;
}

declare global {
  interface Window {
    WidgetServiceSDK: new () => ConnectorsSDK;
  }
}
