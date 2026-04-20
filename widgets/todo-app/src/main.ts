import widgetCss from "./widget.css?inline";
import { createApp } from "vue";
import App from "./App.vue";
import type { ConnectorsSDK, WidgetSDK } from "./types";

import "@spectrum-web-components/theme/sp-theme.js";
import "@spectrum-web-components/theme/spectrum-two/theme-light.js";
import "@spectrum-web-components/theme/spectrum-two/scale-medium.js";
import "@spectrum-web-components/button/sp-button.js";
import "@spectrum-web-components/textfield/sp-textfield.js";
import "@spectrum-web-components/checkbox/sp-checkbox.js";
import "@spectrum-web-components/action-button/sp-action-button.js";
import "@spectrum-web-components/divider/sp-divider.js";
import "@spectrum-web-components/field-label/sp-field-label.js";
import "@spectrum-web-components/progress-circle/sp-progress-circle.js";
import "@spectrum-web-components/status-light/sp-status-light.js";
import "@spectrum-web-components/illustrated-message/sp-illustrated-message.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-delete.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-add.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-checkmark.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-refresh.js";

let currentCss = widgetCss;
const styles = new Set<HTMLStyleElement>();

if (import.meta.hot) {
  import.meta.hot.accept("./widget.css?inline", (mod) => {
    if (typeof mod?.default === "string") currentCss = mod.default;
    styles.forEach((s) => (s.textContent = currentCss));
  });
}

const loadConnectorsSDK = (): ConnectorsSDK | null => {
  if (!window.WidgetServiceSDK) return null;
  return new window.WidgetServiceSDK();
};

export async function init(sdk: WidgetSDK) {
  await sdk.whenReady();
  const style = document.createElement("style");
  style.textContent = currentCss;
  styles.add(style);
  sdk.shadowRoot.insertBefore(style, sdk.shadowRoot.firstChild);

  const connectors = loadConnectorsSDK();
  if (!connectors) {
    const container = sdk.getContainer();
    container.textContent =
      "Connectors SDK failed to load. Include the widget-sdk UMD script in index.html.";
    return;
  }

  const app = createApp(App, { sdk, connectors });
  app.mount(sdk.getContainer());
  sdk.on("destroy", () => {
    styles.delete(style);
    style.remove();
    app.unmount();
  });
}
