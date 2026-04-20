import { useCallback, useEffect, useRef, useState } from "react";
import type { ConnectorsSDK, Todo } from "./types";
import { CONNECTORS } from "./constants";

interface UseTodosResult {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  addTodo: (title: string) => Promise<void>;
  toggleTodo: (todo: Todo) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
}

export const useTodos = (connectors: ConnectorsSDK): UseTodosResult => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const mutatingRef = useRef(false);

  const refresh = useCallback(async () => {
    try {
      const rows = await connectors.connectors.execute<Todo[]>({
        permalink: CONNECTORS.list,
        method: "GET",
      });
      setTodos(Array.isArray(rows) ? rows : []);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load todos");
    } finally {
      setLoading(false);
    }
  }, [connectors]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const addTodo = useCallback(
    async (title: string) => {
      const trimmed = title.trim();
      if (!trimmed || mutatingRef.current) return;
      mutatingRef.current = true;
      try {
        await connectors.connectors.execute({
          permalink: CONNECTORS.create,
          method: "POST",
          payload: { title: trimmed, completed: false },
        });
        await refresh();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to add todo");
      } finally {
        mutatingRef.current = false;
      }
    },
    [connectors, refresh],
  );

  const toggleTodo = useCallback(
    async (todo: Todo) => {
      if (mutatingRef.current) return;
      mutatingRef.current = true;
      try {
        await connectors.connectors.execute({
          permalink: CONNECTORS.update,
          method: "PATCH",
          queryParams: { id: `eq.${todo.id}` },
          payload: { completed: !todo.completed },
        });
        await refresh();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to update todo");
      } finally {
        mutatingRef.current = false;
      }
    },
    [connectors, refresh],
  );

  const deleteTodo = useCallback(
    async (id: string) => {
      if (mutatingRef.current) return;
      mutatingRef.current = true;
      try {
        await connectors.connectors.execute({
          permalink: CONNECTORS.delete,
          method: "DELETE",
          queryParams: { id: `eq.${id}` },
        });
        await refresh();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to delete todo");
      } finally {
        mutatingRef.current = false;
      }
    },
    [connectors, refresh],
  );

  return { todos, loading, error, addTodo, toggleTodo, deleteTodo };
};
