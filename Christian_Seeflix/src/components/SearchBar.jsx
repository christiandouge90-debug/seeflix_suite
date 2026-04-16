import "./SearchBar.css";

function SearchBar({ value, onChange, placeholder = "Search titles..." }) {
  return (
    <div className="search-bar">
      <input
        type="search"
        aria-label="Search titles"
        className="search-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          className="search-clear"
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;
