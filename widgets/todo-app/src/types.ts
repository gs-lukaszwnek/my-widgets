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
  on(event: string, callback: (data: unknown) => void): () => void;
  emit(event: string, data?: unknown): void;
}

export type ConnectorMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ConnectorExecuteArgs {
  permalink: string;
  method?: ConnectorMethod;
  payload?: unknown;
  queryParams?: Record<string, string | number | boolean>;
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

export const CONNECTOR_LIST = "todo-app-list-todos";
export const CONNECTOR_CREATE = "todo-app-create-todo";
export const CONNECTOR_UPDATE = "todo-app-update-todo";
export const CONNECTOR_DELETE = "todo-app-delete-todo";
