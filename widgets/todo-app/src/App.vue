<script setup lang="ts">
import { computed, onUnmounted, ref } from "vue";
import type { ConnectorsSDK, WidgetProps, WidgetSDK } from "./types";
import { useTodos } from "./composables/useTodos";

const { sdk, connectors } = defineProps<{
  sdk: WidgetSDK;
  connectors: ConnectorsSDK;
}>();

const isWidgetProps = (value: unknown): value is WidgetProps =>
  typeof value === "object" && value !== null;

const props = ref<WidgetProps>(sdk.getProps());
const unsubscribe = sdk.on("propsChanged", (next) => {
  if (isWidgetProps(next)) props.value = next;
});
onUnmounted(unsubscribe);

const heading = computed(() => props.value.title ?? "My todos");
const placeholder = computed(
  () => props.value.placeholder ?? "What needs doing?",
);

const draft = ref("");
const {
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
} = useTodos(connectors);

const remaining = computed(
  () => todos.value.filter((todo) => !todo.completed).length,
);

const onSubmit = async (event: Event) => {
  event.preventDefault();
  if (creating.value || draft.value.trim().length === 0) return;
  const text = draft.value;
  draft.value = "";
  await createTodo(text);
};

const onInput = (event: Event) => {
  const target = event.target;
  if (target instanceof HTMLInputElement) draft.value = target.value;
};
</script>

<template>
  <sp-theme system="spectrum-two" color="light" scale="medium" class="todo-root">
    <header class="todo-header">
      <div class="todo-heading">
        <h2 class="todo-title">{{ heading }}</h2>
        <sp-status-light
          v-if="!loading"
          size="s"
          :variant="remaining === 0 ? 'positive' : 'notice'"
        >
          {{ remaining === 0 ? "All clear" : `${remaining} open` }}
        </sp-status-light>
      </div>
      <sp-action-button
        quiet
        size="m"
        :disabled="loading"
        aria-label="Refresh"
        @click="refresh"
      >
        <sp-icon-refresh slot="icon"></sp-icon-refresh>
      </sp-action-button>
    </header>

    <form class="todo-form" @submit="onSubmit">
      <sp-textfield
        class="todo-input"
        :placeholder="placeholder"
        :value="draft"
        :disabled="creating"
        @input="onInput"
      ></sp-textfield>
      <sp-button
        variant="accent"
        type="submit"
        :disabled="creating || draft.trim().length === 0"
      >
        <sp-icon-add slot="icon"></sp-icon-add>
        Add
      </sp-button>
    </form>

    <sp-divider size="s" class="todo-divider"></sp-divider>

    <div v-if="error" class="todo-error" role="alert">
      <sp-status-light size="s" variant="negative">{{ error }}</sp-status-light>
      <sp-action-button quiet size="s" @click="dismissError">
        Dismiss
      </sp-action-button>
    </div>

    <div v-if="loading" class="todo-loading">
      <sp-progress-circle size="m" indeterminate></sp-progress-circle>
      <span class="todo-muted">Loading todos…</span>
    </div>

    <ul v-else-if="todos.length > 0" class="todo-list">
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="todo-item"
        :class="{ 'todo-item--done': todo.completed }"
      >
        <sp-checkbox
          size="m"
          :checked="todo.completed"
          :disabled="pendingIds.has(todo.id)"
          @change="toggleTodo(todo)"
        >
          <span class="todo-label">{{ todo.title }}</span>
        </sp-checkbox>
        <sp-action-button
          quiet
          size="s"
          :disabled="pendingIds.has(todo.id)"
          aria-label="Delete todo"
          @click="deleteTodo(todo)"
        >
          <sp-icon-delete slot="icon"></sp-icon-delete>
        </sp-action-button>
      </li>
    </ul>

    <div v-else class="todo-empty">
      <sp-illustrated-message heading="Nothing here yet">
        <span slot="description">
          Add your first todo above to get started.
        </span>
      </sp-illustrated-message>
    </div>
  </sp-theme>
</template>
