import { useEffect, useState, useMemo } from "react";
import MediaList from "../components/MediaList";
import { fetchTrendingMovies, fetchPopularTV } from "../lib/tmdb";
import SearchBar from "../components/SearchBar";

function Media() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // debounce the query so we don't re-filter on every keystroke
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query.trim()), 250);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const [movies, shows] = await Promise.all([fetchTrendingMovies(), fetchPopularTV()]);
        if (!mounted) return;
        setItems([...movies, ...shows]);
      } catch (err) {
        console.error(err);
        setError("Impossible de charger les médias.");
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const filtered = useMemo(() => {
    if (!debouncedQuery) return items;
    const q = debouncedQuery.toLowerCase();
    return items.filter((it) => (it.title || "").toLowerCase().includes(q));
  }, [items, debouncedQuery]);

  return (
    <main style={{ padding: 20 }}>
      <h1>All Media</h1>
      <SearchBar value={query} onChange={setQuery} placeholder="Rechercher un film ou une série..." />

      {loading ? (
        <p>Chargement…</p>
      ) : error ? (
        <p style={{ color: "#a00" }}>{error}</p>
      ) : (
        <MediaList title={debouncedQuery ? `Results for "${debouncedQuery}"` : "All Titles"} items={filtered} />
      )}
    </main>
  );
}

export default Media;
