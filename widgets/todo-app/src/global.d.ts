/// <reference types="vite/client" />

import type { ConnectorsSDKConstructor } from "./types";

declare global {
  interface Window {
    WidgetServiceSDK?: ConnectorsSDKConstructor;
  }
}

export {};
