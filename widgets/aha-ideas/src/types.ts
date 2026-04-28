export interface WidgetProps {
  productKey?: string | number;
  pageSize?: string | number;
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
  queryParams?: Record<string, string>;
  payload?: unknown;
  headers?: Record<string, string>;
}

export interface ConnectorsAPI {
  execute(args: ConnectorExecuteArgs): Promise<unknown>;
}

export interface WidgetServiceSDK {
  connectors: ConnectorsAPI;
}

declare global {
  interface Window {
    WidgetServiceSDK: { new (): WidgetServiceSDK };
  }
}

export type SortOption = "recent" | "trending" | "popular";

export interface IdeaDescription {
  body?: string;
}

export interface Idea {
  id: string;
  reference_num?: string;
  name: string;
  description?: IdeaDescription | string | null;
  endorsement_count?: number;
  score?: number;
  created_at?: string;
  url?: string;
}

export interface Pagination {
  total_records?: number;
  total_pages?: number;
  current_page?: number;
}

export interface Product {
  id: string;
  name: string;
  reference_prefix?: string;
}
