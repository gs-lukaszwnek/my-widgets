export interface WidgetProps {
  title?: string;
  defaultPokemon?: string;
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

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
}

export interface PokemonType {
  slot: number;
  type: { name: string; url: string };
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: {
    front_default: string | null;
    other?: {
      "official-artwork"?: { front_default: string | null };
    };
  };
  stats: PokemonStat[];
  types: PokemonType[];
}
