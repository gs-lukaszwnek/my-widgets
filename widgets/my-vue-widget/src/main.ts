import widgetCssRaw from "./widget.css?inline";
import { createApp } from "vue";
import App from "./App.vue";
import type { WidgetSDK } from "./types";

const patchShadow = (css: string) => css.replaceAll(":root", ":host");

let currentCss = patchShadow(widgetCssRaw);
const styles = new Set<HTMLStyleElement>();

if (import.meta.hot) {
  import.meta.hot.accept("./widget.css?inline", (mod) => {
    if (typeof mod?.default === "string") {
      currentCss = patchShadow(mod.default);
      styles.forEach((s) => (s.textContent = currentCss));
    }
  });
}

export async function init(sdk: WidgetSDK) {
  await sdk.whenReady();
  const widgetServiceSdk = new window.WidgetServiceSDK();
  const style = document.createElement("style");
  style.textContent = currentCss;
  styles.add(style);
  sdk.shadowRoot.insertBefore(style, sdk.shadowRoot.firstChild);
  const app = createApp(App, { sdk, widgetServiceSdk });
  app.mount(sdk.getContainer());
  sdk.on("destroy", () => {
    styles.delete(style);
    style.remove();
    app.unmount();
  });
}
