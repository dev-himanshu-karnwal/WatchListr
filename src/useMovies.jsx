import { useState, useEffect } from "react";

const KEY = "b22c73d7";

export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      async function handleSearch() {
        callback?.();

        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) throw new Error("Failed to fetch movies data");

          const data = await res.json();

          if (data.Response === "False")
            throw new Error("Invalid search query. Please try something else");

          setMovies(data.Search);
        } catch (err) {
          setMovies([]);
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("Search movie title");
        return;
      }

      handleSearch();

      return () => controller.abort();
    },
    [query]
  );

  return { movies, isLoading, error };
}
