import { useState, FormEvent } from "react";
import { usePokemonFetcher } from "./hooks";
import { PokemonCard } from "./components/PokemonCard";
import { ITEMS_PER_PAGE } from "./constants";

export function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    pokemon,
    loading,
    error,
    offset,
    total,
    setOffset,
    searchPokemon,
    fetchPokemonList,
  } = usePokemonFetcher();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    searchPokemon(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm("");
    setOffset(0);
    fetchPokemonList();
  };

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);
  const currentPage = Math.floor(offset / ITEMS_PER_PAGE) + 1;

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setOffset(offset + ITEMS_PER_PAGE);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setOffset(offset - ITEMS_PER_PAGE);
    }
  };

  return (
    <div className="pokemon-widget">
      <div className="pokemon-app">
        <header className="header">
          <h1>Pokémon Explorer</h1>
          <p>Discover and explore your favorite Pokémon</p>
        </header>

        <form className="search-container" onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="Search by name or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
          {searchTerm && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClear}
            >
              Clear
            </button>
          )}
        </form>

        {loading && (
          <div className="loading">
            <div className="loading-spinner"></div>
            <p className="loading-text">Catching Pokémon...</p>
          </div>
        )}

        {error && <div className="error">⚠️ {error}</div>}

        {!loading && !error && (
          <>
            <div className="pokemon-grid">
              {pokemon.map((p) => (
                <PokemonCard key={p.id} pokemon={p} />
              ))}
            </div>

            {total > ITEMS_PER_PAGE && !searchTerm && (
              <div className="pagination">
                <button
                  className="btn btn-secondary"
                  onClick={goToPrevPage}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span className="page-info">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className="btn btn-secondary"
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
