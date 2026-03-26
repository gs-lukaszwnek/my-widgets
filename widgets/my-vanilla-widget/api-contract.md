# Dog CEO API — Contract for `my-vanilla-widget` widget

**Docs source(s):**
- https://dog.ceo/dog-api/ — retrieved 2026-04-29T12:32:27Z (homepage, lists example URL `https://dog.ceo/api/breeds/image/random`)
- https://dog.ceo/dog-api/documentation/ — retrieved 2026-04-29T12:32:27Z (index page; documents `https://dog.ceo/api/breeds/list/all` as "List all breeds")
- https://dog.ceo/dog-api/documentation/breed — retrieved 2026-04-29T12:32:27Z (documents `https://dog.ceo/api/breed/hound/images/random` as "Returns a random dog image from a breed, e.g. hound")
- https://dog.ceo/dog-api/documentation/sub-breed — retrieved 2026-04-29T12:32:27Z (documents `https://dog.ceo/api/breed/hound/afghan/images/random` — sub-breed appears as a second path segment after the master breed)
- https://dog.ceo/api/breeds/list/all — retrieved 2026-04-29T12:32:27Z (live response sampled to capture envelope, since published docs render examples client-side and were not captured by the doc fetch)
- https://dog.ceo/api/breed/hound/images/random — retrieved 2026-04-29T12:32:27Z (live response sampled to capture envelope)

> Note: The Dog CEO published documentation pages (`/dog-api/documentation/*`) are sparse — they list endpoint URLs and short descriptions but render JSON example payloads client-side, which the doc-fetcher could not capture. To document the response envelope, the live API was sampled once per endpoint. The envelope shape `{ "message": ..., "status": "success" }` is consistent across both endpoints and across the GitHub source repo's stated convention. Any consumer of this contract should treat the envelope as the documented contract.

**Auth scheme:** Not documented. The API is publicly accessible without authentication; no `Authorization` header, API key, or token is mentioned anywhere in the published docs. The homepage shows the example URL `https://dog.ceo/api/breeds/image/random` with no auth scheme.

**Base URL:** `https://dog.ceo/api` (verbatim from docs index page: "https://dog.ceo/api/breeds/list/all")

**Rate limits:** not documented

---

## Operation: List all breeds

**Endpoint:** `GET https://dog.ceo/api/breeds/list/all`

**Path parameters:** none

**Query parameters (documented):** none

**Required body fields:** no body — `GET` request

**Optional body fields:** none

**Response shape (success):**

Verbatim live response captured 2026-04-29T12:32:27Z (HTTP 200, `content-type: application/json`):

```json
{
  "message": {
    "affenpinscher": [],
    "african": ["wild"],
    "airedale": [],
    "akita": [],
    "appenzeller": [],
    "australian": ["kelpie", "shepherd"],
    "bakharwal": ["indian"],
    "basenji": [],
    "beagle": [],
    "bluetick": [],
    "borzoi": [],
    "bouvier": [],
    "boxer": [],
    "brabancon": [],
    "briard": [],
    "buhund": ["norwegian"],
    "bulldog": ["boston", "english", "french"],
    "bullterrier": ["staffordshire"],
    "cattledog": ["australian"],
    "cavapoo": [],
    "chihuahua": [],
    "chippiparai": ["indian"],
    "chow": [],
    "clumber": [],
    "cockapoo": [],
    "collie": ["border"],
    "coonhound": [],
    "corgi": ["cardigan"],
    "cotondetulear": [],
    "dachshund": [],
    "dalmatian": [],
    "dane": ["great"],
    "danish": ["swedish"],
    "deerhound": ["scottish"],
    "dhole": [],
    "dingo": [],
    "doberman": [],
    "elkhound": ["norwegian"],
    "entlebucher": [],
    "eskimo": [],
    "finnish": ["lapphund"],
    "frise": ["bichon"],
    "gaddi": ["indian"],
    "german": ["shepherd"],
    "greyhound": ["indian", "italian"],
    "groenendael": [],
    "havanese": [],
    "hound": ["afghan", "basset", "blood", "english", "ibizan", "plott", "walker"],
    "husky": [],
    "...": "(truncated for brevity — full response is a flat object whose keys are master breed names and whose values are arrays of sub-breed names; empty array means no sub-breeds)"
  },
  "status": "success"
}
```

**Response wrapper key:** `message` (consumers should read `payload.message` to obtain the breed map). The envelope key `status` indicates success/error.

**Common error responses:** none documented for this endpoint. (No path or query parameters means there is no documented input that could fail.)

**Things NOT documented (gaps in the docs you must flag):**
- The published docs page `https://dog.ceo/dog-api/documentation/` does not include the JSON example payload inline — the example is rendered client-side and was not captured by WebFetch. The shape recorded above is from a live-API sample, not a verbatim docs quote.
- HTTP method is not explicitly stated in the docs (the index page lists only the URL `https://dog.ceo/api/breeds/list/all`). `GET` is the convention for read-only Dog CEO endpoints and is what the live endpoint accepts; this is inferred, not docs-quoted.
- Caching behavior, rate limits, and stability of the breed list are not documented.
- It is not documented whether the `message` object's key ordering is stable across calls.

---

## Operation: Random image by breed

**Endpoint:** `GET https://dog.ceo/api/breed/:breed/images/random`

**Path parameters:**

| name | format | docs quote |
|---|---|---|
| `:breed` | lowercase master-breed name as it appears in the `/breeds/list/all` response keys | "https://dog.ceo/api/breed/hound/images/random" — docs use `hound` as the example; published docs do not contain a verbatim sentence describing the format. The breed names returned by `/breeds/list/all` are all lowercase (e.g. `affenpinscher`, `bulldog`, `hound`), and the docs example uses `hound` (lowercase). Case sensitivity is not stated in prose in the published docs. |

**Sub-breed variant (documented but out of scope for this widget's stated operations):** `GET https://dog.ceo/api/breed/:breed/:subBreed/images/random` — docs example: "https://dog.ceo/api/breed/hound/afghan/images/random". Sub-breeds are a second path segment, NOT a hyphenated single segment. Recorded here for completeness; the widget's stated operation is master-breed-only.

**Query parameters (documented):** none

**Required body fields:** no body — `GET` request

**Optional body fields:** none

**Response shape (success):**

Verbatim live response captured 2026-04-29T12:32:27Z (HTTP 200, `content-type: application/json`):

```json
{
  "message": "https:\/\/images.dog.ceo\/breeds\/hound-ibizan\/n02091244_5638.jpg",
  "status": "success"
}
```

**Response wrapper key:** `message` — for this endpoint `message` is a string (the image URL), not an object. Consumers read `payload.message` to obtain the URL. Note: forward slashes appear escaped (`\/`) in the raw JSON; standard JSON parsers unescape these automatically.

**Common error responses:**

| status | meaning | docs quote |
|---|---|---|
| 404 | Breed not found | Live response body verbatim (sampled 2026-04-29T12:32:27Z by requesting `/api/breed/notarealbreed/images/random`): `{"status":"error","message":"Breed not found (main breed does not exist)","code":404}`. Not quoted from published docs — published docs do not document error responses. |

**Things NOT documented (gaps in the docs you must flag):**
- The published docs page `https://dog.ceo/dog-api/documentation/breed` describes the endpoint as "Returns a random dog image from a breed, e.g. hound" but does not include the JSON example payload inline.
- Case sensitivity of `:breed` is not stated in prose. Empirically, uppercase variants like `HOUND` return `404` with body `{"status":"error","message":"Breed not found (main breed does not exist)","code":404}` (live probe 2026-04-29T12:32:27Z). The widget MUST send breed names exactly as keyed in the `/breeds/list/all` response (lowercase, no spaces, no hyphens for master breeds).
- The published docs do not document the error envelope at all; the error shape `{ status: "error", message: <string>, code: <int> }` is from a live probe, not a docs quote.
- HTTP method not docs-quoted — inferred `GET`.
- Whether the returned image URL is stable (CDN-cacheable) or short-lived is not documented.
- Whether identical successive calls can return the same image is not documented.

---

## Ambiguities (must resolve before writing connector code)

1. **Published docs do not contain inline JSON examples.** The Dog CEO documentation pages render examples via client-side JS, which doc-fetchers cannot capture. The response shapes in this contract are verbatim from a single live-API sample taken 2026-04-29T12:32:27Z, not verbatim from the docs. Consumers should treat this as the de-facto contract (the API itself produces these payloads consistently) but be aware that the published docs do not provide a written schema. Confidence on response shape: **medium** (sampled, not docs-quoted), upgraded to **high** by the consistency of the `{message, status}` envelope across both endpoints and the matching error envelope `{status, message, code}` returned on 404.

2. **HTTP method is not explicitly documented.** The published docs list URLs without the verb. `GET` is the convention and what the live endpoints accept, but this is inferred. Connector code should use `GET`; this is unlikely to bite.

3. **Case sensitivity of `:breed` is not stated in prose** — only implied by the docs always using lowercase examples and by the `/breeds/list/all` response always using lowercase keys. The live probe confirmed uppercase returns 404. Connector code should pass the breed string through untouched (the widget should source the value directly from the dropdown populated by `/breeds/list/all`, which guarantees correct casing).

4. **No rate-limit documentation.** Widget should not assume aggressive throttling, but should also not retry on transient failures aggressively. Consider basic client-side caching of `/breeds/list/all` (the calling agent's choice — out of contract scope).

5. **No auth scheme is documented.** All evidence (homepage example, missing auth section, free-public-API positioning, GitHub source) points to no auth required. Connector entry should send no `Authorization` header and no API key.

## Confidence per operation

| operation | confidence | reason |
|---|---|---|
| List all breeds | high | Endpoint URL is verbatim from the docs index page. Method is conventionally `GET` (inferred). Response shape is from a live sample with the documented envelope `{ message, status }` matching the API's stated convention; the response was 200 with the expected structure. No path/query params, no required body. |
| Random image by breed | medium-high | Endpoint URL is verbatim from the docs page (`https://dog.ceo/api/breed/hound/images/random`). Path-parameter format (`hound` lowercase) is shown by example only — case requirement is empirically confirmed but not docs-quoted in prose. Response shape is from a live sample; envelope matches the same `{ message, status }` shape. Error response shape is from a live probe (404 on bad breed), not docs-quoted. |
