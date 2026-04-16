// Minimal TMDB wrapper for the app.
// Uses Vite env vars: VITE_API_BASE_URL and VITE_API_KEY

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

async function fetchJson(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("TMDB fetch error:", err);
    return null;
  }
}

export async function fetchTrendingMovies() {
  const base = import.meta.env.VITE_API_BASE_URL;
  const key = import.meta.env.VITE_API_KEY;
  if (!base || !key) return [];

  const url = `${base}/trending/movie/week?api_key=${key}`;
  const data = await fetchJson(url);
  if (!data || !data.results) return [];

  return data.results.map((r) => ({
    id: r.id,
    title: r.title || r.original_title,
    cover: r.poster_path ? `${IMAGE_BASE}${r.poster_path}` : `https://picsum.photos/seed/movie${r.id}/300/450`,
    rating: r.vote_average,
    type: "movie",
  }));
}

export async function fetchPopularTV() {
  const base = import.meta.env.VITE_API_BASE_URL;
  const key = import.meta.env.VITE_API_KEY;
  if (!base || !key) return [];

  const url = `${base}/tv/popular?api_key=${key}`;
  const data = await fetchJson(url);
  if (!data || !data.results) return [];

  return data.results.map((r) => ({
    id: r.id,
    title: r.name || r.original_name,
    cover: r.poster_path ? `${IMAGE_BASE}${r.poster_path}` : `https://picsum.photos/seed/tv${r.id}/300/450`,
    rating: r.vote_average,
    type: "tvshow",
  }));
}

export default { fetchTrendingMovies, fetchPopularTV };
