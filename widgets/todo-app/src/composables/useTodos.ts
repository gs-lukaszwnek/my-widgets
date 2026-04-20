import { ref, onMounted } from "vue";
import type { ConnectorsSDK, Todo } from "../types";
import {
  CONNECTOR_CREATE,
  CONNECTOR_DELETE,
  CONNECTOR_LIST,
  CONNECTOR_UPDATE,
} from "../types";

const isTodo = (value: unknown): value is Todo => {
  if (typeof value !== "object" || value === null) return false;
  const record = value as Record<string, unknown>;
  return (
    typeof record.id === "string" &&
    typeof record.title === "string" &&
    typeof record.completed === "boolean" &&
    typeof record.created_at === "string"
  );
};

const toTodoArray = (value: unknown): Todo[] => {
  if (!Array.isArray(value)) return [];
  return value.filter(isTodo);
};

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "Something went wrong";
};

export const useTodos = (connectors: ConnectorsSDK) => {
  const todos = ref<Todo[]>([]);
  const loading = ref(true);
  const error = ref<string | null>(null);
  const creating = ref(false);
  const pendingIds = ref<Set<string>>(new Set());

  const setPending = (id: string, pending: boolean) => {
    const next = new Set(pendingIds.value);
    if (pending) next.add(id);
    else next.delete(id);
    pendingIds.value = next;
  };

  const refresh = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await connectors.connectors.execute({
        permalink: CONNECTOR_LIST,
        method: "GET",
      });
      todos.value = toTodoArray(response);
    } catch (err) {
      error.value = getErrorMessage(err);
    } finally {
      loading.value = false;
    }
  };

  const createTodo = async (title: string) => {
    const trimmed = title.trim();
    if (trimmed.length === 0 || creating.value) return;
    creating.value = true;
    error.value = null;
    try {
      const response = await connectors.connectors.execute({
        permalink: CONNECTOR_CREATE,
        method: "POST",
        payload: { title: trimmed, completed: false },
      });
      const inserted = toTodoArray(response);
      if (inserted.length > 0) todos.value = [inserted[0], ...todos.value];
      else await refresh();
    } catch (err) {
      error.value = getErrorMessage(err);
    } finally {
      creating.value = false;
    }
  };

  const toggleTodo = async (todo: Todo) => {
    if (pendingIds.value.has(todo.id)) return;
    setPending(todo.id, true);
    const previous = todo.completed;
    todos.value = todos.value.map((item) =>
      item.id === todo.id ? { ...item, completed: !previous } : item,
    );
    try {
      await connectors.connectors.execute({
        permalink: CONNECTOR_UPDATE,
        method: "PATCH",
        queryParams: { id: `eq.${todo.id}` },
        payload: { completed: !previous },
      });
    } catch (err) {
      todos.value = todos.value.map((item) =>
        item.id === todo.id ? { ...item, completed: previous } : item,
      );
      error.value = getErrorMessage(err);
    } finally {
      setPending(todo.id, false);
    }
  };

  const deleteTodo = async (todo: Todo) => {
    if (pendingIds.value.has(todo.id)) return;
    setPending(todo.id, true);
    const snapshot = todos.value;
    todos.value = todos.value.filter((item) => item.id !== todo.id);
    try {
      await connectors.connectors.execute({
        permalink: CONNECTOR_DELETE,
        method: "DELETE",
        queryParams: { id: `eq.${todo.id}` },
      });
    } catch (err) {
      todos.value = snapshot;
      error.value = getErrorMessage(err);
    } finally {
      setPending(todo.id, false);
    }
  };

  const dismissError = () => {
    error.value = null;
  };

  onMounted(refresh);

  return {
    todos,
    loading,
    error,
    creating,
    pendingIds,
    refresh,
    createTodo,
    toggleTodo,
    deleteTodo,
    dismissError,
  };
};
