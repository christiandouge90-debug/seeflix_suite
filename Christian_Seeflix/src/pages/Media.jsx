import { useEffect, useState } from "react";
import MediaList from "../components/MediaList";
import { fetchTrendingMovies, fetchPopularTV } from "../lib/tmdb";

function Media() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <main style={{ padding: 20 }}>
      <h1>All Media</h1>
      {loading ? (
        <p>Chargement…</p>
      ) : error ? (
        <p style={{ color: "#a00" }}>{error}</p>
      ) : (
        <MediaList title="All Titles" items={items} />
      )}
    </main>
  );
}

export default Media;
