import type { Pokemon } from "../types";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const imageUrl =
    pokemon.sprites?.other?.["official-artwork"]?.front_default ||
    pokemon.sprites?.front_default;

  return (
    <div className="pokemon-card">
      <span className="pokemon-id">#{String(pokemon.id).padStart(3, "0")}</span>
      <div className="pokemon-image-container">
        {imageUrl && (
          <img src={imageUrl} alt={pokemon.name} className="pokemon-image" />
        )}
      </div>
      <h3 className="pokemon-name">{pokemon.name}</h3>
      <div className="pokemon-types">
        {pokemon.types?.map((t) => (
          <span key={t.type.name} className={`type-badge type-${t.type.name}`}>
            {t.type.name}
          </span>
        ))}
      </div>
      <div className="pokemon-stats">
        <div className="stat">
          <div className="stat-value">
            {pokemon.stats?.[0]?.base_stat || "—"}
          </div>
          <div className="stat-label">HP</div>
        </div>
        <div className="stat">
          <div className="stat-value">
            {pokemon.stats?.[1]?.base_stat || "—"}
          </div>
          <div className="stat-label">Attack</div>
        </div>
        <div className="stat">
          <div className="stat-value">
            {pokemon.stats?.[2]?.base_stat || "—"}
          </div>
          <div className="stat-label">Defense</div>
        </div>
      </div>
    </div>
  );
}
