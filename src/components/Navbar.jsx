import { useState } from "react";

import { Link } from "react-router-dom";
import erlandsecurecodelogo from "../assets/erland-securecode-logo.png";

import CartWidget from "./CartWidget";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-brand-surface bg-brand-bg">
      <div className="mx-auto max-w-7xl px-6">
        {/* Barra principal */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img
              src={erlandsecurecodelogo}
              alt="Erland SecureCode"
              className="h-12 w-auto"
            />
          </Link>

          {/* Menú desktop */}
          <ul className="hidden items-center gap-8 font-sans text-sm font-semibold text-brand-muted md:flex">
            <li>
              <Link className="transition hover:text-brand-primary" to="/">
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
              <CartWidget />
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

            <li onClick={() => setMenuOpen(false)} className="py-2">
              <CartWidget />
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
