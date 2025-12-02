import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

function renderWidget(container: HTMLElement) {
  if (container.hasAttribute("data-pokemon-initialized")) return;
  container.setAttribute("data-pokemon-initialized", "true");

  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

class PokemonWidgetElement extends HTMLElement {
  connectedCallback() {
    renderWidget(this);
  }
}

if (!customElements.get("pokemon-widget")) {
  customElements.define("pokemon-widget", PokemonWidgetElement);
}
