import { createApp } from "vue";
import App from "./App.vue";
import type { ConnectorsSDK, WidgetSDK } from "./types";

const SDK_MISSING_HINT =
  "[todo-app] window.WidgetServiceSDK missing. Include https://static.customer-hub.northpass.com/widget-sdk/latest/index.umd.js before widget.js.";

export async function init(sdk: WidgetSDK) {
  await sdk.whenReady();

  const Factory = window.WidgetServiceSDK;
  if (!Factory) {
    console.error(SDK_MISSING_HINT);
    return;
  }
  const connectorsSdk: ConnectorsSDK = new Factory();

  const app = createApp(App, { sdk, connectorsSdk });
  app.mount(sdk.getContainer());
  sdk.on("destroy", () => app.unmount());
}
