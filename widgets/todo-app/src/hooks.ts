import { ref, onMounted } from "vue";
import type { ConnectorsSDK, Todo } from "./types";
import {
  CONNECTOR_LIST,
  CONNECTOR_CREATE,
  CONNECTOR_DELETE,
  SUPABASE_EQ,
} from "./constants";

const isTodoArray = (value: unknown): value is Todo[] =>
  Array.isArray(value) &&
  value.every(
    (item) =>
      typeof item === "object" &&
      item !== null &&
      "id" in item &&
      "title" in item,
  );

const isTodo = (value: unknown): value is Todo =>
  typeof value === "object" &&
  value !== null &&
  "id" in value &&
  "title" in value;

export const useTodos = (connectors: ConnectorsSDK) => {
  const todos = ref<Todo[]>([]);
  const loading = ref(false);
  const saving = ref(false);
  const error = ref<string | null>(null);
  const isSavingRef = { current: false };

  const describeError = (e: unknown) =>
    e instanceof Error ? e.message : "Something went wrong. Please try again.";

  const load = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await connectors.connectors.execute({
        permalink: CONNECTOR_LIST,
        method: "GET",
      });
      todos.value = isTodoArray(response) ? response : [];
    } catch (e) {
      error.value = describeError(e);
    } finally {
      loading.value = false;
    }
  };

  const add = async (title: string) => {
    const trimmed = title.trim();
    if (!trimmed) return;
    if (isSavingRef.current) return;
    isSavingRef.current = true;
    saving.value = true;
    error.value = null;
    try {
      const response = await connectors.connectors.execute({
        permalink: CONNECTOR_CREATE,
        method: "POST",
        payload: { title: trimmed },
      });
      if (isTodoArray(response) && response.length > 0) {
        todos.value = [response[0], ...todos.value];
      } else if (isTodo(response)) {
        todos.value = [response, ...todos.value];
      } else {
        await load();
      }
    } catch (e) {
      error.value = describeError(e);
    } finally {
      saving.value = false;
      isSavingRef.current = false;
    }
  };

  const remove = async (id: Todo["id"]) => {
    const previous = todos.value;
    todos.value = todos.value.filter((t) => t.id !== id);
    error.value = null;
    try {
      await connectors.connectors.execute({
        permalink: CONNECTOR_DELETE,
        method: "DELETE",
        queryParams: { id: SUPABASE_EQ(id) },
      });
    } catch (e) {
      todos.value = previous;
      error.value = describeError(e);
    }
  };

  onMounted(load);

  return { todos, loading, saving, error, load, add, remove };
};
