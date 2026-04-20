<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import type { WidgetProps, WidgetSDK } from "./types";
import { useTodos } from "./composables/useTodos";

const { sdk } = defineProps<{ sdk: WidgetSDK }>();

const props = ref<WidgetProps>(sdk.getProps());
const unsubscribe = sdk.on("propsChanged", (next: WidgetProps) => (props.value = next));
onUnmounted(unsubscribe);

const { todos, isLoading, isBusy, error, refresh, add, remove, toggle, dismissError } = useTodos(sdk);

const draft = ref("");
const composing = ref(false);

const remaining = computed(() => todos.value.filter((todo) => !todo.completed).length);
const totalLabel = computed(() =>
  todos.value.length === 0
    ? "Nothing here yet"
    : `${remaining.value} of ${todos.value.length} remaining`
);
const spectrumColor = computed<"light" | "dark">(() => (props.value.theme === "dark" ? "dark" : "light"));
const placeholder = computed(() => props.value.placeholder ?? "What needs doing?");
const title = computed(() => props.value.title ?? "My Todos");

const readString = (value: unknown): string => (typeof value === "string" ? value : "");

const readEventValue = (event: Event): string => {
  const target = event.target;
  if (target !== null && typeof target === "object" && "value" in target) {
    return readString((target as { value: unknown }).value);
  }
  return "";
};

const onDraftInput = (event: Event) => (draft.value = readEventValue(event));

const submit = async () => {
  if (composing.value) return;
  composing.value = true;
  try {
    const ok = await add(draft.value);
    if (ok) draft.value = "";
  } finally {
    composing.value = false;
  }
};

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    submit();
  }
};

onMounted(refresh);
</script>

<template>
  <sp-theme :color="spectrumColor" scale="medium" system="spectrum" class="todo-widget" :data-theme="spectrumColor">
    <header class="todo-header">
      <div>
        <h2 class="todo-title">{{ title }}</h2>
        <p class="todo-meta">{{ totalLabel }}</p>
      </div>
      <sp-action-button quiet :disabled="isLoading" aria-label="Refresh" @click="refresh">
        ↻
      </sp-action-button>
    </header>

    <form class="todo-compose" @submit.prevent="submit">
      <sp-textfield
        class="todo-input"
        :value="draft"
        :placeholder="placeholder"
        :disabled="isBusy"
        @input="onDraftInput"
        @keydown="onKeydown"
      />
      <sp-button variant="accent" :disabled="isBusy || !draft.trim()" @click="submit">
        Add
      </sp-button>
    </form>

    <div v-if="error" class="todo-alert" role="alert">
      <span>{{ error }}</span>
      <sp-action-button quiet size="s" aria-label="Dismiss" @click="dismissError">✕</sp-action-button>
    </div>

    <ul v-if="isLoading && !todos.length" class="todo-list todo-list--skeleton">
      <li v-for="n in 3" :key="n" class="todo-row todo-row--skeleton" />
    </ul>
    <p v-else-if="!todos.length" class="todo-empty">No todos yet. Capture your first task above.</p>
    <ul v-else class="todo-list">
      <li v-for="todo in todos" :key="todo.id" class="todo-row" :class="{ 'todo-row--done': todo.completed }">
        <sp-checkbox
          :checked="todo.completed"
          :disabled="isBusy"
          @change="toggle(todo.id, !todo.completed)"
        />
        <span class="todo-row-title">{{ todo.title }}</span>
        <sp-action-button quiet aria-label="Delete todo" :disabled="isBusy" @click="remove(todo.id)">
          ✕
        </sp-action-button>
      </li>
    </ul>
  </sp-theme>
</template>

<style>
.todo-widget {
  display: block;
  font-family: "adobe-clean", "Source Sans Pro", system-ui, -apple-system, sans-serif;
  padding: 24px;
  border-radius: 16px;
  background: var(--spectrum-gray-50, #fafafa);
  color: var(--spectrum-gray-900, #1e1e1e);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  min-height: 320px;
}

.todo-widget[data-theme="dark"] {
  background: var(--spectrum-gray-75, #1d1d1d);
  color: var(--spectrum-gray-900, #f5f5f5);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2), 0 8px 24px rgba(0, 0, 0, 0.4);
}

.todo-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
}

.todo-title {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.todo-meta {
  margin: 4px 0 0;
  font-size: 13px;
  color: var(--spectrum-gray-600, #6c6c6c);
}

.todo-compose {
  display: flex;
  gap: 8px;
  align-items: stretch;
  margin-bottom: 16px;
}

.todo-input {
  flex: 1 1 auto;
  min-width: 0;
}

.todo-alert {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 14px;
  margin-bottom: 14px;
  border-radius: 10px;
  background: var(--spectrum-negative-background-color-default, #ffe7e7);
  color: var(--spectrum-negative-content-color-default, #b40000);
  font-size: 13px;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.todo-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 12px;
  background: var(--spectrum-gray-100, #ffffff);
  border: 1px solid var(--spectrum-gray-200, #eaeaea);
  transition: background-color 150ms ease, transform 150ms ease;
}

.todo-widget[data-theme="dark"] .todo-row {
  background: var(--spectrum-gray-100, #2a2a2a);
  border-color: var(--spectrum-gray-200, #3a3a3a);
}

.todo-row:hover {
  transform: translateY(-1px);
}

.todo-row-title {
  font-size: 14px;
  line-height: 1.4;
  word-break: break-word;
}

.todo-row--done .todo-row-title {
  text-decoration: line-through;
  color: var(--spectrum-gray-500, #8c8c8c);
}

.todo-row--skeleton {
  height: 44px;
  background: linear-gradient(90deg, var(--spectrum-gray-100, #f0f0f0) 0%, var(--spectrum-gray-200, #e5e5e5) 50%, var(--spectrum-gray-100, #f0f0f0) 100%);
  background-size: 200% 100%;
  animation: todo-shimmer 1.4s infinite;
  border: none;
}

@keyframes todo-shimmer {
  0% { background-position: 100% 0; }
  100% { background-position: -100% 0; }
}

.todo-empty {
  margin: 24px 0;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  font-size: 14px;
  color: var(--spectrum-gray-600, #6c6c6c);
  background: var(--spectrum-gray-100, #f7f7f7);
  border: 1px dashed var(--spectrum-gray-300, #d5d5d5);
}
</style>
