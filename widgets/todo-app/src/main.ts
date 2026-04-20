import widgetCss from "./widget.css?inline";
import { createApp } from "vue";
import App from "./App.vue";
import type { WidgetSDK, ConnectorsSDK } from "./types";

import "@spectrum-web-components/theme/sp-theme.js";
import "@spectrum-web-components/theme/theme-light.js";
import "@spectrum-web-components/theme/scale-medium.js";
import "@spectrum-web-components/button/sp-button.js";
import "@spectrum-web-components/textfield/sp-textfield.js";
import "@spectrum-web-components/field-label/sp-field-label.js";
import "@spectrum-web-components/action-button/sp-action-button.js";
import "@spectrum-web-components/progress-circle/sp-progress-circle.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-delete.js";
import "@spectrum-web-components/toast/sp-toast.js";

let currentCss = widgetCss;
const styles = new Set<HTMLStyleElement>();

if (import.meta.hot) {
  import.meta.hot.accept("./widget.css?inline", (mod) => {
    if (typeof mod?.default === "string") currentCss = mod.default;
    styles.forEach((s) => (s.textContent = currentCss));
  });
}

export async function init(sdk: WidgetSDK) {
  await sdk.whenReady();

  const style = document.createElement("style");
  style.textContent = currentCss;
  styles.add(style);
  sdk.shadowRoot.insertBefore(style, sdk.shadowRoot.firstChild);

  if (!window.WidgetServiceSDK) {
    const container = sdk.getContainer();
    container.textContent =
      "Connectors SDK failed to load. Include the UMD script in index.html.";
    return;
  }
  const connectors: ConnectorsSDK = new window.WidgetServiceSDK();

  const app = createApp(App, { sdk, connectors });
  app.mount(sdk.getContainer());

  sdk.on("destroy", () => {
    styles.delete(style);
    style.remove();
    app.unmount();
  });
}
