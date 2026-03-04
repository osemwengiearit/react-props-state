function SearchBar({ query, setQuery }) {
  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
        }}
      />
    </div>
  );
}

export default SearchBar;
