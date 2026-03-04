function ProductCard({ name, price, category, image, featured }) {
  const cardStyle = {
    border: featured ? "2px solid #F59E0B" : "1px solid #E5E7EB",
    padding: "16px",
    borderRadius: "8px",
    textAlign: "center",
  };

  return (
    <div style={cardStyle}>
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <h3>{name}</h3>
      <p style={{ fontWeight: "bold" }}>${price.toFixed(2)}</p>
      <small>{category}</small>
    </div>
  );
}

export default ProductCard;
