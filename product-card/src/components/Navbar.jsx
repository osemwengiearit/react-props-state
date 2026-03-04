const Navbar = ({ total }) => {
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px 20px",
          backgroundColor: "#111827",
          color: "white",
        }}
      >
        <h2>Product Catalog</h2>
        <p>{total} items</p>
      </header>
    </>
  );
};

export default Navbar;
