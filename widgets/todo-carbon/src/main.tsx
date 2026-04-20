import widgetCss from "./widget.scss?inline";
import "./setup-dev";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import type { ConnectorsSDK, WidgetSDK } from "./types";

const scopedCss = widgetCss.replace(/:root\b/g, ":host");

let currentCss = scopedCss;
const styles = new Set<HTMLStyleElement>();

if (import.meta.hot) {
  import.meta.hot.accept("./widget.scss?inline", (mod) => {
    if (typeof mod?.default === "string") {
      currentCss = mod.default.replace(/:root\b/g, ":host");
    }
    styles.forEach((s) => (s.textContent = currentCss));
  });
}

export const init = async (sdk: WidgetSDK) => {
  await sdk.whenReady();

  if (!window.WidgetServiceSDK) {
    const msg =
      "Connectors SDK missing — include the widget-sdk UMD script in index.html before widget.js.";
    const banner = document.createElement("div");
    banner.style.cssText =
      "padding:16px;font-family:system-ui;color:#a2191f;background:#fff1f1;border:1px solid #ffd7d9;border-radius:4px;";
    banner.textContent = msg;
    sdk.getContainer().appendChild(banner);
    return;
  }

  const connectors: ConnectorsSDK = new window.WidgetServiceSDK();

  const style = document.createElement("style");
  style.textContent = currentCss;
  styles.add(style);
  sdk.shadowRoot.insertBefore(style, sdk.shadowRoot.firstChild);

  const root = createRoot(sdk.getContainer());
  root.render(<App sdk={sdk} connectors={connectors} />);

  sdk.on("destroy", () => {
    styles.delete(style);
    style.remove();
    root.unmount();
  });
};
