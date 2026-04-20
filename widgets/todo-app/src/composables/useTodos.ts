import { ref } from "vue";
import type { Todo, WidgetSDK } from "../types";

const toErrorMessage = (value: unknown, fallback: string): string => {
  if (value instanceof Error) return value.message;
  if (typeof value === "string") return value;
  return fallback;
};

const toTodoArray = (value: unknown): Todo[] => {
  if (!Array.isArray(value)) return [];
  return value.filter(
    (entry): entry is Todo =>
      typeof entry === "object" &&
      entry !== null &&
      "id" in entry &&
      typeof (entry as { id: unknown }).id === "string"
  );
};

export const useTodos = (sdk: WidgetSDK) => {
  const todos = ref<Todo[]>([]);
  const isLoading = ref(false);
  const isBusy = ref(false);
  const error = ref<string | null>(null);

  const refresh = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const data = await sdk.connectors.execute({
        permalink: "todo-app-list",
        method: "GET",
      });
      todos.value = toTodoArray(data);
    } catch (err) {
      error.value = toErrorMessage(err, "Failed to load todos");
    } finally {
      isLoading.value = false;
    }
  };

  const add = async (title: string) => {
    const trimmed = title.trim();
    if (!trimmed || isBusy.value) return false;
    isBusy.value = true;
    error.value = null;
    try {
      const created = await sdk.connectors.execute({
        permalink: "todo-app-create",
        method: "POST",
        payload: { title: trimmed, completed: false },
      });
      const fresh = toTodoArray(created);
      todos.value = fresh.length ? [...fresh, ...todos.value] : todos.value;
      if (!fresh.length) await refresh();
      return true;
    } catch (err) {
      error.value = toErrorMessage(err, "Failed to add todo");
      return false;
    } finally {
      isBusy.value = false;
    }
  };

  const remove = async (id: string) => {
    if (isBusy.value) return;
    isBusy.value = true;
    error.value = null;
    const previous = todos.value;
    todos.value = todos.value.filter((todo) => todo.id !== id);
    try {
      await sdk.connectors.execute({
        permalink: "todo-app-delete",
        method: "DELETE",
        queryParams: { id: `eq.${id}` },
      });
    } catch (err) {
      todos.value = previous;
      error.value = toErrorMessage(err, "Failed to delete todo");
    } finally {
      isBusy.value = false;
    }
  };

  const toggle = async (id: string, completed: boolean) => {
    if (isBusy.value) return;
    isBusy.value = true;
    error.value = null;
    const previous = todos.value;
    todos.value = todos.value.map((todo) =>
      todo.id === id ? { ...todo, completed } : todo
    );
    try {
      await sdk.connectors.execute({
        permalink: "todo-app-toggle",
        method: "PATCH",
        queryParams: { id: `eq.${id}` },
        payload: { completed },
      });
    } catch (err) {
      todos.value = previous;
      error.value = toErrorMessage(err, "Failed to update todo");
    } finally {
      isBusy.value = false;
    }
  };

  const dismissError = () => (error.value = null);

  return { todos, isLoading, isBusy, error, refresh, add, remove, toggle, dismissError };
};
