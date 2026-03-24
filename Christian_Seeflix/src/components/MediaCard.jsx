import "./MediaCard.css";


function MediaCard({ title, cover, rating, type }) {
  return (
    <div className="media-card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
      <p>⭐ {rating}</p>
      {type && <p className="media-type">{type === "movie" ? "Movie" : "TV Show"}</p>}
    </div>
  );
}

export default MediaCard;