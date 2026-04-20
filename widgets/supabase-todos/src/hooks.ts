import { ref, onUnmounted } from "vue";
import type { Ref } from "vue";
import type { Todo, WidgetProps, WidgetSDK } from "./types";
import { isTodo, isTodoArray } from "./types";
import {
  CONNECTOR_CREATE,
  CONNECTOR_DELETE,
  CONNECTOR_LIST,
  ERROR_CREATE,
  ERROR_DELETE,
  ERROR_LOAD,
} from "./constants";

export interface UseTodosResult {
  todos: Ref<Todo[]>;
  loading: Ref<boolean>;
  creating: Ref<boolean>;
  deletingId: Ref<string | null>;
  error: Ref<string | null>;
  refresh: () => Promise<void>;
  add: (title: string) => Promise<void>;
  remove: (id: string) => Promise<void>;
}

export const useTodos = (sdk: WidgetSDK, pageSize: Ref<number>): UseTodosResult => {
  const todos = ref<Todo[]>([]);
  const loading = ref(false);
  const creating = ref(false);
  const deletingId = ref<string | null>(null);
  const error = ref<string | null>(null);

  const refresh = async () => {
    loading.value = true;
    error.value = null;
    try {
      const result = await sdk.connectors.execute({
        permalink: CONNECTOR_LIST,
        method: "GET",
        queryParams: { limit: pageSize.value },
      });
      todos.value = isTodoArray(result) ? result : [];
    } catch {
      error.value = ERROR_LOAD;
      todos.value = [];
    } finally {
      loading.value = false;
    }
  };

  const add = async (title: string) => {
    if (creating.value) return;
    const trimmed = title.trim();
    if (trimmed.length === 0) return;
    creating.value = true;
    error.value = null;
    try {
      const result = await sdk.connectors.execute({
        permalink: CONNECTOR_CREATE,
        method: "POST",
        payload: { title: trimmed },
      });
      const inserted = Array.isArray(result) ? result[0] : result;
      if (isTodo(inserted)) {
        todos.value = [inserted, ...todos.value].slice(0, pageSize.value);
      } else {
        await refresh();
      }
    } catch {
      error.value = ERROR_CREATE;
    } finally {
      creating.value = false;
    }
  };

  const remove = async (id: string) => {
    if (deletingId.value !== null) return;
    deletingId.value = id;
    error.value = null;
    try {
      await sdk.connectors.execute({
        permalink: CONNECTOR_DELETE,
        method: "DELETE",
        queryParams: { id: `eq.${id}` },
      });
      todos.value = todos.value.filter((todo) => todo.id !== id);
    } catch {
      error.value = ERROR_DELETE;
    } finally {
      deletingId.value = null;
    }
  };

  return { todos, loading, creating, deletingId, error, refresh, add, remove };
};

export const useWidgetProps = (sdk: WidgetSDK): Ref<WidgetProps> => {
  const props = ref<WidgetProps>(sdk.getProps());
  const unsubscribe = sdk.on("propsChanged", (next) => {
    props.value = next;
  });
  onUnmounted(unsubscribe);
  return props;
};
