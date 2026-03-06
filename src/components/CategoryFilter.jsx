function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  const containerStyle = {
    padding: "20px",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  };

  const getButtonStyle = (category) => ({
    padding: "8px 14px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    backgroundColor: selectedCategory === category ? "#111827" : "#E5E7EB",
    color: selectedCategory === category ? "white" : "black",
  });

  return (
    <div style={containerStyle}>
      {categories.map((category) => (
        <button
          key={category}
          style={getButtonStyle(category)}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
