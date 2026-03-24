import MediaList from "../components/MediaList";
import { trendingMovies } from "../data/trending_movies";
import { topTVShows } from "../data/top_shows";

function Media() {
  const allMedia = [...trendingMovies, ...topTVShows];

  return (
    <main>
      <h1>All Media</h1>
      <MediaList title="All Titles" items={allMedia} />
    </main>
  );
}

export default Media;
