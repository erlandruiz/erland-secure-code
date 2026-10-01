import {
  useContext,
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { createOrder } from "../firebase/orders.service";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [ticket, setTicket] = useState(() => {
    const savedTicket = localStorage.getItem(
      "erland-securecode-ticket"
    );

    return savedTicket
      ? JSON.parse(savedTicket)
      : null;
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const total = cart.reduce(
    (accumulator, item) =>
      accumulator + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (ticket) {
      localStorage.setItem(
        "erland-securecode-ticket",
        JSON.stringify(ticket)
      );
    }
  }, [ticket]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      return;
    }

    try {
      setSaving(true);
      setError("");

      // Número visible para el cliente
      const ticketNumber = `ESC-${Date.now()
        .toString()
        .slice(-6)}`;

      // Guardamos la compra en Firestore
      const firestoreOrderId = await createOrder({
        ticketNumber,
        name,
        email,
        products: cart,
        total,
      });

      // Ticket que mostraremos en pantalla
      const newTicket = {
        number: ticketNumber,
        firestoreOrderId,
        name,
        email,
        products: cart,
        total,
        date: new Date().toLocaleString("es-PE"),
      };

      setTicket(newTicket);

      // Solo vaciamos el carrito si Firestore guardó
      // correctamente la compra
      clearCart();
    } catch (error) {
      console.error(
        "Error al guardar la compra:",
        error
      );

      setError(
        "No se pudo registrar la compra. Inténtalo nuevamente."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleNewPurchase = () => {
    setTicket(null);
    setName("");
    setEmail("");
    setError("");

    localStorage.removeItem(
      "erland-securecode-ticket"
    );
  };

  if (ticket) {
    return (
      <section className="min-h-screen bg-brand-bg px-6 py-16 text-brand-text">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-xl bg-brand-surface p-6 sm:p-8">
            <p className="font-mono text-sm font-medium text-brand-secondary">
              COMPRA REGISTRADA
            </p>

            <h1 className="mt-2 font-display text-3xl font-extrabold">
              Ticket {ticket.number}
            </h1>

            <div className="mt-6 space-y-2 font-sans text-brand-muted">
              <p>
                <span className="font-bold text-brand-text">
                  Cliente:
                </span>{" "}
                {ticket.name}
              </p>

              <p>
                <span className="font-bold text-brand-text">
                  Correo:
                </span>{" "}
                {ticket.email}
              </p>

              <p>
                <span className="font-bold text-brand-text">
                  Fecha:
                </span>{" "}
                {ticket.date}
              </p>
            </div>

            <div className="mt-8 border-t border-brand-muted/20 pt-6">
              <h2 className="font-display text-xl font-bold">
                Productos
              </h2>

              <div className="mt-4 space-y-4">
                {ticket.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex justify-between gap-4"
                  >
                    <div>
                      <p className="font-sans font-bold">
                        {product.name}
                      </p>

                      <p className="font-sans text-sm text-brand-muted">
                        Cantidad: {product.quantity}
                      </p>
                    </div>

                    <p className="font-sans font-bold text-brand-primary">
                      S/{" "}
                      {(
                        product.price *
                        product.quantity
                      ).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-brand-muted/20 pt-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-xl font-bold">
                  Total
                </span>

                <span className="font-display text-2xl font-extrabold text-brand-primary">
                  S/ {ticket.total.toFixed(2)}
                </span>
              </div>
            </div>

            <p className="mt-8 rounded-lg bg-brand-bg p-4 font-sans text-sm font-medium text-brand-muted">
              Se ha simulado el envío de la confirmación
              de compra al correo {ticket.email}.
            </p>

            <Link
              to="/productos"
              onClick={handleNewPurchase}
              className="mt-8 inline-block w-full rounded-lg bg-brand-primary px-6 py-3 text-center font-sans font-bold text-brand-bg transition hover:opacity-90 sm:w-auto"
            >
              Nueva compra
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-brand-bg px-6 py-16 text-brand-text">
      <div className="mx-auto max-w-2xl">

        <p className="font-mono text-sm font-medium text-brand-secondary">
          CHECKOUT
        </p>

        <h1 className="mt-2 font-display text-3xl font-extrabold">
          Finalizar compra
        </h1>

        <p className="mt-3 font-sans font-medium text-brand-muted">
          Ingresa tus datos para generar el ticket de
          compra.
        </p>

        {cart.length === 0 && (
          <p className="mt-6 rounded-lg bg-brand-surface p-4 font-sans font-semibold text-brand-muted">
            Tu carrito está vacío.
          </p>
        )}

        {error && (
          <p className="mt-6 rounded-lg bg-red-500/10 p-4 font-sans font-semibold text-red-400">
            {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-xl bg-brand-surface p-6 sm:p-8"
        >
          <div>
            <label
              htmlFor="name"
              className="font-sans font-bold"
            >
              Nombre
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              required
              className="mt-2 w-full rounded-lg border border-brand-muted/30 bg-brand-bg px-4 py-3 font-sans text-brand-text outline-none transition focus:border-brand-primary"
            />
          </div>

          <div className="mt-6">
            <label
              htmlFor="email"
              className="font-sans font-bold"
            >
              Correo electrónico
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
              className="mt-2 w-full rounded-lg border border-brand-muted/30 bg-brand-bg px-4 py-3 font-sans text-brand-text outline-none transition focus:border-brand-primary"
            />
          </div>

          <div className="mt-8 border-t border-brand-muted/20 pt-6">
            <div className="flex items-center justify-between">
              <span className="font-display text-xl font-bold">
                Total
              </span>

              <span className="font-display text-2xl font-extrabold text-brand-primary">
                S/ {total.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={
              cart.length === 0 || saving
            }
            className="mt-8 w-full rounded-lg bg-brand-primary px-6 py-3 font-sans font-bold text-brand-bg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving
              ? "Registrando compra..."
              : "Generar ticket"}
          </button>
        </form>

      </div>
    </section>
  );
}

export default Checkout;