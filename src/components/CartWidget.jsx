import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Link
      to="/carrito"
      aria-label={`Carrito con ${totalItems} productos`}
      className="relative flex items-center gap-2 font-sans font-semibold text-brand-text transition hover:text-brand-primary"
    >
      {/* Ícono del carrito */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H6" />
        <circle cx="10" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </svg>

      <span>Carrito</span>

      {totalItems > 0 && (
        <span className="flex min-h-6 min-w-6 items-center justify-center rounded-full bg-brand-primary px-1.5 text-xs font-bold text-brand-bg">
          {totalItems}
        </span>
      )}
    </Link>
  );
}

export default CartWidget;