import "./mediaList.css";
import MediaCard from "./MediaCard";

function MediaList({ title, items }) {
  // create an id so anchor links like #trending-movies work
  const id = title ? title.replace(/\s+/g, "-").toLowerCase() : undefined;
  return (
    <section id={id} className="media-list">
      <h2>{title}</h2>
      <div className="media-grid">
        {items.map((item) => (
          <MediaCard
            key={item.id}
            title={item.title}
            cover={item.cover}
            rating={item.rating}
            type={item.type}
          />
        ))}
      </div>
    </section>
  );
}

export default MediaList;