import type { SortOption } from "./types";

export const PERMALINK_PRODUCTS = "aha-ideas-products";
export const PERMALINK_LIST = "aha-ideas-list";
export const PERMALINK_CREATE = "aha-ideas-create";
export const PERMALINK_VOTE = "aha-ideas-vote";

export const EMAIL_STORAGE_KEY = "aha-ideas:email";
export const PRODUCT_STORAGE_KEY = "aha-ideas:product";
export const DEFAULT_PAGE_SIZE = 20;
export const DEFAULT_SORT: SortOption = "recent";

export const SORT_OPTIONS: ReadonlyArray<{ value: SortOption; label: string }> = [
  { value: "recent", label: "Recent" },
  { value: "trending", label: "Trending" },
  { value: "popular", label: "Popular" },
];
