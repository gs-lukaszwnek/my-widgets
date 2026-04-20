<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import type { WidgetSDK } from "./types";
import { useTodos, useWidgetProps } from "./hooks";
import {
  LABEL_ADD,
  LABEL_ADDING,
  LABEL_DELETE,
  LABEL_LOADING,
  LABEL_NEW_TODO_PLACEHOLDER,
  LABEL_REFRESH,
  MAX_TITLE_LENGTH,
} from "./constants";

import "https://esm.sh/@spectrum-web-components/theme/sp-theme.js";
import "https://esm.sh/@spectrum-web-components/theme/src/themes.js";
import "https://esm.sh/@spectrum-web-components/theme/src/express/themes.js";
import "https://esm.sh/@spectrum-web-components/button/sp-button.js";
import "https://esm.sh/@spectrum-web-components/action-button/sp-action-button.js";
import "https://esm.sh/@spectrum-web-components/textfield/sp-textfield.js";
import "https://esm.sh/@spectrum-web-components/progress-circle/sp-progress-circle.js";
import "https://esm.sh/@spectrum-web-components/icon/sp-icon.js";
import "https://esm.sh/@spectrum-web-components/icons-workflow/icons/sp-icon-delete.js";
import "https://esm.sh/@spectrum-web-components/icons-workflow/icons/sp-icon-refresh.js";

const { sdk } = defineProps<{ sdk: WidgetSDK }>();

const props = useWidgetProps(sdk);
const pageSize = computed(() => Number(props.value.pageSize) || 20);
const { todos, loading, creating, deletingId, error, refresh, add, remove } = useTodos(sdk, pageSize);

const draft = ref("");

const onSubmit = async (event: Event) => {
  event.preventDefault();
  const value = draft.value;
  if (value.trim().length === 0) return;
  await add(value);
  draft.value = "";
};

const onInput = (event: Event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  if (!("value" in target)) return;
  const next = target.value;
  if (typeof next !== "string") return;
  draft.value = next.slice(0, MAX_TITLE_LENGTH);
};

const formatDate = (iso: string) => {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString();
};

onMounted(() => refresh());
</script>

<template>
  <sp-theme
    :color="props.theme"
    scale="medium"
    system="spectrum-two"
    class="todo-widget"
  >
    <header class="todo-widget__header">
      <h2 class="todo-widget__title">{{ props.heading }}</h2>
      <sp-action-button
        quiet
        :disabled="loading"
        :aria-label="LABEL_REFRESH"
        @click="refresh"
      >
        <sp-icon-refresh slot="icon"></sp-icon-refresh>
      </sp-action-button>
    </header>

    <form class="todo-widget__form" @submit="onSubmit">
      <sp-textfield
        class="todo-widget__input"
        :placeholder="LABEL_NEW_TODO_PLACEHOLDER"
        :value="draft"
        :maxlength="MAX_TITLE_LENGTH"
        :disabled="creating"
        @input="onInput"
      ></sp-textfield>
      <sp-button
        variant="accent"
        type="submit"
        :disabled="creating || draft.trim().length === 0"
      >
        {{ creating ? LABEL_ADDING : LABEL_ADD }}
      </sp-button>
    </form>

    <p v-if="error" class="todo-widget__error" role="alert">{{ error }}</p>

    <div v-if="loading && todos.length === 0" class="todo-widget__state">
      <sp-progress-circle indeterminate size="m" :label="LABEL_LOADING"></sp-progress-circle>
      <span class="todo-widget__state-text">{{ LABEL_LOADING }}</span>
    </div>

    <p
      v-else-if="!loading && todos.length === 0 && !error"
      class="todo-widget__state-text"
    >
      {{ props.emptyStateText }}
    </p>

    <ul v-else class="todo-widget__list">
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="todo-widget__item"
      >
        <div class="todo-widget__item-body">
          <span class="todo-widget__item-title">{{ todo.title }}</span>
          <time class="todo-widget__item-meta" :datetime="todo.created_at">
            {{ formatDate(todo.created_at) }}
          </time>
        </div>
        <sp-action-button
          quiet
          :aria-label="`${LABEL_DELETE} ${todo.title}`"
          :disabled="deletingId === todo.id"
          @click="remove(todo.id)"
        >
          <sp-icon-delete slot="icon"></sp-icon-delete>
        </sp-action-button>
      </li>
    </ul>
  </sp-theme>
</template>

<style scoped>
.todo-widget {
  display: block;
  padding: 1.25rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06);
  background: var(--spectrum-gray-50, #ffffff);
  color: var(--spectrum-gray-900, #141414);
  font-family: var(--spectrum-sans-font-family-stack, "Inter", system-ui, -apple-system, sans-serif);
}

.todo-widget__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.todo-widget__title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.015em;
}

.todo-widget__form {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 0.75rem;
}

.todo-widget__input {
  flex: 1 1 auto;
  min-width: 0;
}

.todo-widget__error {
  margin: 0 0 0.75rem;
  color: var(--spectrum-negative-color-900, #b60000);
  font-size: 0.875rem;
}

.todo-widget__state {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 0;
}

.todo-widget__state-text {
  color: var(--spectrum-gray-700, #505050);
  font-size: 0.9375rem;
}

.todo-widget__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.todo-widget__item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0.75rem;
  border-radius: 8px;
  transition: background-color 120ms ease-out;
}

.todo-widget__item:hover {
  background: var(--spectrum-gray-100, #f5f5f5);
}

.todo-widget__item-body {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.todo-widget__item-title {
  font-size: 0.9375rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.todo-widget__item-meta {
  font-size: 0.75rem;
  color: var(--spectrum-gray-600, #6e6e6e);
}
</style>
