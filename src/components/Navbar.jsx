import { useContext, useState } from "react";

import { Link } from "react-router-dom";
import erlandsecurecodelogo from "../assets/erland-securecode-logo.png";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  const [menuOpen , setMenuOpen] = useState(false)

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
 return (
    <nav className="w-full border-b border-brand-surface bg-brand-bg">
      <div className="mx-auto max-w-7xl px-6">

        {/* Barra principal */}
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={erlandsecurecodelogo}
              alt="Erland SecureCode"
              className="h-12 w-auto"
            />
          </Link>

          {/* Menú desktop */}
          <ul className="hidden items-center gap-8 font-sans text-sm font-semibold text-brand-muted md:flex">
            <li>
              <Link
                className="transition hover:text-brand-primary"
                to="/"
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                className="transition hover:text-brand-primary"
                to="/productos"
              >
                Productos
              </Link>
            </li>

            <li>
              <Link
                className="transition hover:text-brand-primary"
                to="/categorias"
              >
                Categorías
              </Link>
            </li>

            <li>
              <Link
                className="transition hover:text-brand-primary"
                to="/carrito"
              >
                Carrito ({totalItems})
              </Link>
            </li>
          </ul>

          {/* Botón hamburguesa */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="font-sans text-2xl font-bold text-brand-text md:hidden"
            aria-label="Abrir menú"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Menú celular */}
        {menuOpen && (
          <ul className="border-t border-brand-surface pb-5 pt-4 font-sans font-semibold text-brand-muted md:hidden">
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="block py-2 transition hover:text-brand-primary"
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                to="/productos"
                onClick={() => setMenuOpen(false)}
                className="block py-2 transition hover:text-brand-primary"
              >
                Productos
              </Link>
            </li>

            <li>
              <Link
                to="/categorias"
                onClick={() => setMenuOpen(false)}
                className="block py-2 transition hover:text-brand-primary"
              >
                Categorías
              </Link>
            </li>

            <li>
              <Link
                to="/carrito"
                onClick={() => setMenuOpen(false)}
                className="block py-2 transition hover:text-brand-primary"
              >
                Carrito ({totalItems})
              </Link>
            </li>
          </ul>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
