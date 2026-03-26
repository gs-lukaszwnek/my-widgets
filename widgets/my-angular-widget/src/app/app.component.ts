import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  InjectionToken,
  ViewEncapsulation,
  computed,
  inject,
  signal,
} from "@angular/core";
import type {
  SwapiPerson,
  WidgetProps,
  WidgetSDK,
  WidgetServiceSDK,
} from "../types";

export const WIDGET_SDK = new InjectionToken<WidgetSDK>("WIDGET_SDK");
export const WIDGET_SERVICE_SDK = new InjectionToken<WidgetServiceSDK>(
  "WIDGET_SERVICE_SDK",
);

const PEOPLE_PERMALINK = "my-angular-widget-swapi-people";

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

type LoadStatus = "idle" | "loading" | "ready" | "error";

@Component({
  selector: "my-angular-widget-root",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: "../widget.css",
  encapsulation: ViewEncapsulation.ShadowDom,
  template: `
    <section
      aria-labelledby="swapi-heading"
      class="rounded-2xl bg-gradient-to-br from-slate-50 via-zinc-50 to-amber-50 p-5 shadow-md ring-1 ring-stone-200"
    >
      <header class="mb-4 flex items-center justify-between gap-3">
        <h2 id="swapi-heading" class="text-lg font-bold tracking-tight text-stone-900">
          {{ heading() }}
        </h2>
        <span class="text-xs font-semibold uppercase tracking-wider text-amber-700">SWAPI</span>
      </header>

      <div class="mb-4 flex gap-2">
        <label for="swapi-input" class="sr-only">Search character name</label>
        <input
          id="swapi-input"
          type="text"
          [value]="query()"
          (input)="onInput($event)"
          placeholder="Type a name (e.g. luke, vader, leia)"
          class="min-h-[44px] flex-1 rounded-lg border border-stone-500 bg-white px-3 py-2.5 text-sm text-stone-900 placeholder:text-stone-600 focus:border-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
        />
      </div>

      <div role="status" aria-live="polite" class="min-h-[180px]">
        @switch (status()) {
          @case ("loading") {
            <p class="text-sm text-stone-600">Loading galaxy database…</p>
          }
          @case ("error") {
            <p class="rounded-lg bg-rose-100 p-3 text-sm font-medium text-rose-900">
              {{ errorMsg() }}
            </p>
          }
          @case ("ready") {
            @if (matches().length === 0) {
              <p class="text-sm text-stone-600">No characters match "{{ query() }}".</p>
            } @else {
              <p class="mb-2 text-xs text-stone-600">
                Showing {{ matches().length }} of {{ people().length }} characters.
              </p>
              <ul class="grid grid-cols-1 gap-2 sm:grid-cols-2">
                @for (p of matches(); track p.url) {
                  <li class="rounded-xl bg-white/80 p-3 shadow-inner ring-1 ring-stone-200">
                    <div class="flex items-baseline justify-between gap-2">
                      <h3 class="text-base font-bold text-stone-900">{{ p.name }}</h3>
                      <span class="font-mono text-xs text-stone-600">{{ p.birth_year }}</span>
                    </div>
                    <dl class="mt-2 grid grid-cols-2 gap-x-3 gap-y-0.5 text-xs text-stone-700">
                      <div class="flex justify-between">
                        <dt class="font-medium">Height</dt>
                        <dd class="font-mono">{{ p.height }} cm</dd>
                      </div>
                      <div class="flex justify-between">
                        <dt class="font-medium">Mass</dt>
                        <dd class="font-mono">{{ p.mass }} kg</dd>
                      </div>
                      <div class="flex justify-between">
                        <dt class="font-medium">Eyes</dt>
                        <dd class="capitalize">{{ p.eye_color }}</dd>
                      </div>
                      <div class="flex justify-between">
                        <dt class="font-medium">Hair</dt>
                        <dd class="capitalize">{{ p.hair_color }}</dd>
                      </div>
                    </dl>
                  </li>
                }
              </ul>
            }
          }
          @default {
            <p class="text-sm text-stone-600">Type to search the Star Wars universe.</p>
          }
        }
      </div>
    </section>
  `,
})
export class AppComponent {
  private readonly sdk = inject(WIDGET_SDK);
  private readonly widgetServiceSdk = inject(WIDGET_SERVICE_SDK);

  readonly props = signal<WidgetProps>(this.sdk.getProps());
  readonly query = signal<string>(this.sdk.getProps().defaultQuery ?? "sky");
  readonly people = signal<SwapiPerson[]>([]);
  readonly status = signal<LoadStatus>("idle");
  readonly errorMsg = signal<string>("");

  readonly heading = computed(
    () => this.props().title?.trim() || "Star Wars Browser",
  );

  readonly matches = computed(() => {
    const q = this.query().trim().toLowerCase();
    if (!q) return this.people();
    return this.people().filter((p) => p.name.toLowerCase().includes(q));
  });

  constructor() {
    inject(DestroyRef).onDestroy(
      this.sdk.on("propsChanged", (data) => this.props.set(data)),
    );
    void this.fetchPeople();
  }

  onInput(event: Event) {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      this.query.set(target.value);
    }
  }

  private async fetchPeople() {
    this.status.set("loading");
    try {
      const res = await this.widgetServiceSdk.connectors.execute<SwapiPerson[]>(
        {
          permalink: PEOPLE_PERMALINK,
          method: "GET",
        },
      );
      const payload = unwrap<SwapiPerson[]>(res);
      const list = Array.isArray(payload) ? payload : [];
      if (list.length === 0) {
        this.status.set("error");
        this.errorMsg.set("SWAPI returned no characters.");
        return;
      }
      this.people.set(list);
      this.status.set("ready");
    } catch (err) {
      this.status.set("error");
      this.errorMsg.set(err instanceof Error ? err.message : "Request failed");
    }
  }
}
