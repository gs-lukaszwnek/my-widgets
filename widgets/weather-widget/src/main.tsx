import widgetCss from "./widget.css?inline";
import "./setup-dev";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import type { WidgetSDK } from "./types";

const BULMA_CDN = "https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css";

let currentCss = widgetCss;
const styles = new Set<HTMLStyleElement>();

if (import.meta.hot) {
  import.meta.hot.accept("./widget.css?inline", (mod) => {
    if (typeof mod?.default === "string") {
      currentCss = mod.default;
      styles.forEach((s) => (s.textContent = currentCss));
    }
  });
}

export async function init(sdk: WidgetSDK) {
  await sdk.whenReady();
  const widgetServiceSdk = new window.WidgetServiceSDK();

  const bulmaLink = document.createElement("link");
  bulmaLink.rel = "stylesheet";
  bulmaLink.href = BULMA_CDN;
  sdk.shadowRoot.insertBefore(bulmaLink, sdk.shadowRoot.firstChild);

  const style = document.createElement("style");
  style.textContent = currentCss;
  styles.add(style);
  sdk.shadowRoot.insertBefore(style, bulmaLink.nextSibling);

  const root = createRoot(sdk.getContainer());
  root.render(<App sdk={sdk} widgetServiceSdk={widgetServiceSdk} />);

  sdk.on("destroy", () => {
    styles.delete(style);
    style.remove();
    bulmaLink.remove();
    root.unmount();
  });
}
