import { useEffect, useState, useCallback } from "react";
import Hero from "../components/Hero";
import MediaList from "../components/MediaList";
import { fetchTrendingMovies, fetchPopularTV } from "../lib/tmdb";

function Home() {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [m, s] = await Promise.all([fetchTrendingMovies(), fetchPopularTV()]);
      // treat null as error from the client wrapper
      if (!m || !s) throw new Error("Failed to fetch from TMDB");
      setMovies(m);
      setShows(s);
    } catch (err) {
      console.error(err);
      setError(
        "Impossible de charger les données. Vérifiez votre clé API dans .env.local et regardez la console du navigateur."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    if (mounted) load();
    return () => {
      mounted = false;
    };
  }, [load]);

  return (
    <>
      <Hero />

      <main>
        {loading ? (
          <p style={{ padding: 20 }}>Chargement des films et séries…</p>
        ) : error ? (
          <div style={{ padding: 20 }}>
            <p style={{ color: "#a00" }}>{error}</p>
            <button onClick={load}>Réessayer</button>
          </div>
        ) : (
          <>
            <MediaList title="Trending Movies" items={movies} />
            <MediaList title="Top TV Shows" items={shows} />
          </>
        )}
      </main>
    </>
  );
}

export default Home;