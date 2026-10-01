import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const total = cart.reduce(
    (accumulator, item) =>
      accumulator + item.price * item.quantity,
    0
  );

  return (
    <section className="min-h-screen bg-brand-bg px-6 py-16 text-brand-text sm:py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <p className="font-mono text-sm font-medium text-brand-secondary">
            TU COMPRA
          </p>

          <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
            Carrito
          </h1>
        </div>

        {cart.length === 0 ? (
          <p className="font-sans font-medium text-brand-muted">
            Tu carrito está vacío.
          </p>
        ) : (
          <div className="space-y-4">

            {cart.map((item) => (
              <article
                key={item.id}
                className="flex flex-col gap-5 rounded-xl bg-brand-surface p-5 sm:flex-row sm:items-center"
              >
                {/* Imagen */}
                <div className="h-40 w-full shrink-0 overflow-hidden rounded-lg bg-brand-bg p-3 sm:h-24 sm:w-24">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Información */}
                <div className="flex-1">
                  <h2 className="font-display text-lg font-extrabold">
                    {item.name}
                  </h2>

                  {/* Cantidad */}
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="h-8 w-8 rounded-md bg-brand-bg font-sans font-bold text-brand-text transition hover:text-brand-primary"
                    >
                      -
                    </button>

                    <span className="font-sans font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="h-8 w-8 rounded-md bg-brand-bg font-sans font-bold text-brand-text transition hover:text-brand-primary"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="font-sans text-sm font-semibold text-brand-muted transition hover:text-red-400"
                    >
                      Eliminar
                    </button>
                  </div>

                  <p className="mt-3 font-sans text-sm font-semibold text-brand-secondary">
                    S/ {item.price.toFixed(2)} c/u
                  </p>
                </div>

                {/* Subtotal */}
                <div className="sm:text-right">
                  <p className="font-sans text-sm font-medium text-brand-muted">
                    Subtotal
                  </p>

                  <p className="mt-1 font-display text-lg font-extrabold text-brand-primary">
                    S/ {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </article>
            ))}

            {/* Total */}
            <div className="mt-8 flex flex-col gap-3 border-t border-brand-surface pt-6 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-display text-2xl font-extrabold">
                Total
              </span>

              <span className="font-display text-2xl font-extrabold text-brand-primary">
                S/ {total.toFixed(2)}
              </span>
            </div>

            {/* Checkout */}
            <div className="mt-8 flex justify-end">
              <Link
                to="/checkout"
                className="w-full rounded-lg bg-brand-primary px-6 py-3 text-center font-sans font-bold text-brand-bg transition hover:opacity-90 sm:w-auto"
              >
                Finalizar compra
              </Link>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

export default Cart;