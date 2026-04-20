<script setup lang="ts">
import { ref, onUnmounted } from "vue";
import type { WidgetSDK, WidgetProps, ConnectorsSDK } from "./types";
import { useTodos } from "./hooks";
import {
  SPECTRUM_SYSTEM,
  SPECTRUM_COLOR,
  SPECTRUM_SCALE,
  MAX_TITLE_LENGTH,
} from "./constants";

const { sdk, connectors } = defineProps<{
  sdk: WidgetSDK;
  connectors: ConnectorsSDK;
}>();

const props = ref<WidgetProps>(sdk.getProps());
const unsubscribe = sdk.on("propsChanged", (next) => (props.value = next));
onUnmounted(unsubscribe);

const { todos, loading, saving, error, add, remove } = useTodos(connectors);

const draft = ref("");

const onInput = (event: Event) => {
  const target = event.target;
  if (!target || typeof target !== "object" || !("value" in target)) return;
  const next = target.value;
  draft.value = typeof next === "string" ? next : "";
};

const onSubmit = async () => {
  if (!draft.value.trim() || saving.value) return;
  await add(draft.value);
  draft.value = "";
};

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    event.preventDefault();
    onSubmit();
  }
};
</script>

<template>
  <sp-theme :system="SPECTRUM_SYSTEM" :color="SPECTRUM_COLOR" :scale="SPECTRUM_SCALE" class="todo-theme">
    <section class="todo-card" role="region" :aria-label="props.title">
      <header class="todo-header">
        <h2 class="todo-title">{{ props.title }}</h2>
        <p class="todo-meta">
          {{ todos.length }} {{ todos.length === 1 ? "item" : "items" }}
        </p>
      </header>

      <form class="todo-form" @submit.prevent="onSubmit">
        <sp-field-label for="todo-input" size="m">New todo</sp-field-label>
        <div class="todo-form-row">
          <sp-textfield
            id="todo-input"
            class="todo-input"
            placeholder="What needs doing?"
            :value="draft"
            :maxlength="MAX_TITLE_LENGTH"
            :disabled="saving"
            @input="onInput"
            @keydown="onKeydown"
          ></sp-textfield>
          <sp-button
            variant="accent"
            type="submit"
            :disabled="saving || !draft.trim()"
          >
            {{ saving ? "Adding…" : "Add" }}
          </sp-button>
        </div>
      </form>

      <sp-toast v-if="error" open variant="negative" class="todo-toast">
        {{ error }}
      </sp-toast>

      <div v-if="loading && todos.length === 0" class="todo-status" role="status">
        <sp-progress-circle indeterminate size="m" label="Loading todos"></sp-progress-circle>
      </div>

      <ul v-else-if="todos.length > 0" class="todo-list">
        <li v-for="todo in todos" :key="todo.id" class="todo-item">
          <span class="todo-item-text">{{ todo.title }}</span>
          <sp-action-button
            quiet
            :aria-label="`Delete ${todo.title}`"
            @click="remove(todo.id)"
          >
            <sp-icon-delete slot="icon"></sp-icon-delete>
          </sp-action-button>
        </li>
      </ul>

      <p v-else class="todo-empty">No todos yet. Add your first one above.</p>
    </section>
  </sp-theme>
</template>
