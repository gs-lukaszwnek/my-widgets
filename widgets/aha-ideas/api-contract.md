# Aha! REST API — Contract for `aha-ideas` widget

**Docs source(s):**
- https://www.aha.io/api — retrieved 2026-04-28T13:17:50Z
- https://www.aha.io/api/resources/products/list_products_in_the_account — retrieved 2026-04-28T13:17:50Z
- https://www.aha.io/api/resources/ideas/list_ideas — retrieved 2026-04-28T13:17:50Z
- https://www.aha.io/api/resources/ideas/list_ideas_for_a_product — retrieved 2026-04-28T13:17:50Z
- https://www.aha.io/api/resources/ideas/create_an_idea — retrieved 2026-04-28T13:17:50Z
- https://www.aha.io/api/resources/ideas/get_a_specific_idea — retrieved 2026-04-28T13:17:50Z
- https://www.aha.io/api/resources/idea_votes/create_an_idea_vote — retrieved 2026-04-28T13:17:50Z

**Auth scheme:** Verbatim from the Aha! API overview: "The API key is used in exactly the same way as an OAuth token in the headers (1111111111 is the API key in this example): `curl -H \"Authorization: Bearer 1111111111\" https://company.aha.io/api/v1/features/APP-1`". The widget will send `Authorization: Bearer <token>` with a personal API token (confirmed by user).

**Base URL:** Verbatim from the Aha! API overview: "The API **must** be accessed using the account specific domain `<yourcompany>.aha.io`." For this widget the user's tenant is `gainsight3.euw4.aha.io`, so the concrete base URL is `https://gainsight3.euw4.aha.io/api/v1`.

**Rate limits:** Verbatim from the Aha! API overview "Rate limiting" section: "Calls to the API are rate limited to ensure that one user cannot consume excessive resources. The limits should only affect scripts that are malfunctioning, or attempting to make too many requests in parallel. Up to 300 requests are allowed per minute, and up to 20 requests per second. If either limit is exceeded in its respective period then subsequent requests will fail with a 429 HTTP status code. The rate limit is applied per account, so multiple API users from the same account will contribute to the limit." Response headers documented globally: `X-Ratelimit-Limit`, `X-Ratelimit-Remaining`, `X-Ratelimit-Reset`.

**Pagination (global convention):** Verbatim "Pagination is 1-indexed -- in other words, the first page is page 1, not page 0." Parameters: `page` and `per_page` (default 30, max 200). Pagination response metadata fields documented globally: `total_records`, `total_pages`, `current_page`. Note: although pagination is documented globally as a convention for list endpoints, the per-endpoint pages for products/ideas list operations did not explicitly enumerate `page` / `per_page` in their own parameter tables in the extracted content — see Ambiguities.

---

## Operation: List products

**Endpoint:** `GET /api/v1/products`

**Path parameters:** none documented — this endpoint has no path parameters.

**Query parameters (documented):**

| name | type | required | docs quote |
|---|---|---|---|
| `updated_since` | string (UTC timestamp, ISO8601) | optional | "UTC timestamp (in ISO8601 format). If provided, only products updated after the timestamp will be returned." |
| `page` | integer | optional | Not documented on the per-endpoint page; documented as a global pagination convention: "Pagination is 1-indexed -- in other words, the first page is page 1, not page 0." |
| `per_page` | integer | optional | Not documented on the per-endpoint page; documented as a global pagination convention with "default 30, maximum 200". |

**Required body fields:** none — this is a `GET` with no body.

**Optional body fields:** none — this is a `GET` with no body.

**Response shape (success):** The Aha! docs page renders the response body as a JSON example, but the extracted page content from two separate fetches did not contain the example JSON inline (the summarizer reported "no JSON example present on the page" / "section empty on page"). Status documented: `Status: 200 OK`, `Content-Type: application/json; charset=utf-8`. The response wrapper key is therefore not literally extractable from this page in the current fetch. By Aha! API convention (see Ambiguities), list endpoints wrap with the pluralized resource name, i.e. `{ "products": [...], "pagination": { "total_records": ..., "total_pages": ..., "current_page": ... } }`. Treat this as inferred, not verbatim.

```json
// not documented in extracted content — see Ambiguities #1
// Inferred conventional shape (NOT a verbatim docs quote):
// {
//   "products": [ { ... product object ... } ],
//   "pagination": { "total_records": 0, "total_pages": 0, "current_page": 1 }
// }
```

**Common error responses:**

| status | meaning | docs quote |
|---|---|---|
| 429 | rate limit exceeded | "If either limit is exceeded in its respective period then subsequent requests will fail with a 429 HTTP status code." (global, not per-endpoint) |

**Things NOT documented (gaps in the docs you must flag):**

- No example response body extractable on the per-endpoint page; wrapper key inferred from convention.
- The per-endpoint page does not list `page` / `per_page` query params in its own parameter table — they are inherited from the global pagination convention, but the docs do not explicitly confirm they apply to `GET /api/v1/products`.
- No documented error responses other than the global 429 rate-limit case.
- The page distinguishes between three different "list products" endpoints (`list_products`, `list_products_(including_aha!_develop_teams_in_the_account)`, `list_products_with_idea_portals_in_the_account`). For an ideas widget, `list_products_with_idea_portals_in_the_account` may be more appropriate. The user should confirm which scope to use.

---

## Operation: List ideas (for a product)

**Endpoint:** `GET /api/v1/products/:product_id/ideas`

A non-product-scoped variant also exists: `GET /api/v1/ideas` (returns ideas across the account). Both were confirmed in separate fetches. The widget per the user's spec is product-scoped, so the `:product_id` form is primary.

**Path parameters:**

| name | format | docs quote |
|---|---|---|
| `:product_id` | numeric ID OR reference key (both accepted) | "Numeric ID or key of the product" |

**Query parameters (documented):**

| name | type | required | docs quote |
|---|---|---|---|
| `q` | string | optional | "Search term to match against the idea name" |
| `spam` | boolean | optional | "Shows ideas marked as spam when true" |
| `workflow_status` | string (ID or name) | optional | "Filters by workflow status ID or name" |
| `sort` | enum | optional | "Accepts `recent`, `trending`, or `popular`" |
| `assigned_to_user` | string (user ID or email) | optional | "ID or email of a user" |
| `created_before` | string (UTC ISO8601 timestamp) | optional | "UTC timestamp (ISO8601 format)" |
| `created_since` | string (UTC ISO8601 timestamp) | optional | "UTC timestamp (ISO8601 format)" |
| `updated_since` | string (UTC ISO8601 timestamp) | optional | "UTC timestamp (ISO8601 format)" |
| `tag` | string | optional | "String tag value" |
| `user_id` | string | optional | "ID of a user" |
| `idea_user_id` | string | optional | "ID of an idea user" |
| `page` | integer | optional | Not documented on the per-endpoint page; documented as a global pagination convention: "Pagination is 1-indexed -- in other words, the first page is page 1, not page 0." |
| `per_page` | integer | optional | Not documented on the per-endpoint page; documented as a global pagination convention with "default 30, maximum 200". |

**Required body fields:** none — this is a `GET` with no body.

**Optional body fields:** none — this is a `GET` with no body.

**Response shape (success):** The Aha! docs page renders the response body as a JSON example, but the extracted page content from two separate fetches did not contain the example JSON inline (the summarizer reported "section empty on page" / "no JSON example provided"). Status documented: `Status: 200 OK`, `Content-Type: application/json; charset=utf-8`. By Aha! API convention (see Ambiguities), the wrapper for list endpoints is the pluralized resource name plus a pagination object.

```json
// not documented in extracted content — see Ambiguities #1
// Inferred conventional shape (NOT a verbatim docs quote):
// {
//   "ideas": [ { "id": "...", "reference_num": "...", "name": "...", ... } ],
//   "pagination": { "total_records": 0, "total_pages": 0, "current_page": 1 }
// }
```

**Common error responses:**

| status | meaning | docs quote |
|---|---|---|
| 429 | rate limit exceeded | "If either limit is exceeded in its respective period then subsequent requests will fail with a 429 HTTP status code." (global) |

**Things NOT documented (gaps in the docs you must flag):**

- No example response body extractable on the per-endpoint page; wrapper key inferred.
- Per-endpoint page does not list `page` / `per_page` query params in its own table — relied on the global convention.
- No documented error response set for the `:product_id` not-found case (e.g. is it 404? 400?).
- No documentation of how the global `GET /api/v1/ideas` differs from `GET /api/v1/products/:product_id/ideas` in terms of accessible idea pool, visibility filtering, or default sort.

---

## Operation: Create idea

**Endpoint:** `POST /api/v1/products/:product_id/ideas`

**Path parameters:**

| name | format | docs quote |
|---|---|---|
| `:product_id` | numeric ID OR reference key (both accepted) | "Numeric ID or key of the product" (the parameter table for this endpoint also lists `product_id *` with description "Numeric ID or key of the product") |

**Query parameters (documented):** none extracted as query params. Note: the parameter `skip_portal: true` is referenced in the docs but its location (query vs body) was not extractable — see Ambiguities.

**Required body fields:**

| name | type | docs quote |
|---|---|---|
| `name` | string | "name *" — "Name of the idea" |
| `created_by` | string (email) | "created_by *" — "Email of user who created the idea" |

(The `product_id *` row in the field table is the path parameter, not a body field.)

**Optional body fields:**

| name | type | docs quote |
|---|---|---|
| `submitted_idea_portal_id` | numeric ID | "Numeric ID of the ideas portal" |
| `description` | string (HTML allowed) | "Description of the idea — may include HTML formatting" |
| `workflow_status` | string | "Status of the idea — must be valid for selected product" |
| `tags` | string (comma-separated) | "Tags to add; multiple separated by commas" |
| `categories` | string (comma-separated) | "Names of existing categories; multiple separated by commas" |
| `assigned_to_user` | string (email) | "Email of user assigned the idea" |
| `feature` | string (name or ID) | "Name or ID of feature idea was promoted to" |
| `initiative` | string (name or ID) | "Name or ID of initiative idea was promoted to" |
| `epic` | string (name or ID) | "Name or ID of epic idea was promoted to" |
| `duplicate_idea` | string (ID or key) | "Idea ID/key for duplicate; merges ideas" |
| `initial_votes` | integer | "Number of votes to seed with" |
| `visibility` | string (enum: aha, creator, employee, etc.) | "Initial visibility (aha, creator, employee, etc.)" |
| `created_at` | string (date) | "Date of creation in UTC (YYYY-MM-DD format)" |
| `spam` | boolean (string "true"/"false") | "Whether idea is spam ('true' or 'false')" |

**Request body shape (verbatim example):**

```json
{"idea":{"name":"New idea","description":"<p>This is the description</p>","initial_votes":3}}
```

The body is **wrapped** in an `idea` key.

**Response shape (success):** The Aha! docs page renders the response as JSON, but the extracted page content from two separate fetches did not contain the example response JSON inline (the summarizer reported "no example response JSON visible on the page"). Status documented: `Status: 200 OK`, `Content-Type: application/json; charset=utf-8`. By Aha! API convention (single-resource creates wrap in the singular resource name), the wrapper key is expected to be `idea`.

```json
// not documented in extracted content — see Ambiguities #1
// Inferred conventional shape (NOT a verbatim docs quote):
// {
//   "idea": {
//     "id": "...",
//     "reference_num": "...",
//     "name": "...",
//     "description": { "body": "..." },
//     "created_at": "...",
//     "updated_at": "...",
//     ...
//   }
// }
```

**Common error responses:**

| status | meaning | docs quote |
|---|---|---|
| 429 | rate limit exceeded | "If either limit is exceeded in its respective period then subsequent requests will fail with a 429 HTTP status code." (global) |

**Things NOT documented (gaps in the docs you must flag):**

- No example response body extractable on the per-endpoint page; wrapper key inferred from convention.
- Whether `created_by` must match an existing Aha! user/idea-portal user, or whether it can be any arbitrary email (and Aha! creates a portal user on the fly).
- The exact relationship between `submitted_idea_portal_id` and the `skip_portal: true` parameter referenced in the page is unclear — surface to user.
- No explicit documentation of validation errors (e.g. 422 for missing `name`, 404 for nonexistent `product_id`).
- The `visibility` enum is partially documented as "(aha, creator, employee, etc.)" — the "etc." leaves the full enum undocumented.

---

## Operation: Vote on (endorse) an idea

**Endpoint:** `POST /api/v1/ideas/:idea_id/endorsements`

(In the Aha! web UI these are called "idea votes"; the API endpoint name is `endorsements`. Note from the docs: "idea votes in the web interface are referenced as idea endorsements from API endpoints.")

**Path parameters:**

| name | format | docs quote |
|---|---|---|
| `:idea_id` | numeric ID OR reference key (both accepted) | "Numeric ID or key of the idea" (parameter table also marks `idea_id *`) |

**Query parameters (documented):** none documented.

**Required body fields:** None of the body fields are explicitly marked `*` as required in the extracted parameter table — only the path parameter `idea_id *` is marked required. However, the example request body does include `email`, suggesting at least one of `email` / `created_by_user` is needed in practice. See Ambiguities.

| name | type | docs quote |
|---|---|---|
| (none explicitly marked required in body) | — | The only `*` marker in the parameter table is `idea_id *` which is the path parameter. |

**Optional body fields:**

| name | type | docs quote |
|---|---|---|
| `created_by_user` | string (email) | "Email address of Aha! user who created the vote. For create only." |
| `email` | string (email) | "Email address of portal user who created the vote. For create only." |

**Request body shape (verbatim example):**

```json
{"idea_endorsement":{"email":"no-reply@aha.io"}}
```

The body is **wrapped** in an `idea_endorsement` key.

**Response shape (success):** The Aha! docs page renders the response as JSON, but the extracted page content from two separate fetches did not contain the example response JSON inline (the summarizer reported "Response body section empty on the page"). Status documented: `Status: 200 OK`. By Aha! API convention, the wrapper key for a single-resource create is expected to be `idea_endorsement`.

```json
// not documented in extracted content — see Ambiguities #1
// Inferred conventional shape (NOT a verbatim docs quote):
// {
//   "idea_endorsement": {
//     "id": "...",
//     "email": "...",
//     "created_at": "...",
//     ...
//   }
// }
```

**Common error responses:**

| status | meaning | docs quote |
|---|---|---|
| 429 | rate limit exceeded | "If either limit is exceeded in its respective period then subsequent requests will fail with a 429 HTTP status code." (global) |

**Things NOT documented (gaps in the docs you must flag):**

- Idempotency behavior for repeat votes from the same email is **not documented**. Unclear whether a duplicate POST returns 200 with the existing endorsement, returns 422, or creates a duplicate row.
- Whether `email` and `created_by_user` are mutually exclusive, both allowed, or one required — not documented. The example uses only `email`.
- No `*` marker on either `email` or `created_by_user` in the docs' parameter table. The example body uses `email`, but the docs do not explicitly say "at least one of `email` / `created_by_user` is required". This is the kind of gap where the example suggests a requirement the schema doesn't state.
- No documented error code for "idea not found" (presumably 404 per Aha! convention).
- The endpoint name uses `endorsements` while the API resource family is documented under "Idea votes". The widget code must use the URL `/endorsements`, not `/votes`, despite the human-facing label.

---

## Ambiguities (must resolve before writing connector code)

1. **Response body examples are not extractable from the docs pages via WebFetch.** Across two separate fetches per page (with different prompts), the summarizer consistently reported that the "Response body" / "Example response" section is empty on the page or contains no inline JSON. This is most likely because the docs render examples via JavaScript and the static HTML the summarizer sees is empty. The structural facts (endpoint, method, request body shape, required fields, query params, status code, content type) are all present and consistent across fetches. The response wrapper keys for each operation are inferred from Aha! convention (singular resource name for single-resource operations, plural resource name for list operations) and **must be verified by the calling agent** the first time the widget runs against the live API. The most likely wrappers:
   - `GET /api/v1/products` → `{ "products": [...], "pagination": {...} }`
   - `GET /api/v1/products/:product_id/ideas` → `{ "ideas": [...], "pagination": {...} }`
   - `POST /api/v1/products/:product_id/ideas` → `{ "idea": {...} }`
   - `POST /api/v1/ideas/:idea_id/endorsements` → `{ "idea_endorsement": {...} }`

2. **Path-parameter format: numeric ID or reference key.** Both `:product_id` and `:idea_id` accept either form per the docs ("Numeric ID or key of the product" / "Numeric ID or key of the idea"). The widget config UI must decide which one to ask the user for. **Recommendation to surface to the user:** prefer the **reference key** (e.g. `PRJ1` for products, `PRJ1-I-42` for ideas) because it is human-readable, stable across environments, and what users see in URLs. The numeric ID is also valid if available.

3. **`page` / `per_page` query params for list endpoints.** Documented as a global pagination convention but not enumerated in the per-endpoint parameter tables for either `GET /api/v1/products` or `GET /api/v1/products/:product_id/ideas`. The convention says they apply to list endpoints, but the docs do not explicitly confirm. **Practical impact:** the widget should send `per_page` to set page size; if Aha! ignores it for these endpoints the result will silently be 30 items.

4. **Multiple "list products" variants.** The docs expose three endpoints: `list_products` (account scope), `list_products_(including_aha!_develop_teams_in_the_account)`, and `list_products_with_idea_portals_in_the_account`. For an ideas widget, the third variant (products with idea portals) is most relevant because only those products can receive ideas via the public/portal flow. The user should confirm which to wire — the calling agent should ask before picking.

5. **`product_id *` in the create-idea parameter table is the path parameter, not a body field.** The Aha! docs render the parameter table for `POST /api/v1/products/:product_id/ideas` with `product_id *` listed alongside body fields. This is a docs-formatting quirk: `product_id` is in the URL path, not in the JSON body. The widget must NOT send `product_id` inside the `idea` body wrapper.

6. **Idea endorsement: which email field, and is it required?** The docs list both `email` and `created_by_user` as optional (no `*` marker in body), but the example body uses `email`. Two structural possibilities:
   - At least one of the two is implicitly required (most likely — you can't endorse anonymously without an identifier).
   - Both can be omitted and the API uses the auth context to attribute the vote.

   The docs are silent. **Safer default for the widget:** always send `email` (matching the example body); fall back to a configured default if the user has no portal-email field.

7. **Endorsement idempotency.** Not documented. The widget must decide whether to: (a) attempt the POST and treat 422/duplicate-error responses as "already endorsed", or (b) GET the endorsements list first and skip if the email already endorsed. The user should confirm desired UX (silently re-endorse vs show "already voted").

8. **Auth scheme example uses placeholder token in docs.** The example header `curl -H "Authorization: Bearer 1111111111"` and the per-endpoint examples (`Bearer 15b60d42d4bc417284a246ced6877b0bf13fb4aca415f7b55f7006bc3694a8ab`) are **illustrative tokens only** — these MUST NOT be copied into any connector entry. The widget's connector entry must use the `{{ get_secret('AHA_API_TOKEN') }}` placeholder pattern.

## Confidence per operation

| operation | confidence | reason |
|---|---|---|
| List products | medium | Endpoint, method, and `updated_since` query param documented verbatim. Response wrapper inferred from convention (no extractable JSON example). Pagination params inferred from global convention. |
| List ideas (for a product) | medium | Endpoint, method, path-param format, and full query-param table all documented verbatim. Response wrapper inferred from convention (no extractable JSON example). |
| Create idea | medium | Endpoint, method, path-param format, request body wrapper (`{"idea":{...}}`), required fields (`name *`, `created_by *`), and full optional-fields table all documented verbatim with quotes. Response wrapper inferred from convention. |
| Vote on (endorse) an idea | medium-low | Endpoint, method, path-param format, request body wrapper (`{"idea_endorsement":{...}}`), and the two body fields all documented verbatim. However: no body field is marked required (only the path param), idempotency is undocumented, and response wrapper is inferred. |
