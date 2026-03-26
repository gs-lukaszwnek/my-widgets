# SWAPI (Star Wars API, swapi.info mirror) — Contract for `my-angular-widget` widget

**Docs source(s):**
- https://swapi.info — retrieved 2026-04-29T12:31:10Z
- https://swapi.info/documentation — retrieved 2026-04-29T12:31:10Z
- https://swapi.info/api/people — retrieved 2026-04-29T12:31:10Z (live response inspection)
- https://swapi.info/api/people/?search=luke — retrieved 2026-04-29T12:31:10Z (live response inspection — see Ambiguities)
- https://swapi.info/api/people/1 — retrieved 2026-04-29T12:31:10Z (live response inspection, single-resource shape for reference)
- https://swapi.dev/api/people/?search=luke — attempted 2026-04-29T12:31:10Z, **failed: TLS certificate has expired** (confirms user warning that swapi.dev is intermittent / unmaintained)

**Auth scheme:** "Swapi is a completely open API. No authentication is required to query and retrieve data. Due to its open nature, interactions are limited to GET requests." (verbatim, https://swapi.info/documentation)

**Base URL:** `https://swapi.info/api` — verbatim docs quote: "The Base URL for swapi is: `https://swapi.info/api`"

**Rate limits:** Not formally documented in `/documentation`. The marketing landing page asserts the feature "No Rate Limits!" verbatim, but no policy detail is given. Treat as `not documented` for engineering purposes.

---

## Operation: Search people by name

**Endpoint:** `GET https://swapi.info/api/people`

The widget will call `GET /api/people` and (per swapi.dev convention) may append `?search={query}`. **However, on the swapi.info mirror, `?search=` is NOT documented and does not filter the response — see Ambiguities #1.** Any name-based filtering must be done client-side by the widget after receiving the full list.

**Path parameters:**

| name | format | docs quote |
|---|---|---|
| (none) | n/a | "`/people` -- get all the people resources" (verbatim) |

**Query parameters (documented):**

| name | type | required | docs quote |
|---|---|---|---|
| (none documented) | — | — | The documentation page contains no mention of `search`, `filter`, `query`, `page`, or any query parameters for the `/people` endpoint. Verbatim search across the docs page returned "not present" for each of: "search", "?search=", "filter", "query", "pagination", "page", "count", "next", "previous", "results", "paginated". |

**Query parameters (undocumented but inherited from swapi.dev convention):**

| name | type | required | observed behavior on swapi.info |
|---|---|---|---|
| `search` | string | optional | swapi.dev historically filtered `/api/people/?search=luke` to matching characters with a paginated wrapper. **On swapi.info, the same URL returns the full unfiltered array of all 82 people** — the parameter is silently ignored. The widget cannot rely on server-side search on this mirror. |

**Required body fields:**

| name | type | docs quote |
|---|---|---|
| (none — GET request, no body) | — | "interactions are limited to GET requests" (verbatim) |

**Optional body fields:**

| name | type | docs quote |
|---|---|---|
| (none) | — | — |

**Response shape (success):**

The swapi.info mirror returns a **flat JSON array** of person objects — there is **no** `{count, next, previous, results: [...]}` wrapper. This is the most important divergence from swapi.dev. Verbatim from a live fetch of `https://swapi.info/api/people`:

```json
[
  {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.info/api/planets/1",
    "films": [
      "https://swapi.info/api/films/1",
      "https://swapi.info/api/films/2",
      "https://swapi.info/api/films/3",
      "https://swapi.info/api/films/6"
    ],
    "species": [],
    "vehicles": [
      "https://swapi.info/api/vehicles/14",
      "https://swapi.info/api/vehicles/30"
    ],
    "starships": [
      "https://swapi.info/api/starships/12",
      "https://swapi.info/api/starships/22"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.info/api/people/1"
  },
  {
    "name": "C-3PO",
    "height": "167",
    ...
  }
]
```

The array contains 82 objects (one per Star Wars person resource). Live observation against `https://swapi.info/api/people` and `https://swapi.info/api/people/?search=luke` both returned the same 82-element flat array — the `search` query was ignored.

**Response unwrap path for the calling agent:** The connector response payload IS the array directly. The widget must NOT do `payload.results` or `payload.data.results` — those keys do not exist on this mirror. Use `payload` (or `Array.isArray(payload) ? payload : []`) and filter client-side by `name`.

**Per-person field types (verbatim observed types from live response):** `name`, `height`, `mass`, `hair_color`, `skin_color`, `eye_color`, `birth_year`, `gender` are all **strings** (note: `height` and `mass` are quoted strings like `"172"` and `"77"`, NOT numbers — the widget must parse them if it wants to do numeric display/sort). `homeworld` and `url` are absolute URL strings. `films`, `species`, `vehicles`, `starships` are arrays of absolute URL strings. `created` and `edited` are ISO 8601 timestamp strings.

**Single-person reference shape** (for completeness — `GET /api/people/:id` returns a single bare object, not wrapped):

```json
{
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male",
  "homeworld": "https://swapi.info/api/planets/1",
  "films": ["https://swapi.info/api/films/1", "https://swapi.info/api/films/2", "https://swapi.info/api/films/3", "https://swapi.info/api/films/6"],
  "species": [],
  "vehicles": ["https://swapi.info/api/vehicles/14", "https://swapi.info/api/vehicles/30"],
  "starships": ["https://swapi.info/api/starships/12", "https://swapi.info/api/starships/22"],
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "url": "https://swapi.info/api/people/1"
}
```

**Common error responses:**

| status | meaning | docs quote |
|---|---|---|
| 404 | wrong base URL or unknown resource ID | "If you receive a 404 NOT FOUND response, then check the base URL" (paraphrased — only this one error mention found in `/documentation`; no formal error table is documented) |

**Things NOT documented (gaps in the docs you must flag):**

- No documented query parameters at all — `search`, `page`, `limit` are all absent from `/documentation`.
- No documented response schema — the contract above relies on a live fetch of the mirror, not a docs example.
- No documented error responses beyond a single passing mention of 404.
- No documented rate limits — landing page claim "No Rate Limits!" is marketing copy, not a policy.
- No documented behavior for the `/people` endpoint when an unknown query string is provided (the live observation that `?search=` is ignored is inferred, not documented).
- No documented divergence statement comparing swapi.info to swapi.dev — the user must rely on observed behavior.

---

## Ambiguities (must resolve before writing connector code)

1. **`?search=` is unsupported on swapi.info — the widget must filter client-side.** swapi.dev historically supported `GET /api/people/?search=luke` returning a paginated `{count, next, previous, results: [...]}` object filtered to matching names. swapi.info's `/documentation` does not document `?search=`, and a live fetch of `https://swapi.info/api/people/?search=luke` returns the full unfiltered 82-element flat array, identical to `https://swapi.info/api/people`. The widget calling agent must:
   - Either fetch `GET /api/people` once and filter client-side by `name.toLowerCase().includes(query.toLowerCase())`,
   - Or accept that the user must scroll through all 82 people.
   The query-param-based search the operation description suggests will not work on this mirror.

2. **Response wrapper divergence: swapi.info returns a flat array; swapi.dev returns `{count, next, previous, results: [...]}`.** This is the single biggest gotcha. Any code, tutorial, or AI-generated snippet referencing SWAPI will assume the paginated wrapper. On swapi.info, that code will fail with `payload.results is undefined`. The connector consumer must unwrap as `payload` (the array itself), not `payload.results`.

3. **No pagination on swapi.info.** swapi.dev paginates 10 per page with `next`/`previous` URLs. swapi.info returns all 82 in a single response. The widget does not need pagination logic on this mirror — but if the widget is ever pointed back at swapi.dev (or a future swapi.info change introduces pagination), the response unwrap will break.

4. **Numeric fields are strings.** `height: "172"`, `mass: "77"`, `birth_year: "19BBY"` are all strings in the response. The user requested "name, height, mass, birth_year" be displayed — that works as-is for display, but the widget must `parseFloat` if any numeric comparison or formatting is needed. `birth_year` is a Star Wars-format string like `"19BBY"` (Before Battle of Yavin) and is never a plain number.

5. **swapi.dev fallback is unavailable.** Attempting `https://swapi.dev/api/people/?search=luke` failed with `certificate has expired` at the time of research. The widget cannot rely on swapi.dev as a fallback or comparison source.

## Confidence per operation

| operation | confidence | reason |
|---|---|---|
| Search people by name | medium | Endpoint, base URL, auth, and response shape are all confirmed (docs + live fetch). However, the operation as the user described it ("`?search=` returns paginated list") does not match the mirror's actual behavior — `?search=` is silently ignored and the response is a flat array, not paginated. The contract documents what the mirror actually does; the widget must adapt by filtering client-side. The user (or the calling agent) should confirm that client-side filtering of an 82-element list is acceptable before scaffolding. |
