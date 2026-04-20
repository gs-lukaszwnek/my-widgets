/// <reference types="vite/client" />

import type { ConnectorsSDK } from "./types";

declare global {
  interface Window {
    WidgetServiceSDK?: new () => ConnectorsSDK;
  }
}

export {};
