function ProductCard({ product, cartItem, handleToggleCart, updateQuantity }) {
  const inCart = !!cartItem;

  const cardStyle = {
    border: `2px solid ${inCart ? "#e11d48" : "#E5E7EB"}`,
    padding: "16px",
    borderRadius: "8px",
    textAlign: "center",
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

      <button onClick={() => handleToggleCart(product)}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>

      {inCart && (
        <div style={{ marginTop: "10px" }}>
          <button onClick={() => updateQuantity(product.id, -1)}>-</button>
          <span style={{ margin: "0 10px" }}>{cartItem.qty}</span>
          <button onClick={() => updateQuantity(product.id, 1)}>+</button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
