export interface WidgetProps {
  title?: string;
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
  method?: string;
  queryParams?: Record<string, string>;
  payload?: unknown;
  headers?: Record<string, string>;
}

export interface ConnectorsSDK {
  connectors: {
    execute<T = unknown>(args: ConnectorExecuteArgs): Promise<T>;
  };
}

export interface ConnectorsSDKConstructor {
  new (): ConnectorsSDK;
}

export interface Todo {
  id: number | string;
  title: string;
  created_at?: string;
}
