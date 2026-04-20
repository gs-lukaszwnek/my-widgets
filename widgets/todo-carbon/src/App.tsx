import { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  InlineNotification,
  Loading,
  Stack,
  TextInput,
  Tile,
} from "@carbon/react";
import { Add, TrashCan } from "@carbon/icons-react";
import type { ConnectorsSDK, Todo, WidgetProps, WidgetSDK } from "./types";
import { DEFAULTS } from "./constants";
import { useTodos } from "./hooks";

interface AppProps {
  sdk: WidgetSDK;
  connectors: ConnectorsSDK;
}

export const App = ({ sdk, connectors }: AppProps) => {
  const [props, setProps] = useState<WidgetProps>(sdk.getProps());
  const [draft, setDraft] = useState("");
  const { todos, loading, error, addTodo, toggleTodo, deleteTodo } = useTodos(connectors);

  useEffect(() => sdk.on("propsChanged", setProps), [sdk]);

  const title = (props.title as string) ?? DEFAULTS.title;
  const placeholder = (props.placeholder as string) ?? DEFAULTS.placeholder;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const value = draft;
    if (!value.trim()) return;
    setDraft("");
    await addTodo(value);
  };

  return (
    <div className="todo-carbon-root">
      <Tile className="todo-carbon-tile">
        <Stack gap={5}>
          <h3 className="todo-carbon-heading">{title}</h3>

          <form className="todo-carbon-form" onSubmit={handleSubmit}>
            <TextInput
              id="todo-carbon-input"
              labelText="New todo"
              hideLabel
              placeholder={placeholder}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
            />
            <Button
              type="submit"
              renderIcon={Add}
              disabled={!draft.trim()}
              iconDescription="Add todo"
            >
              Add
            </Button>
          </form>

          {error && (
            <InlineNotification
              kind="error"
              title="Something went wrong"
              subtitle={error}
              lowContrast
              hideCloseButton
            />
          )}

          {loading ? (
            <div className="todo-carbon-loading">
              <Loading withOverlay={false} small description="Loading todos" />
            </div>
          ) : todos.length === 0 ? (
            <p className="todo-carbon-empty">No todos yet — add one above.</p>
          ) : (
            <ul className="todo-carbon-list">
              {todos.map((todo) => (
                <TodoRow
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
            </ul>
          )}
        </Stack>
      </Tile>
    </div>
  );
};

interface TodoRowProps {
  todo: Todo;
  onToggle: (todo: Todo) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

const TodoRow = ({ todo, onToggle, onDelete }: TodoRowProps) => (
  <li className="todo-carbon-row">
    <Checkbox
      id={`todo-carbon-check-${todo.id}`}
      labelText={todo.title}
      checked={todo.completed}
      onChange={() => onToggle(todo)}
    />
    <Button
      kind="ghost"
      size="sm"
      hasIconOnly
      renderIcon={TrashCan}
      iconDescription="Delete todo"
      tooltipPosition="left"
      onClick={() => onDelete(todo.id)}
    />
  </li>
);
