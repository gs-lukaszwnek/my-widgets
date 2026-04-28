import type { Idea } from "../types";
import { stripHtml } from "../hooks";

interface IdeaCardProps {
  idea: Idea;
  hasVoted: boolean;
  isVoting: boolean;
  canVote: boolean;
  onVote: (ideaId: string) => void;
}

const pickIdeaIdForPath = (idea: Idea): string => idea.reference_num ?? idea.id;

const getDescriptionText = (idea: Idea): string => {
  const desc = idea.description;
  if (!desc) return "";
  if (typeof desc === "string") return stripHtml(desc);
  if (typeof desc.body === "string") return stripHtml(desc.body);
  return "";
};

export const IdeaCard = ({ idea, hasVoted, isVoting, canVote, onVote }: IdeaCardProps) => {
  const description = getDescriptionText(idea);
  const voteCount = idea.endorsement_count ?? idea.score ?? 0;
  const buttonDisabled = !canVote || isVoting || hasVoted;
  const buttonLabel = hasVoted ? "Voted ✓" : isVoting ? "Voting…" : "Vote";

  return (
    <article className="aha-card" aria-labelledby={`idea-title-${idea.id}`}>
      <div className="aha-card__main">
        <h2 className="aha-card__title" id={`idea-title-${idea.id}`}>
          {idea.name}
        </h2>
        {idea.reference_num && (
          <p className="aha-card__reference">{idea.reference_num}</p>
        )}
        {description && <p className="aha-card__description">{description}</p>}
      </div>
      <div className="aha-card__actions">
        <span className="aha-card__count" aria-label={`${voteCount} votes`}>
          {voteCount}
        </span>
        <button
          type="button"
          className={`aha-button aha-button--vote${hasVoted ? " aha-button--voted" : ""}`}
          onClick={() => onVote(pickIdeaIdForPath(idea))}
          disabled={buttonDisabled}
          aria-pressed={hasVoted}
        >
          {buttonLabel}
        </button>
      </div>
    </article>
  );
};
