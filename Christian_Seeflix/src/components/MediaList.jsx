import "./mediaList.css";
import MediaCard from "./MediaCard";

function MediaList({ title, items }) {
  return (
    <section className="media-list">
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