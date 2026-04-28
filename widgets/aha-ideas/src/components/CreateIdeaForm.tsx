import { useState, useId } from "react";

interface CreateIdeaFormProps {
  email: string;
  submitting: boolean;
  error: string | null;
  onSubmit: (name: string, description: string) => Promise<boolean>;
  onCancel: () => void;
}

export const CreateIdeaForm = ({
  email,
  submitting,
  error,
  onSubmit,
  onCancel,
}: CreateIdeaFormProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const nameId = useId();
  const descriptionId = useId();
  const errorId = useId();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    const ok = await onSubmit(trimmed, description.trim());
    if (ok) {
      setName("");
      setDescription("");
    }
  };

  return (
    <form className="aha-form" onSubmit={handleSubmit} aria-labelledby="aha-form-heading">
      <h2 className="aha-form__heading" id="aha-form-heading">
        Submit a new idea
      </h2>
      <div className="aha-field">
        <label className="aha-field__label" htmlFor={nameId}>
          Idea title
          <span className="aha-field__required" aria-hidden="true"> *</span>
        </label>
        <input
          id={nameId}
          className="aha-field__input"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          maxLength={200}
          aria-required="true"
          autoComplete="off"
        />
      </div>
      <div className="aha-field">
        <label className="aha-field__label" htmlFor={descriptionId}>
          Description
        </label>
        <textarea
          id={descriptionId}
          className="aha-field__input aha-field__input--textarea"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          rows={4}
        />
      </div>
      <p className="aha-form__attribution">
        Submitting as <strong>{email}</strong>
      </p>
      {error && (
        <div className="aha-alert aha-alert--error" role="alert" id={errorId}>
          {error}
        </div>
      )}
      <div className="aha-form__actions">
        <button
          type="submit"
          className="aha-button aha-button--primary"
          disabled={submitting || !name.trim()}
          aria-describedby={error ? errorId : undefined}
        >
          {submitting ? "Submitting…" : "Submit idea"}
        </button>
        <button
          type="button"
          className="aha-button aha-button--secondary"
          onClick={onCancel}
          disabled={submitting}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
