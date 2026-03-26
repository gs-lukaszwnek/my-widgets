# REST Countries v3.1 — Contract for `my-vue-widget` widget

**Docs source(s):**
- https://gitlab.com/restcountries/restcountries/-/raw/master/README.md — retrieved 2026-04-29T12:35:54Z (authoritative; this is the project's own README and the only structured docs the project publishes)
- https://restcountries.com/ — attempted 2026-04-29T12:35:54Z (homepage; fetch timed out repeatedly — page is JS-rendered and returned no quotable content)
- https://learn.microsoft.com/en-us/connectors/restcountriesip/ — retrieved 2026-04-29T12:35:54Z (third-party Power Platform connector, NOT authoritative; used only as supporting evidence for response-shape ambiguity)

**Auth scheme:** not documented — the README does not mention any authentication, API keys, tokens, or headers. REST Countries is widely understood to be a free, no-auth, public API; the widget should issue plain `GET` requests with no `Authorization` header.

**Base URL:** `https://restcountries.com/v3.1/` (verbatim from README, which says: `"https://restcountries.com/v3.1/" (or "/v4/" for preview)`)

**Rate limits:** not documented in the authoritative README. (The Microsoft Power Platform connector page lists `API calls per connection | 100 | 60 seconds`, but that is a Microsoft-side throttling limit on their connector and is not a REST Countries policy quote.)

---

## Operation: Get a country by alpha code

**Endpoint:** `GET https://restcountries.com/v3.1/alpha/:code`

**Path parameters:**

| name | format | docs quote |
|---|---|---|
| `:code` | cca2 (2-letter) OR cca3 (3-letter) OR ccn3 (3-digit numeric) OR cioc — any of the four | `"Search by cca2, ccn3, cca3 or cioc country code (yes, any!)"` (README, "## Code" section) |

**Query parameters (documented):**

None for `/alpha/{code}`. (The sibling endpoint `/alpha?codes={code},{code},...` exists for multi-code lookup; out of scope for this widget.)

**Required body fields:**

None — `GET` request, no body.

**Optional body fields:**

None — `GET` request, no body.

**Response shape (success):**

Not documented in the authoritative README. The README's "## Code" section provides only the URL pattern (`https://restcountries.com/v3.1/alpha/{code}`) and the "Search by cca2, ccn3, cca3 or cioc country code (yes, any!)" sentence — no example response body, no field list, no JSON snippet.

The shape commonly observed at runtime (and reflected in the third-party Microsoft Learn connector listing for the project's `/all` endpoint, which returns `array of object`) is:

```json
[
  {
    "name": {
      "common": "...",
      "official": "...",
      "nativeName": { "...": { "official": "...", "common": "..." } }
    },
    "tld": ["..."],
    "cca2": "...",
    "ccn3": "...",
    "cca3": "...",
    "cioc": "...",
    "independent": true,
    "status": "...",
    "unMember": true,
    "currencies": { "...": { "name": "...", "symbol": "..." } },
    "capital": ["..."],
    "region": "...",
    "subregion": "...",
    "languages": { "...": "..." },
    "translations": { "...": { "official": "...", "common": "..." } },
    "latlng": [0, 0],
    "landlocked": false,
    "borders": ["..."],
    "area": 0,
    "population": 0,
    "flag": "...",
    "flags": { "png": "...", "svg": "..." },
    "coatOfArms": { "png": "...", "svg": "..." },
    "maps": { "googleMaps": "...", "openStreetMaps": "..." },
    "timezones": ["..."],
    "continents": ["..."]
  }
]
```

**Critical**: the top-level shape for `/v3.1/alpha/{code}` is NOT explicitly quoted anywhere in the authoritative README. Treat this as inferred-from-related-docs, not authoritative. See the Ambiguities section. The widget MUST be coded defensively to handle either:

- a top-level array (the historically observed v3.1 behavior, where the calling code unwraps `payload[0]`), OR
- a top-level single object (which would make `payload` itself the country record).

The unwrap layer in the widget should normalize both: e.g. `Array.isArray(payload) ? payload[0] : payload`.

**Common error responses:**

| status | meaning | docs quote |
|---|---|---|
| (none documented) | — | not documented in README |

The README only mentions `"bad request"` in the context of the `/all` endpoint when fields are missing — that quote is from the README's discussion of the `/all` filtering behavior, not the `/alpha/{code}` endpoint. It is not safe to apply that text to `/alpha/{code}`.

**Things NOT documented (gaps in the docs you must flag):**

- Whether the response for `/v3.1/alpha/{code}` is wrapped in a top-level array `[ {...} ]` or returned as a single object `{...}`. The README does not show an example response body for this endpoint.
- Whether the `:code` path parameter is case-sensitive. The README says "Search by cca2, ccn3, cca3 or cioc country code (yes, any!)" but does not mention case. The user's example codes (`"us"`, `"pl"`, `"jpn"`) are lowercase — the widget should normalize input but the docs do not commit to a behavior.
- HTTP status code returned for an unknown code (404? 400? 200 with empty array?). Not documented.
- HTTP status code returned for a malformed code (e.g. 1 letter, 5 letters, non-alphanumeric). Not documented.
- Response body shape on error — is it `{ status, message }`, plain text, or HTML? Not documented.
- Whether `ccn3` (3-digit numeric, e.g. `"170"` for Colombia) is accepted on this exact path or only on the `/alpha?codes=` plural variant. The README's "Search by cca2, ccn3, cca3 or cioc" sentence implies all four formats are accepted on the singular path, but the only example shown for ccn3 (`170`) appears in the `/alpha?codes=170,no,est,pe` plural example.
- CORS headers / browser-direct-fetch behavior. Not documented.
- HTTPS vs HTTP. The README only shows `https://`.
- Stability / deprecation policy for v3.1 (`v4` is mentioned as preview). Not documented.

---

## Ambiguities (must resolve before writing connector code)

1. **Response shape: array vs single object.** The user explicitly flagged that REST Countries' `/v3.1/alpha/{code}` is widely reported to return an array even when querying by a single unique code. The authoritative README provides no example response for this endpoint and does not say "array" or "object" anywhere near the "## Code" section. Supporting evidence (the Microsoft Learn third-party Power Platform connector listing for the project) describes the `/all` action's return type as `array of object`, which suggests the project consistently returns arrays at the top level — but this is NOT a primary-source quote and the connector page documents `/all`, not `/alpha/{code}`. **Recommendation:** the calling agent should code the unwrap defensively (`Array.isArray(payload) ? payload[0] : payload`) and surface this to the user at the spec confirmation gate so the user can decide whether to confirm the array shape via runtime inspection or accept the defensive code.

2. **Case sensitivity of `:code`.** The README does not state whether `us`, `US`, `Us` all work. The user's example inputs (`"us"`, `"pl"`, `"jpn"`) are lowercase. **Recommendation:** the widget should `.toLowerCase()` (or `.toUpperCase()`) user input before issuing the request to make behavior deterministic regardless of server-side casing. Surface to user.

3. **Whether `ccn3` (3-digit numeric) is accepted on the singular `/alpha/{code}` path or only on the plural `/alpha?codes=...` path.** The README's "Search by cca2, ccn3, cca3 or cioc country code (yes, any!)" sentence sits in the "## Code" section (the singular endpoint) and reads as if all four formats apply, but the only ccn3 example in the README (`170`) appears in the plural `/alpha?codes=` example. **Recommendation:** the widget's input UI should advertise "alpha-2 or alpha-3" only (matching the user's stated requirement of `"us", "pl", "jpn"`). Numeric codes can be treated as out of scope.

4. **Error response body shape unknown.** With no documented error response, the widget cannot pre-build a structured error display. **Recommendation:** the widget should treat any non-2xx HTTP status as a generic "country not found / API error" and not attempt to parse the error body for structured fields.

5. **Auth: README is silent.** REST Countries is widely known to be free and no-auth, but the README does not affirmatively quote "no authentication required". The calling agent should code the connector with no auth header and not attempt to wire an API key.

## Confidence per operation

| operation | confidence | reason |
|---|---|---|
| Get a country by alpha code | medium | Endpoint URL, HTTP method, and accepted code formats are quoted verbatim from the authoritative README. Response shape (array vs object), case sensitivity, error shape, and rate limits are NOT in the docs and are flagged as ambiguities. The widget can be built with defensive unwrap and input normalization, but the response-shape ambiguity is structurally important and must be confirmed at the spec gate. |
