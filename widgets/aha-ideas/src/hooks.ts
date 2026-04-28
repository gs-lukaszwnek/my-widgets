import { useState, useEffect, useCallback, useRef } from "react";
import type {
  WidgetServiceSDK,
  Idea,
  Pagination,
  Product,
  SortOption,
} from "./types";
import {
  PERMALINK_PRODUCTS,
  PERMALINK_LIST,
  PERMALINK_CREATE,
  PERMALINK_VOTE,
  EMAIL_STORAGE_KEY,
  PRODUCT_STORAGE_KEY,
} from "./constants";

const isObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null;

const unwrap = (res: unknown): unknown => {
  if (!isObject(res)) return res;
  if (isObject(res.data)) return res.data;
  if (isObject(res.body)) return res.body;
  return res;
};

const isProduct = (v: unknown): v is Product => {
  if (!isObject(v)) return false;
  if (typeof v.id !== "string" && typeof v.id !== "number") return false;
  if (typeof v.name !== "string") return false;
  return true;
};

const normalizeProduct = (raw: Record<string, unknown>): Product => {
  const id = typeof raw.id === "string" ? raw.id : String(raw.id);
  const name = typeof raw.name === "string" ? raw.name : "";
  const reference_prefix = typeof raw.reference_prefix === "string" ? raw.reference_prefix : undefined;
  return { id, name, reference_prefix };
};

const parseProducts = (res: unknown): Product[] => {
  const data = unwrap(res);
  if (!isObject(data)) return [];
  const rawProducts = data.products;
  if (!Array.isArray(rawProducts)) return [];
  return rawProducts.filter(isProduct).map((raw) => normalizeProduct(raw));
};

const isIdea = (v: unknown): v is Idea => {
  if (!isObject(v)) return false;
  if (typeof v.id !== "string" && typeof v.id !== "number") return false;
  if (typeof v.name !== "string") return false;
  return true;
};

const normalizeIdea = (raw: Record<string, unknown>): Idea => {
  const id = typeof raw.id === "string" ? raw.id : String(raw.id);
  const name = typeof raw.name === "string" ? raw.name : "";
  const reference_num = typeof raw.reference_num === "string" ? raw.reference_num : undefined;
  const endorsement_count = typeof raw.endorsement_count === "number" ? raw.endorsement_count : undefined;
  const score = typeof raw.score === "number" ? raw.score : undefined;
  const created_at = typeof raw.created_at === "string" ? raw.created_at : undefined;
  const url = typeof raw.url === "string" ? raw.url : undefined;
  const rawDesc = raw.description;
  let description: Idea["description"] = undefined;
  if (typeof rawDesc === "string") description = rawDesc;
  else if (isObject(rawDesc) && typeof rawDesc.body === "string") description = { body: rawDesc.body };
  return { id, name, reference_num, endorsement_count, score, created_at, url, description };
};

const parseIdeas = (res: unknown): { ideas: Idea[]; pagination?: Pagination } => {
  const data = unwrap(res);
  if (!isObject(data)) return { ideas: [] };
  const rawIdeas = data.ideas;
  const ideas: Idea[] = Array.isArray(rawIdeas)
    ? rawIdeas.filter(isIdea).map((raw) => normalizeIdea(raw))
    : [];
  const rawPagination = data.pagination;
  const pagination = isObject(rawPagination)
    ? {
        total_records: typeof rawPagination.total_records === "number" ? rawPagination.total_records : undefined,
        total_pages: typeof rawPagination.total_pages === "number" ? rawPagination.total_pages : undefined,
        current_page: typeof rawPagination.current_page === "number" ? rawPagination.current_page : undefined,
      }
    : undefined;
  return { ideas, pagination };
};

const parseSingleIdea = (res: unknown): Idea | null => {
  const data = unwrap(res);
  if (!isObject(data)) return null;
  if (isObject(data.idea) && isIdea(data.idea)) return normalizeIdea(data.idea);
  if (isIdea(data)) return normalizeIdea(data);
  return null;
};

export const stripHtml = (html: string): string => {
  if (typeof DOMParser === "undefined") return html.replace(/<[^>]*>/g, "").trim();
  const doc = new DOMParser().parseFromString(html, "text/html");
  return (doc.body.textContent ?? "").trim();
};

export const useEmail = () => {
  const [email, setEmailState] = useState<string>(() => {
    if (typeof localStorage === "undefined") return "";
    return localStorage.getItem(EMAIL_STORAGE_KEY) ?? "";
  });

  const setEmail = useCallback((next: string) => {
    setEmailState(next);
    if (typeof localStorage === "undefined") return;
    if (next) localStorage.setItem(EMAIL_STORAGE_KEY, next);
    else localStorage.removeItem(EMAIL_STORAGE_KEY);
  }, []);

  return [email, setEmail] as const;
};

export const useSelectedProduct = () => {
  const [selected, setSelectedState] = useState<string>(() => {
    if (typeof localStorage === "undefined") return "";
    return localStorage.getItem(PRODUCT_STORAGE_KEY) ?? "";
  });

  const setSelected = useCallback((next: string) => {
    setSelectedState(next);
    if (typeof localStorage === "undefined") return;
    if (next) localStorage.setItem(PRODUCT_STORAGE_KEY, next);
    else localStorage.removeItem(PRODUCT_STORAGE_KEY);
  }, []);

  return [selected, setSelected] as const;
};

interface UseProductsArgs {
  widgetServiceSdk: WidgetServiceSDK;
  enabled: boolean;
}

export const useProducts = ({ widgetServiceSdk, enabled }: UseProductsArgs) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setProducts([]);
      setError(null);
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setError(null);
    console.log("[aha-ideas] >>> products execute starting");
    widgetServiceSdk.connectors
      .execute({ permalink: PERMALINK_PRODUCTS, method: "GET" })
      .then((res) => {
        if (cancelled) return;
        const parsed = parseProducts(res);
        console.log("[aha-ideas] <<< products resolved", { raw: res, parsed });
        setProducts(parsed);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        console.log("[aha-ideas] products execute threw", err);
        const message = err instanceof Error ? err.message : "Failed to load products";
        setError(message);
        setProducts([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [widgetServiceSdk, enabled]);

  return { products, loading, error };
};

interface UseIdeasArgs {
  widgetServiceSdk: WidgetServiceSDK;
  productKey: string;
  page: number;
  pageSize: number;
  sort: SortOption;
  q: string;
}

export const useIdeas = ({
  widgetServiceSdk,
  productKey,
  page,
  pageSize,
  sort,
  q,
}: UseIdeasArgs) => {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [pagination, setPagination] = useState<Pagination | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reloadCount, setReloadCount] = useState(0);

  useEffect(() => {
    if (!productKey) {
      setIdeas([]);
      setPagination(undefined);
      setError(null);
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setError(null);
    const queryParams: Record<string, string> = {
      product_id: productKey,
      page: String(page),
      per_page: String(pageSize),
      sort,
    };
    if (q) queryParams.q = q;
    console.log("[aha-ideas] >>> list execute starting", { queryParams });
    widgetServiceSdk.connectors
      .execute({ permalink: PERMALINK_LIST, method: "GET", queryParams })
      .then((res) => {
        if (cancelled) return;
        const parsed = parseIdeas(res);
        console.log("[aha-ideas] <<< list resolved", { raw: res, parsed });
        setIdeas(parsed.ideas);
        setPagination(parsed.pagination);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        console.log("[aha-ideas] list execute threw", err);
        const message = err instanceof Error ? err.message : "Failed to load ideas";
        setError(message);
        setIdeas([]);
        setPagination(undefined);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [widgetServiceSdk, productKey, page, pageSize, sort, q, reloadCount]);

  const refetch = useCallback(() => setReloadCount((n) => n + 1), []);

  return { ideas, pagination, loading, error, refetch };
};

interface UseCreateIdeaArgs {
  widgetServiceSdk: WidgetServiceSDK;
  productKey: string;
}

export const useCreateIdea = ({ widgetServiceSdk, productKey }: UseCreateIdeaArgs) => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isSubmittingRef = useRef(false);

  const create = useCallback(
    async (name: string, description: string, email: string): Promise<Idea | null> => {
      if (isSubmittingRef.current) return null;
      isSubmittingRef.current = true;
      setSubmitting(true);
      setError(null);
      try {
        const res = await widgetServiceSdk.connectors.execute({
          permalink: PERMALINK_CREATE,
          method: "POST",
          queryParams: { product_id: productKey },
          payload: {
            idea: {
              name,
              created_by: email,
              ...(description ? { description } : {}),
            },
          },
        });
        return parseSingleIdea(res);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Failed to submit idea";
        setError(message);
        return null;
      } finally {
        isSubmittingRef.current = false;
        setSubmitting(false);
      }
    },
    [widgetServiceSdk, productKey]
  );

  const clearError = useCallback(() => setError(null), []);

  return { create, submitting, error, clearError };
};

interface UseVoteArgs {
  widgetServiceSdk: WidgetServiceSDK;
}

export const useVote = ({ widgetServiceSdk }: UseVoteArgs) => {
  const [votingId, setVotingId] = useState<string | null>(null);
  const [votedIds, setVotedIds] = useState<Set<string>>(new Set());
  const [error, setError] = useState<string | null>(null);

  const vote = useCallback(
    async (ideaId: string, email: string): Promise<boolean> => {
      if (votingId) return false;
      setVotingId(ideaId);
      setError(null);
      try {
        await widgetServiceSdk.connectors.execute({
          permalink: PERMALINK_VOTE,
          method: "POST",
          queryParams: { idea_id: ideaId },
          payload: { idea_endorsement: { email } },
        });
        setVotedIds((prev) => {
          const next = new Set(prev);
          next.add(ideaId);
          return next;
        });
        return true;
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Vote failed (you may have already voted)";
        setError(message);
        return false;
      } finally {
        setVotingId(null);
      }
    },
    [widgetServiceSdk, votingId]
  );

  const clearError = useCallback(() => setError(null), []);

  return { vote, votingId, votedIds, error, clearError };
};
