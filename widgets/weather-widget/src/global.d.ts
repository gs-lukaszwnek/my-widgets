/// <reference types="vite/client" />

import type { WidgetServiceSDK } from "./types";

declare global {
  interface Window {
    WidgetServiceSDK: new () => WidgetServiceSDK;
  }
}

export {};
