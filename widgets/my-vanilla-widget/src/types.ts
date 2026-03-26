export interface WidgetProps {
  title?: string;
  defaultBreed?: string;
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

export interface DogBreedsResponse {
  message: Record<string, string[]>;
  status: string;
}

export interface DogImageResponse {
  message: string;
  status: string;
}
