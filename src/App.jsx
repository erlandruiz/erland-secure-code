import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Categories from "./components/Categories";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Página de inicio */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Products />
            </>
          }
        />

        {/* Página de productos */}
        <Route path="/productos" element={<Products />} />

        {/* Página producto unico */}
        <Route path="/producto/:id" element={<ProductDetail />} />

        {/* Página de categorias */}
        <Route path="/categorias" element={<Categories />} />

        {/* Página del carrito */}
        <Route path="/carrito" element={<Cart />} />

        {/* Página del checkout */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
