# PokéAPI — Contract for `my-react-widget` widget

**Docs source(s):**
- https://pokeapi.co/docs/v2 — retrieved 2026-04-29T12:31:00Z
- https://pokeapi.co/docs/v2#pokemon — retrieved 2026-04-29T12:31:00Z
- https://pokeapi.co/docs/v2 (re-fetched for example JSON cross-check) — retrieved 2026-04-29T12:31:00Z

**Auth scheme:** `none` — verbatim from docs: "No authentication is required to access this API, and all resources are fully open and available."

**Base URL:** `https://pokeapi.co/api/v2/` (verbatim from docs)

**Rate limits:** Verbatim: "Rate limiting has been removed entirely" (as of November 2018). The docs additionally state: "we still encourage you to limit the frequency of requests."

---

## Operation: Get a Pokémon by name or ID

**Endpoint:** `GET /api/v2/pokemon/:id_or_name/`

(Verbatim docs path: `GET https://pokeapi.co/api/v2/pokemon/{id or name}/`)

**Path parameters:**

| name | format | docs quote |
|---|---|---|
| `:id_or_name` | numeric ID OR name string (both accepted) | "GET https://pokeapi.co/api/v2/pokemon/{id or name}/" |

**Query parameters (documented):** none documented for the single-resource endpoint.

**Required body fields:** not applicable — `GET` request, no body.

**Optional body fields:** not applicable — `GET` request, no body.

**Response shape (success):**

The response is a **flat object** (no wrapper key). Verbatim excerpt of the example response (Clefairy, id 35) as shown in the docs:

```json
{
  "id": 35,
  "name": "clefairy",
  "base_experience": 113,
  "height": 6,
  "is_default": true,
  "order": 56,
  "weight": 75,
  "abilities": [
    ...
  ]
}
```

**Top-level fields documented in the Pokemon response (verbatim names + types from docs field table):**

| field | type (docs) | docs quote / note |
|---|---|---|
| `id` | integer | "The identifier for this resource." (_integer_) |
| `name` | string | "The name for this resource." (_string_) |
| `base_experience` | integer | listed in docs field table as `base_experience` (_integer_) |
| `height` | integer | listed in docs field table as `height` (_integer_) |
| `is_default` | boolean | listed in docs field table as `is_default` (_boolean_) |
| `order` | integer | listed in docs field table as `order` (_integer_) |
| `weight` | integer | listed in docs field table as `weight` (_integer_) |
| `abilities` | list of ability objects | "A list of Pokémon abilities" |
| `forms` | list of form references | "A list of forms this Pokémon can take" |
| `game_indices` | list of game index objects | listed in docs field table |
| `held_items` | list of held item objects | listed in docs field table |
| `location_area_encounters` | string | listed in docs field table (_string_) |
| `moves` | list of move objects | listed in docs field table |
| `species` | NamedAPIResource (pokemon-species reference) | listed in docs field table |
| `sprites` | sprite object | "A set of sprites used to depict this Pokémon" |
| `stats` | list of stat objects | "A list of base stat values for this Pokémon" |
| `types` | list of type objects | "A list of types this Pokémon has" |

**Sub-structure: `abilities[]` element (verbatim from docs):**

| sub-field | type | docs quote |
|---|---|---|
| `is_hidden` | boolean | "is_hidden" (_boolean_) |
| `slot` | integer | "slot" (_integer_) |
| `ability` | NamedAPIResource | "ability" (NamedAPIResource reference) |

**Sub-structure: `sprites` object — documented sprite URL fields (verbatim names from docs):**

- `back_default`
- `back_female`
- `back_shiny`
- `back_shiny_female`
- `front_default`
- `front_female`
- `front_shiny`
- `front_shiny_female`
- `other` (nested object containing `dream_world`, `home`, `official-artwork`, `showdown`)
- `versions` (nested object with generation-specific groupings)

**Sub-structure: `NamedAPIResource` (used by `species`, `forms[]`, `abilities[].ability`, etc.):**

```json
{
  "name": "string",
  "url": "string"
}
```

Verbatim docs example: `"ability": { "name": "friend-guard", "url": "https://pokeapi.co/api/v2/ability/132/" }`

**Common error responses:** not documented. The PokéAPI docs page does not enumerate HTTP status codes for success or failure cases.

**Things NOT documented (gaps in the docs you must flag):**

- **Case-sensitivity of the `name` path parameter** — the docs do not state whether names must be lowercase. All example URLs in the docs use lowercase with hyphens (e.g. `clefairy`, `friend-guard`), but no explicit rule is given. The widget should normalize user input to lowercase before constructing the URL to be safe.
- **HTTP status codes** — neither 200, 404, nor any other status code is explicitly documented for this endpoint. Behavior on unknown name/ID (likely 404) is inferred, not documented.
- **Trailing slash requirement** — the docs URL is shown with a trailing slash (`/pokemon/{id or name}/`). Whether requests without the trailing slash are accepted/redirected is not documented.
- **Sub-structure of `stats[]` element** — the docs reference the field but the detailed sub-structure (`base_stat`, `effort`, `stat`) was truncated in fetched content. Widget code that reads `stats[i].base_stat` is acting on PokéAPI community convention, not on a verbatim quote captured here.
- **Sub-structure of `types[]` element** — same as above. Sub-fields (`slot`, `type`) are PokéAPI community convention, not captured verbatim from the fetched docs.
- **Pagination of nested arrays** (e.g. `moves`, `versions`) — not documented.
- **Caching / ETag / Last-Modified headers** — not documented.

---

## Ambiguities (must resolve before writing connector code)

1. **Case-sensitivity of the `name` path parameter is not documented.** All docs examples use lowercase, but no rule is stated. Recommendation for the calling agent: normalize user input to lowercase (`.toLowerCase()`) before substituting into the URL. Surface this to the user only if they want to support mixed-case input verbatim.
2. **`stats[]` and `types[]` element sub-structures were not captured verbatim** — the fetched docs page truncated before reaching those sections. The widget will likely need `stats[i].base_stat`, `stats[i].stat.name`, `types[i].type.name` (PokéAPI community knowledge), but these are NOT verbatim-quoted in this contract. Recommendation: if the widget displays stats/types, the calling agent should either (a) accept the convention with a note in the code, or (b) re-fetch a more specific docs URL to capture the sub-structure verbatim before wiring those fields.
3. **No documented error response shape.** If the widget needs to display "Pokémon not found" gracefully, the calling agent must rely on the HTTP status code (presumed 404) without a verbatim doc quote. The widget should not assume any error JSON body shape.

## Confidence per operation

| operation | confidence | reason |
|---|---|---|
| Get a Pokémon by name or ID | high | Endpoint, path-param format ("id or name"), auth scheme, base URL, response wrapper (flat — no wrapper key), top-level field list, and verbatim example response excerpt all captured from the docs. Sub-structure of `stats[]` and `types[]` is the only structural gap; flagged in Ambiguities. |
