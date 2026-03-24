import Hero from "../components/Hero";
import MediaList from "../components/MediaList";
import { trendingMovies } from "../data/trending_movies";
import { topTVShows } from "../data/top_shows";

function Home() {
  return (
    <>
      <Hero />

      <main>
        <MediaList title="Trending Movies" items={trendingMovies} />
        <MediaList title="Top TV Shows" items={topTVShows} />
      </main>
    </>
  );
}

export default Home;