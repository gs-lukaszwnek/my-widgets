import { useEffect, useRef, useState, type FormEvent } from "react";
import type { Pokemon, WidgetProps, WidgetSDK, WidgetServiceSDK } from "./types";

const POKEAPI_PERMALINK = "my-react-widget-pokeapi";

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

const formatHeight = (decimeters: number) => `${(decimeters / 10).toFixed(1)} m`;
const formatWeight = (hectograms: number) => `${(hectograms / 10).toFixed(1)} kg`;

const TYPE_COLORS: Record<string, string> = {
  normal: "bg-stone-300 text-stone-900",
  fire: "bg-orange-400 text-orange-950",
  water: "bg-sky-400 text-sky-950",
  electric: "bg-yellow-300 text-yellow-950",
  grass: "bg-lime-400 text-lime-950",
  ice: "bg-cyan-200 text-cyan-950",
  fighting: "bg-red-700 text-white",
  poison: "bg-fuchsia-700 text-white",
  ground: "bg-amber-500 text-amber-950",
  flying: "bg-indigo-300 text-indigo-950",
  psychic: "bg-pink-400 text-pink-950",
  bug: "bg-lime-500 text-lime-950",
  rock: "bg-stone-700 text-white",
  ghost: "bg-violet-700 text-white",
  dragon: "bg-indigo-700 text-white",
  dark: "bg-zinc-800 text-white",
  steel: "bg-slate-400 text-slate-950",
  fairy: "bg-pink-300 text-pink-950",
};

type ResultState =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "ready"; pokemon: Pokemon }
  | { kind: "error"; message: string };

export function App({
  sdk,
  widgetServiceSdk,
}: {
  sdk: WidgetSDK;
  widgetServiceSdk: WidgetServiceSDK;
}) {
  const [props, setProps] = useState<WidgetProps>(sdk.getProps());
  const [query, setQuery] = useState<string>(props.defaultPokemon ?? "pikachu");
  const [result, setResult] = useState<ResultState>({ kind: "idle" });
  const inFlight = useRef<number>(0);

  useEffect(() => sdk.on("propsChanged", setProps), [sdk]);

  useEffect(() => {
    void search(props.defaultPokemon ?? "pikachu");
  }, []);

  const search = async (rawName: string) => {
    const name = rawName.trim().toLowerCase();
    if (!name) {
      setResult({ kind: "error", message: "Type a Pokémon name to search." });
      return;
    }
    const ticket = ++inFlight.current;
    setResult({ kind: "loading" });
    try {
      const res = await widgetServiceSdk.connectors.execute<Pokemon>({
        permalink: POKEAPI_PERMALINK,
        method: "GET",
        queryParams: { name },
      });
      if (ticket !== inFlight.current) return;
      const pokemon = unwrap<Pokemon>(res);
      if (!pokemon || typeof pokemon.id !== "number") {
        setResult({ kind: "error", message: `No Pokémon found for "${name}".` });
        return;
      }
      setResult({ kind: "ready", pokemon });
    } catch (err) {
      if (ticket !== inFlight.current) return;
      const message = err instanceof Error ? err.message : "Request failed";
      setResult({ kind: "error", message });
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void search(query);
  };

  const title = props.title?.trim() || "Pokédex";

  return (
    <section
      aria-labelledby="pokedex-heading"
      className="rounded-2xl bg-gradient-to-br from-rose-50 via-amber-50 to-sky-50 p-5 shadow-md ring-1 ring-stone-200"
    >
      <header className="mb-4 flex items-center justify-between gap-3">
        <h2
          id="pokedex-heading"
          className="text-lg font-bold tracking-tight text-stone-900"
        >
          {title}
        </h2>
        <span className="text-xs font-semibold uppercase tracking-wider text-rose-600">
          PokéAPI
        </span>
      </header>

      <form onSubmit={onSubmit} className="mb-4 flex gap-2">
        <label htmlFor="pokemon-input" className="sr-only">
          Pokémon name or ID
        </label>
        <input
          id="pokemon-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. pikachu, 25, charizard"
          className="min-h-[44px] flex-1 rounded-lg border border-stone-500 bg-white px-3 py-2.5 text-sm text-stone-900 placeholder:text-stone-600 focus:border-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-700"
        />
        <button
          type="submit"
          disabled={result.kind === "loading"}
          className="min-h-[44px] rounded-lg bg-rose-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-800 disabled:cursor-not-allowed disabled:bg-rose-300 disabled:text-rose-900"
        >
          {result.kind === "loading" ? "Searching…" : "Search"}
        </button>
      </form>

      <p role="status" aria-live="polite" className="sr-only">
        {result.kind === "loading" ? "Loading Pokémon…" : ""}
      </p>
      <p role="alert" aria-live="assertive" className="sr-only">
        {result.kind === "error" ? result.message : ""}
      </p>
      <div className="min-h-[160px]">
        {result.kind === "idle" && (
          <p className="text-sm text-stone-700">Type a name and press Search.</p>
        )}
        {result.kind === "loading" && (
          <p className="text-sm text-stone-700">Loading Pokémon…</p>
        )}
        {result.kind === "error" && (
          <p className="rounded-lg bg-rose-100 p-3 text-sm font-medium text-rose-900">
            {result.message}
          </p>
        )}
        {result.kind === "ready" && <PokemonCard pokemon={result.pokemon} />}
      </div>
    </section>
  );
}

function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const sprite =
    pokemon.sprites.other?.["official-artwork"]?.front_default ??
    pokemon.sprites.front_default ??
    "";

  return (
    <article className="flex flex-col gap-4 rounded-xl bg-white/80 p-4 shadow-inner ring-1 ring-stone-200 sm:flex-row">
      {sprite && (
        <img
          src={sprite}
          alt={`Official artwork of ${pokemon.name}`}
          className="h-32 w-32 self-center object-contain drop-shadow"
          loading="lazy"
        />
      )}
      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-xl font-bold capitalize text-stone-900">
            {pokemon.name}
          </h3>
          <span className="font-mono text-sm text-stone-500">
            #{String(pokemon.id).padStart(3, "0")}
          </span>
        </div>

        <ul className="mt-2 flex flex-wrap gap-1.5">
          {pokemon.types.map((t) => (
            <li
              key={t.type.name}
              className={`rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${
                TYPE_COLORS[t.type.name] ?? "bg-stone-300 text-stone-900"
              }`}
            >
              {t.type.name}
            </li>
          ))}
        </ul>

        <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-stone-700">
          <div className="flex justify-between">
            <dt className="font-medium">Height</dt>
            <dd className="font-mono">{formatHeight(pokemon.height)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-medium">Weight</dt>
            <dd className="font-mono">{formatWeight(pokemon.weight)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-medium">Base XP</dt>
            <dd className="font-mono">{pokemon.base_experience}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-medium">Stats</dt>
            <dd className="font-mono">{pokemon.stats.length}</dd>
          </div>
        </dl>

        <ul className="mt-3 space-y-1">
          {pokemon.stats.map((s) => (
            <li key={s.stat.name} className="text-xs">
              <div className="flex items-baseline justify-between">
                <span className="font-medium capitalize text-stone-700">
                  {s.stat.name.replace("-", " ")}
                </span>
                <span className="font-mono text-stone-600">{s.base_stat}</span>
              </div>
              <div
                className="mt-0.5 h-1.5 w-full overflow-hidden rounded-full bg-stone-200"
                aria-hidden="true"
              >
                <div
                  className="h-full bg-rose-500"
                  style={{ width: `${Math.min(100, (s.base_stat / 200) * 100)}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
