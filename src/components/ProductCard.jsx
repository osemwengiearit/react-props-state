function ProductCard({ product, cartItem, handleToggleCart, updateQuantity }) {
  const inCart = !!cartItem;

  const cardStyle = {
    border: `2px solid ${inCart ? "#e11d48" : "#E5E7EB"}`,
    padding: "16px",
    borderRadius: "8px",
    textAlign: "center",
  };

  const buttonStyle = {
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: inCart ? "#e11d48" : "#2563eb",
    color: "white",
    cursor: "pointer",
  };

  const qtyButtonStyle = {
    padding: "5px 10px",
    margin: "0 5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    cursor: "pointer",
  };

  return (
    <div style={cardStyle}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />

      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>

      <button style={buttonStyle} onClick={() => handleToggleCart(product)}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>

      {inCart && (
        <div style={{ marginTop: "10px" }}>
          <button
            style={qtyButtonStyle}
            onClick={() => updateQuantity(product.id, -1)}
          >
            -
          </button>

          <span style={{ margin: "0 10px" }}>{cartItem.qty}</span>

          <button
            style={qtyButtonStyle}
            onClick={() => updateQuantity(product.id, 1)}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
