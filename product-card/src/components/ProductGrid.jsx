import ProductCard from "./ProductCard";

function ProductGrid({ products, cart, handleToggleCart, updateQuantity }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map((product) => {
        const cartItem = cart.find((item) => item.id === product.id);

        return (
          <ProductCard
            key={product.id}
            product={product}
            cartItem={cartItem}
            handleToggleCart={handleToggleCart}
            updateQuantity={updateQuantity}
          />
        );
      })}
    </div>
  );
}

export default ProductGrid;
