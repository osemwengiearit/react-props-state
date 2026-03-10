import { useState, Fragment } from "react";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import SearchBar from "./components/SearchBar";
import products from "./products";

function App() {
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");

  function handleToggleCart(product) {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  function updateQuantity(id, amount) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + amount) }
          : item,
      ),
    );
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <Fragment>
      <Navbar cartCount={cart.length} />
      <SearchBar query={query} setQuery={setQuery} />
      <ProductGrid
        products={filteredProducts}
        cart={cart}
        handleToggleCart={handleToggleCart}
        updateQuantity={updateQuantity}
      />
    </Fragment>
  );
}

export default App;
