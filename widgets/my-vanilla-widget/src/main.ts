import widgetCssRaw from "./widget.css?inline";
import type {
  DogBreedsResponse,
  DogImageResponse,
  WidgetProps,
  WidgetSDK,
  WidgetServiceSDK,
} from "./types";

const BREEDS_PERMALINK = "my-vanilla-widget-dog-breeds";
const IMAGE_PERMALINK = "my-vanilla-widget-dog-image";

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

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const isRecord = (x: unknown): x is Record<string, unknown> =>
  x !== null && typeof x === "object";

const unwrap = <T,>(res: unknown): T | undefined => {
  if (!isRecord(res)) return undefined;
  const data = res["data"];
  if (isRecord(data)) return data as T;
  const body = res["body"];
  if (isRecord(body)) return body as T;
  return res as T;
};

const formatBreed = (raw: string) =>
  raw
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

interface WidgetState {
  props: WidgetProps;
  breeds: string[];
  selectedBreed: string;
  imageUrl: string | null;
  status: "idle" | "loading-breeds" | "loading-image" | "ready" | "error";
  errorMsg: string;
}

export async function init(sdk: WidgetSDK) {
  await sdk.whenReady();
  const widgetServiceSdk = new window.WidgetServiceSDK();
  const style = document.createElement("style");
  style.textContent = currentCss;
  styles.add(style);
  sdk.shadowRoot.insertBefore(style, sdk.shadowRoot.firstChild);
  const container = sdk.getContainer();

  const state: WidgetState = {
    props: sdk.getProps(),
    breeds: [],
    selectedBreed: "",
    imageUrl: null,
    status: "loading-breeds",
    errorMsg: "",
  };

  let imageTicket = 0;

  const render = () => {
    const heading = state.props.title?.trim() || "Random Dog";
    const options = state.breeds
      .map(
        (b) =>
          `<option value="${esc(b)}"${b === state.selectedBreed ? " selected" : ""}>${esc(formatBreed(b))}</option>`,
      )
      .join("");

    let main = "";
    if (state.status === "loading-breeds") {
      main = `<p class="text-sm text-stone-600">Loading breed list…</p>`;
    } else if (state.status === "error") {
      main = `<p class="rounded-lg bg-amber-100 p-3 text-sm font-medium text-amber-900">${esc(state.errorMsg)}</p>`;
    } else if (state.status === "loading-image") {
      main = `<p class="text-sm text-stone-600">Fetching a ${esc(formatBreed(state.selectedBreed))}…</p>`;
    } else if (state.status === "ready" && state.imageUrl) {
      main = `
        <figure class="overflow-hidden rounded-xl bg-white shadow ring-1 ring-stone-200">
          <img src="${esc(state.imageUrl)}" alt="A ${esc(formatBreed(state.selectedBreed))} dog" loading="lazy" class="aspect-[4/3] w-full object-cover" />
          <figcaption class="px-3 py-2 text-sm text-stone-700">
            Random <span class="font-semibold text-stone-900">${esc(formatBreed(state.selectedBreed))}</span> from Dog CEO API
          </figcaption>
        </figure>`;
    }

    container.innerHTML = `
      <section aria-labelledby="dog-heading" class="rounded-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-5 shadow-md ring-1 ring-stone-200">
        <header class="mb-4 flex items-center justify-between gap-3">
          <h2 id="dog-heading" class="text-lg font-bold tracking-tight text-stone-900">${esc(heading)}</h2>
          <span class="text-xs font-semibold uppercase tracking-wider text-orange-700">Dog CEO</span>
        </header>
        <div class="mb-4 flex gap-2">
          <label for="dog-breed-select" class="sr-only">Breed</label>
          <select
            id="dog-breed-select"
            ${state.status === "loading-breeds" ? "disabled" : ""}
            class="min-h-[44px] flex-1 rounded-lg border border-stone-500 bg-white px-3 py-2.5 text-sm text-stone-900 focus:border-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 disabled:bg-stone-100 disabled:text-stone-700"
          >
            ${options || `<option>Loading…</option>`}
          </select>
          <button
            id="dog-fetch-btn"
            type="button"
            ${state.status === "loading-breeds" || state.status === "loading-image" ? "disabled" : ""}
            class="min-h-[44px] rounded-lg bg-orange-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800 disabled:cursor-not-allowed disabled:bg-orange-300 disabled:text-orange-900"
          >
            ${state.status === "loading-image" ? "Fetching…" : "Fetch"}
          </button>
        </div>
        <div role="status" class="min-h-[180px]">${main}</div>
      </section>
    `;

    const select = container.querySelector<HTMLSelectElement>("#dog-breed-select");
    const button = container.querySelector<HTMLButtonElement>("#dog-fetch-btn");
    select?.addEventListener("change", () => {
      state.selectedBreed = select.value;
      void fetchImage();
    });
    button?.addEventListener("click", () => {
      void fetchImage();
    });
  };

  const fetchImage = async () => {
    const breed = state.selectedBreed;
    if (!breed) return;
    const ticket = ++imageTicket;
    state.status = "loading-image";
    state.imageUrl = null;
    render();
    try {
      const res = await widgetServiceSdk.connectors.execute<DogImageResponse>({
        permalink: IMAGE_PERMALINK,
        method: "GET",
        queryParams: { breed },
      });
      if (ticket !== imageTicket) return;
      const payload = unwrap<DogImageResponse>(res);
      if (!payload || payload.status !== "success" || !payload.message) {
        state.status = "error";
        state.errorMsg = `Could not fetch image for "${formatBreed(breed)}".`;
        render();
        return;
      }
      state.imageUrl = payload.message;
      state.status = "ready";
      render();
    } catch (err) {
      if (ticket !== imageTicket) return;
      state.status = "error";
      state.errorMsg = err instanceof Error ? err.message : "Request failed";
      render();
    }
  };

  const fetchBreeds = async () => {
    state.status = "loading-breeds";
    render();
    try {
      const res = await widgetServiceSdk.connectors.execute<DogBreedsResponse>({
        permalink: BREEDS_PERMALINK,
        method: "GET",
      });
      const payload = unwrap<DogBreedsResponse>(res);
      if (!payload || payload.status !== "success" || !payload.message) {
        state.status = "error";
        state.errorMsg = "Could not load breed list.";
        render();
        return;
      }
      state.breeds = Object.keys(payload.message).sort();
      const desired = (state.props.defaultBreed ?? "hound").toLowerCase();
      state.selectedBreed = state.breeds.includes(desired)
        ? desired
        : (state.breeds[0] ?? "");
      if (state.selectedBreed) {
        await fetchImage();
      } else {
        state.status = "error";
        state.errorMsg = "No breeds returned.";
        render();
      }
    } catch (err) {
      state.status = "error";
      state.errorMsg = err instanceof Error ? err.message : "Request failed";
      render();
    }
  };

  const unsubscribe = sdk.on("propsChanged", (newProps: WidgetProps) => {
    state.props = newProps;
    render();
  });

  sdk.on("destroy", () => {
    unsubscribe();
    styles.delete(style);
    style.remove();
    container.innerHTML = "";
  });

  render();
  void fetchBreeds();
}
