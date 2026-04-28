import { useState, useEffect, useId, useMemo } from "react";
import type { WidgetSDK, WidgetServiceSDK, WidgetProps, SortOption } from "./types";
import { DEFAULT_PAGE_SIZE, DEFAULT_SORT, SORT_OPTIONS } from "./constants";
import {
  useEmail,
  useSelectedProduct,
  useProducts,
  useIdeas,
  useCreateIdea,
  useVote,
} from "./hooks";
import { IdeaCard } from "./components/IdeaCard";
import { CreateIdeaForm } from "./components/CreateIdeaForm";

interface AppProps {
  sdk: WidgetSDK;
  widgetServiceSdk: WidgetServiceSDK;
}

const isValidEmail = (value: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const isValidSort = (value: unknown): value is SortOption =>
  value === "recent" || value === "trending" || value === "popular";

const resolvePageSize = (raw: WidgetProps["pageSize"]): number => {
  if (typeof raw === "number" && Number.isFinite(raw) && raw > 0) return Math.min(Math.floor(raw), 200);
  if (typeof raw === "string") {
    const parsed = parseInt(raw, 10);
    if (Number.isFinite(parsed) && parsed > 0) return Math.min(parsed, 200);
  }
  return DEFAULT_PAGE_SIZE;
};

const resolveProductKey = (raw: WidgetProps["productKey"]): string => {
  if (typeof raw === "string") return raw.trim();
  if (typeof raw === "number") return String(raw);
  return "";
};

export const App = ({ sdk, widgetServiceSdk }: AppProps) => {
  const [props, setProps] = useState<WidgetProps>(sdk.getProps());
  useEffect(() => sdk.on("propsChanged", setProps), [sdk]);

  const adminProductKey = resolveProductKey(props.productKey);
  const pageSize = resolvePageSize(props.pageSize);
  const useProductPicker = !adminProductKey;

  const [email, setEmail] = useEmail();
  const [emailDraft, setEmailDraft] = useState(email);
  const [editingEmail, setEditingEmail] = useState(!email);
  const [selectedProduct, setSelectedProduct] = useSelectedProduct();
  const productsApi = useProducts({ widgetServiceSdk, enabled: useProductPicker });
  const productKey = adminProductKey || selectedProduct;
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState<SortOption>(DEFAULT_SORT);
  const [page, setPage] = useState(1);
  const [showCreate, setShowCreate] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const searchInputId = useId();
  const sortInputId = useId();
  const emailInputId = useId();
  const productInputId = useId();

  useEffect(() => {
    if (!useProductPicker) return;
    if (productsApi.loading) return;
    if (productsApi.products.length === 0) return;
    const knownIds = new Set(productsApi.products.map((p) => p.id));
    if (selectedProduct && knownIds.has(selectedProduct)) return;
    setSelectedProduct(productsApi.products[0].id);
  }, [useProductPicker, selectedProduct, productsApi.loading, productsApi.products, setSelectedProduct]);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 6000);
    return () => window.clearTimeout(id);
  }, [toast]);

  useEffect(() => {
    const id = window.setTimeout(() => setSearchQuery(searchInput.trim()), 350);
    return () => window.clearTimeout(id);
  }, [searchInput]);

  useEffect(() => setPage(1), [searchQuery, sort, productKey, pageSize]);

  const { ideas, pagination, loading, error, refetch } = useIdeas({
    widgetServiceSdk,
    productKey,
    page,
    pageSize,
    sort,
    q: searchQuery,
  });

  const create = useCreateIdea({ widgetServiceSdk, productKey });
  const voteApi = useVote({ widgetServiceSdk });

  const totalPages = pagination?.total_pages ?? 1;
  const totalRecords = pagination?.total_records;
  const currentPage = pagination?.current_page ?? page;
  const canPaginate = totalPages > 1;

  const trimmedDraft = emailDraft.trim();
  const draftIsValid = isValidEmail(trimmedDraft);
  const canCreate = Boolean(email && productKey);
  const canVote = Boolean(email);

  const handleSaveEmail = () => {
    if (!draftIsValid) return;
    setEmail(trimmedDraft);
    setEditingEmail(false);
  };

  const handleCancelEmailEdit = () => {
    setEmailDraft(email);
    setEditingEmail(false);
  };

  const handleStartEditEmail = () => {
    setEmailDraft(email);
    setEditingEmail(true);
  };

  const handleSubmitIdea = async (name: string, description: string): Promise<boolean> => {
    const result = await create.create(name, description, email);
    if (result) {
      setShowCreate(false);
      setToast(`Idea “${result.name}” submitted.`);
      refetch();
      return true;
    }
    return false;
  };

  const handleVote = async (ideaId: string) => {
    const ok = await voteApi.vote(ideaId, email);
    if (ok) setToast("Vote recorded.");
  };

  const showEmptyState = !loading && !error && ideas.length === 0;

  const liveStatus = useMemo(() => {
    if (loading) return "Loading ideas…";
    if (error) return `Error loading ideas: ${error}`;
    if (showEmptyState) return "No ideas found.";
    if (typeof totalRecords === "number") return `${totalRecords} ideas — page ${currentPage} of ${totalPages}.`;
    return `${ideas.length} ideas loaded.`;
  }, [loading, error, showEmptyState, totalRecords, currentPage, totalPages, ideas.length]);

  return (
    <div className="aha-widget" role="region" aria-label="Aha! ideas portal">
      <header className="aha-header">
        <div className="aha-header__titles">
          <h1 className="aha-header__title">Ideas</h1>
          {useProductPicker ? (
            <div className="aha-product-picker">
              <label htmlFor={productInputId} className="aha-product-picker__label">
                Product
              </label>
              <select
                id={productInputId}
                className="aha-field__input aha-field__input--select"
                value={selectedProduct}
                onChange={(event) => setSelectedProduct(event.target.value)}
                disabled={productsApi.loading || (!productsApi.loading && productsApi.products.length === 0)}
                aria-describedby={productsApi.error ? `${productInputId}-help` : undefined}
              >
                {productsApi.loading && <option value="">Loading products…</option>}
                {!productsApi.loading && productsApi.products.length === 0 && (
                  <option value="">No products available</option>
                )}
                {!productsApi.loading && productsApi.products.length > 0 && !selectedProduct && (
                  <option value="">Select a product…</option>
                )}
                {productsApi.products.map((product) => {
                  const label = product.reference_prefix
                    ? `${product.name} (${product.reference_prefix})`
                    : product.name;
                  return (
                    <option key={product.id} value={product.id}>
                      {label}
                    </option>
                  );
                })}
              </select>
              {productsApi.error && (
                <p id={`${productInputId}-help`} className="aha-product-picker__error">
                  {productsApi.error}
                </p>
              )}
            </div>
          ) : (
            <p className="aha-header__subtitle">
              Product <strong>{adminProductKey}</strong>
            </p>
          )}
        </div>
        <div className="aha-header__email">
          {editingEmail ? (
            <div className="aha-email-edit">
              <label htmlFor={emailInputId} className="aha-email-edit__label">
                Your email
              </label>
              <input
                id={emailInputId}
                className="aha-field__input"
                type="email"
                value={emailDraft}
                onChange={(event) => setEmailDraft(event.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={Boolean(emailDraft) && !draftIsValid}
                aria-describedby={!draftIsValid && emailDraft ? `${emailInputId}-help` : undefined}
              />
              {!draftIsValid && emailDraft && (
                <p id={`${emailInputId}-help`} className="aha-email-edit__help">
                  Enter a valid email address.
                </p>
              )}
              <div className="aha-email-edit__actions">
                <button
                  type="button"
                  className="aha-button aha-button--primary aha-button--sm"
                  onClick={handleSaveEmail}
                  disabled={!draftIsValid}
                >
                  Save
                </button>
                {email && (
                  <button
                    type="button"
                    className="aha-button aha-button--secondary aha-button--sm"
                    onClick={handleCancelEmailEdit}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="aha-email-display">
              <span className="aha-email-display__label">Voting and submitting as</span>
              <strong className="aha-email-display__value">{email}</strong>
              <button
                type="button"
                className="aha-button aha-button--link"
                onClick={handleStartEditEmail}
              >
                Change
              </button>
            </div>
          )}
        </div>
      </header>

      <div className="aha-toolbar">
        <div className="aha-field aha-toolbar__search">
          <label className="aha-field__label aha-field__label--sr" htmlFor={searchInputId}>
            Search ideas
          </label>
          <input
            id={searchInputId}
            className="aha-field__input"
            type="search"
            placeholder="Search ideas…"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            disabled={!productKey}
          />
        </div>
        <div className="aha-field aha-toolbar__sort">
          <label className="aha-field__label aha-field__label--sr" htmlFor={sortInputId}>
            Sort ideas
          </label>
          <select
            id={sortInputId}
            className="aha-field__input aha-field__input--select"
            value={sort}
            onChange={(event) => {
              const next = event.target.value;
              if (isValidSort(next)) setSort(next);
            }}
            disabled={!productKey}
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                Sort: {option.label}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          className="aha-button aha-button--primary"
          onClick={() => {
            create.clearError();
            setShowCreate(true);
          }}
          disabled={!canCreate}
          aria-disabled={!canCreate}
          title={!email ? "Enter your email to submit ideas" : !productKey ? "Configure a product key to submit ideas" : undefined}
        >
          + New Idea
        </button>
      </div>

      {showCreate && (
        <CreateIdeaForm
          email={email}
          submitting={create.submitting}
          error={create.error}
          onSubmit={handleSubmitIdea}
          onCancel={() => {
            create.clearError();
            setShowCreate(false);
          }}
        />
      )}

      <div className="aha-status" role="status" aria-live="polite">
        {liveStatus}
      </div>

      {voteApi.error && (
        <div className="aha-alert aha-alert--warning" role="alert">
          {voteApi.error}
          <button
            type="button"
            className="aha-button aha-button--link aha-button--sm"
            onClick={voteApi.clearError}
          >
            Dismiss
          </button>
        </div>
      )}

      {error && (
        <div className="aha-alert aha-alert--error" role="alert">
          Couldn’t load ideas: {error}
          <button type="button" className="aha-button aha-button--secondary aha-button--sm" onClick={refetch}>
            Retry
          </button>
        </div>
      )}

      {showEmptyState && (
        <div className="aha-empty">
          <p>No ideas yet.</p>
          {canCreate && <p>Be the first — click <strong>+ New Idea</strong> above.</p>}
        </div>
      )}

      <ul className="aha-list" aria-busy={loading}>
        {ideas.map((idea) => (
          <li key={idea.id} className="aha-list__item">
            <IdeaCard
              idea={idea}
              hasVoted={voteApi.votedIds.has(idea.id)}
              isVoting={voteApi.votingId === idea.id}
              canVote={canVote}
              onVote={handleVote}
            />
          </li>
        ))}
      </ul>

      {canPaginate && (
        <nav className="aha-pagination" aria-label="Pagination">
          <button
            type="button"
            className="aha-button aha-button--secondary"
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            disabled={loading || currentPage <= 1}
          >
            Previous
          </button>
          <span className="aha-pagination__status" aria-live="polite">
            Page {currentPage} of {totalPages}
          </span>
          <button
            type="button"
            className="aha-button aha-button--secondary"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={loading || currentPage >= totalPages}
          >
            Next
          </button>
        </nav>
      )}

      {toast && (
        <div className="aha-toast" role="status" aria-live="polite">
          <span>{toast}</span>
          <button
            type="button"
            className="aha-toast__dismiss"
            onClick={() => setToast(null)}
          >
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
};
