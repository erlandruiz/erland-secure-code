import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const total = cart.reduce(
    (accumulator, item) =>
      accumulator + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <section className="min-h-screen bg-brand-bg px-6 py-20 text-brand-text">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-mono text-sm font-medium text-brand-secondary">
            CARRITO
          </p>

          <h1 className="mt-2 font-display text-3xl font-extrabold">
            Tu carrito está vacío
          </h1>

          <p className="mt-4 font-sans font-medium text-brand-muted">
            Agrega productos para comenzar tu compra.
          </p>

          <Link
            to="/productos"
            className="mt-8 inline-block rounded-lg bg-brand-primary px-6 py-3 font-sans font-bold text-brand-bg transition hover:opacity-90"
          >
            Ver productos
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-brand-bg px-6 py-16 text-brand-text">
      <div className="mx-auto max-w-5xl">

        <div className="mb-10">
          <p className="font-mono text-sm font-medium text-brand-secondary">
            CARRITO
          </p>

          <h1 className="mt-2 font-display text-3xl font-extrabold">
            Tu compra
          </h1>

          <p className="mt-3 font-sans font-medium text-brand-muted">
            Revisa los productos y cantidades antes de continuar.
          </p>
        </div>

        {/* Productos */}
        <div className="space-y-5">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>

        {/* Resumen */}
        <div className="mt-10 rounded-xl bg-brand-surface p-6">
          <div className="flex items-center justify-between">
            <span className="font-display text-xl font-bold">
              Total
            </span>

            <span className="font-display text-2xl font-extrabold text-brand-primary">
              S/ {total.toFixed(2)}
            </span>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={clearCart}
              className="w-full rounded-lg border border-red-400/40 px-6 py-3 font-sans font-bold text-red-400 transition hover:bg-red-400/10 sm:w-auto"
            >
              Vaciar carrito
            </button>

            <Link
              to="/checkout"
              className="w-full rounded-lg bg-brand-primary px-6 py-3 text-center font-sans font-bold text-brand-bg transition hover:opacity-90 sm:w-auto"
            >
              Finalizar compra
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Cart;