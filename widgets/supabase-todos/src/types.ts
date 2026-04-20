export type ThemeMode = "light" | "dark";

export interface WidgetProps {
  heading: string;
  emptyStateText: string;
  pageSize: number;
  theme: ThemeMode;
  [key: string]: unknown;
}

export interface Todo {
  id: string;
  title: string;
  created_at: string;
}

export interface ConnectorExecuteArgs {
  permalink: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";
  payload?: Record<string, unknown>;
  queryParams?: Record<string, string | number>;
  headers?: Record<string, string>;
}

export interface WidgetSDK {
  whenReady(): Promise<void>;
  shadowRoot: ShadowRoot;
  getContainer(): Element;
  getProps(): WidgetProps;
  on(event: string, callback: (data: WidgetProps) => void): () => void;
  emit(event: string, data?: unknown): void;
  connectors: {
    execute<T = unknown>(args: ConnectorExecuteArgs): Promise<T>;
  };
}

export const isTodo = (value: unknown): value is Todo => {
  if (typeof value !== "object" || value === null) return false;
  if (!("id" in value) || !("title" in value) || !("created_at" in value)) return false;
  const { id, title, created_at } = value;
  return typeof id === "string" && typeof title === "string" && typeof created_at === "string";
};

export const isTodoArray = (value: unknown): value is Todo[] =>
  Array.isArray(value) && value.every(isTodo);
