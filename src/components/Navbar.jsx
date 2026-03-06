function Navbar({ cartCount }) {
  return (
    <>
      <header
        style={{
          padding: "20px",
          backgroundColor: "#111827",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>Product Catalog</h2>
        <span>Cart ({cartCount})</span>
      </header>
    </>
  );
}

export default Navbar;
