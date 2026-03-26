<script setup lang="ts">
import { onUnmounted, ref } from "vue";
import type {
  Country,
  WidgetProps,
  WidgetSDK,
  WidgetServiceSDK,
} from "./types";

const COUNTRIES_PERMALINK = "my-vue-widget-countries";

const { sdk, widgetServiceSdk } = defineProps<{
  sdk: WidgetSDK;
  widgetServiceSdk: WidgetServiceSDK;
}>();

const props = ref<WidgetProps>(sdk.getProps());
const unsubProps = sdk.on("propsChanged", (newProps) => {
  props.value = newProps;
});
onUnmounted(unsubProps);

const query = ref<string>(props.value.defaultCode ?? "pl");
const status = ref<"idle" | "loading" | "ready" | "error">("idle");
const country = ref<Country | null>(null);
const errorMsg = ref<string>("");
let inFlight = 0;

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

const formatNumber = (n?: number) =>
  n === undefined ? "—" : new Intl.NumberFormat("en-US").format(n);

const search = async (rawCode: string) => {
  const code = rawCode.trim().toLowerCase();
  if (!code || code.length < 2 || code.length > 3) {
    status.value = "error";
    errorMsg.value = "Enter a 2- or 3-letter country code (e.g. us, pl, jpn).";
    country.value = null;
    return;
  }
  const ticket = ++inFlight;
  status.value = "loading";
  try {
    const res = await widgetServiceSdk.connectors.execute<Country | Country[]>({
      permalink: COUNTRIES_PERMALINK,
      method: "GET",
      queryParams: { code },
    });
    if (ticket !== inFlight) return;
    const payload = unwrap<Country | Country[]>(res);
    let single: Country | undefined;
    if (Array.isArray(payload)) {
      single = payload[0];
    } else {
      single = payload;
    }
    if (!single || !single.name?.common) {
      status.value = "error";
      errorMsg.value = `No country found for "${code}".`;
      country.value = null;
      return;
    }
    country.value = single;
    status.value = "ready";
  } catch (err) {
    if (ticket !== inFlight) return;
    status.value = "error";
    errorMsg.value = err instanceof Error ? err.message : "Request failed";
    country.value = null;
  }
};

void search(query.value);

const onSubmit = (e: Event) => {
  e.preventDefault();
  void search(query.value);
};

const heading = () => props.value.title?.trim() || "Country Explorer";
</script>

<template>
  <section
    aria-labelledby="country-heading"
    class="rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-5 shadow-md ring-1 ring-stone-200"
  >
    <header class="mb-4 flex items-center justify-between gap-3">
      <h2
        id="country-heading"
        class="text-lg font-bold tracking-tight text-stone-900"
      >
        {{ heading() }}
      </h2>
      <span class="text-xs font-semibold uppercase tracking-wider text-emerald-700">
        REST Countries
      </span>
    </header>

    <form class="mb-4 flex gap-2" @submit="onSubmit">
      <label for="country-input" class="sr-only">Country code</label>
      <input
        id="country-input"
        v-model="query"
        type="text"
        placeholder="cca2 or cca3, e.g. pl, jpn"
        class="min-h-[44px] flex-1 rounded-lg border border-stone-500 bg-white px-3 py-2.5 text-sm text-stone-900 placeholder:text-stone-600 focus:border-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
      />
      <button
        type="submit"
        :disabled="status === 'loading'"
        class="min-h-[44px] rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 disabled:cursor-not-allowed disabled:bg-emerald-300 disabled:text-emerald-900"
      >
        {{ status === "loading" ? "Loading…" : "Search" }}
      </button>
    </form>

    <div role="status" aria-live="polite" class="min-h-[160px]">
      <p v-if="status === 'idle'" class="text-sm text-stone-600">
        Enter a country code to begin.
      </p>
      <p v-else-if="status === 'loading'" class="text-sm text-stone-600">
        Loading country…
      </p>
      <p
        v-else-if="status === 'error'"
        class="rounded-lg bg-amber-100 p-3 text-sm font-medium text-amber-900"
      >
        {{ errorMsg }}
      </p>
      <article
        v-else-if="status === 'ready' && country"
        class="flex flex-col gap-4 rounded-xl bg-white/80 p-4 shadow-inner ring-1 ring-stone-200 sm:flex-row"
      >
        <img
          v-if="country.flags?.svg || country.flags?.png"
          :src="country.flags.svg ?? country.flags.png"
          :alt="country.flags.alt ?? `Flag of ${country.name.common}`"
          class="h-24 w-36 self-start rounded-md object-cover shadow ring-1 ring-stone-300"
          loading="lazy"
        />
        <div class="flex-1">
          <div class="flex items-baseline justify-between gap-2">
            <h3 class="text-xl font-bold text-stone-900">
              {{ country.name.common }}
            </h3>
            <span class="font-mono text-sm text-stone-500">
              {{ country.cca2 ?? "" }} · {{ country.cca3 ?? "" }}
            </span>
          </div>
          <p class="text-xs italic text-stone-600">{{ country.name.official }}</p>

          <dl
            class="mt-3 grid grid-cols-1 gap-x-4 gap-y-1 text-sm text-stone-700 sm:grid-cols-2"
          >
            <div class="flex justify-between">
              <dt class="font-medium">Capital</dt>
              <dd class="text-right">
                {{ country.capital?.[0] ?? "—" }}
              </dd>
            </div>
            <div class="flex justify-between">
              <dt class="font-medium">Region</dt>
              <dd class="text-right">{{ country.region ?? "—" }}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="font-medium">Subregion</dt>
              <dd class="text-right">{{ country.subregion ?? "—" }}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="font-medium">Population</dt>
              <dd class="text-right font-mono">
                {{ formatNumber(country.population) }}
              </dd>
            </div>
            <div class="flex justify-between">
              <dt class="font-medium">Area (km²)</dt>
              <dd class="text-right font-mono">
                {{ formatNumber(country.area) }}
              </dd>
            </div>
            <div class="flex justify-between">
              <dt class="font-medium">Languages</dt>
              <dd class="text-right">
                {{
                  country.languages
                    ? Object.values(country.languages).join(", ")
                    : "—"
                }}
              </dd>
            </div>
          </dl>
        </div>
      </article>
    </div>
  </section>
</template>
