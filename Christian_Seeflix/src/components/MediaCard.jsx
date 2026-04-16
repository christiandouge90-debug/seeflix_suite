import "./MediaCard.css";


function MediaCard({ title, cover, rating, type }) {
  return (
    <div className="media-card">
      <img
        src={cover}
        alt={title}
        onError={(e) => {
          // fallback to a placeholder image when remote image fails
          e.currentTarget.onerror = null;
          e.currentTarget.src = "https://via.placeholder.com/300x450?text=No+Image";
        }}
      />
      <h3>{title}</h3>
      <p>⭐ {rating}</p>
      {type && <p className="media-type">{type === "movie" ? "Movie" : "TV Show"}</p>}
    </div>
  );
}

export default MediaCard;