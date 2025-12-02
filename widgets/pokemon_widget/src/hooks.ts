import { useState, useEffect, useCallback } from "react";
import { POKEMON_API_BASE, ITEMS_PER_PAGE } from "./constants";
import type { Pokemon, PokemonListResponse } from "./types";

export function usePokemonFetcher() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);

  const fetchPokemonList = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const listResponse = await fetch(
        `${POKEMON_API_BASE}/pokemon?limit=${ITEMS_PER_PAGE}&offset=${offset}`
      );
      if (!listResponse.ok) throw new Error("Failed to fetch Pokemon");
      const listData: PokemonListResponse = await listResponse.json();
      setTotal(listData.count);

      const detailedPokemon = await Promise.all(
        listData.results.map(async (p) => {
          const detailResponse = await fetch(p.url);
          return detailResponse.json() as Promise<Pokemon>;
        })
      );
      setPokemon(detailedPokemon);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      setPokemon([]);
    } finally {
      setLoading(false);
    }
  }, [offset]);

  const searchPokemon = useCallback(
    async (term: string) => {
      setOffset(0);
      if (!term) {
        fetchPokemonList();
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const searchTerm = term.toLowerCase().trim();
        const response = await fetch(
          `${POKEMON_API_BASE}/pokemon/${searchTerm}`
        );

        if (response.ok) {
          const data: Pokemon = await response.json();
          setPokemon([data]);
          setTotal(1);
          return;
        }

        const listResponse = await fetch(
          `${POKEMON_API_BASE}/pokemon?limit=1000`
        );
        if (!listResponse.ok) throw new Error("Failed to search Pokemon");
        const listData: PokemonListResponse = await listResponse.json();

        const matches = listData.results.filter((p) =>
          p.name.includes(searchTerm)
        );

        if (matches.length === 0) {
          throw new Error("No Pokemon found");
        }

        const detailedPokemon = await Promise.all(
          matches.slice(0, ITEMS_PER_PAGE).map(async (p) => {
            const detailResponse = await fetch(p.url);
            return detailResponse.json() as Promise<Pokemon>;
          })
        );
        setPokemon(detailedPokemon);
        setTotal(matches.length);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        setPokemon([]);
      } finally {
        setLoading(false);
      }
    },
    [fetchPokemonList]
  );

  useEffect(() => {
    fetchPokemonList();
  }, [fetchPokemonList]);

  return {
    pokemon,
    loading,
    error,
    offset,
    total,
    setOffset,
    searchPokemon,
    fetchPokemonList,
  };
}
