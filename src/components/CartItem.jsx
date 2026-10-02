function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  const subtotal =
    item.price * item.quantity;

  return (
    <article className="rounded-xl bg-brand-surface p-5 sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

        {/* Imagen */}
        <div className="flex h-28 w-full items-center justify-center rounded-lg bg-brand-bg p-3 sm:w-32">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Información */}
        <div className="flex-1">
          <p className="font-mono text-xs font-medium text-brand-secondary">
            {item.category}
          </p>

          <h2 className="mt-1 font-display text-xl font-bold text-brand-text">
            {item.name}
          </h2>

          <p className="mt-2 font-sans text-sm font-medium text-brand-muted">
            Precio unitario: S/ {item.price.toFixed(2)}
          </p>

          <p className="mt-1 font-sans text-sm font-medium text-brand-muted">
            Stock disponible: {item.stock}
          </p>

          {/* Cantidad */}
          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={() =>
                decreaseQuantity(item.id)
              }
              className="h-9 w-9 rounded-lg bg-brand-bg font-sans font-bold text-brand-text transition hover:text-brand-primary"
            >
              -
            </button>

            <span className="min-w-8 text-center font-display font-bold">
              {item.quantity}
            </span>

            <button
              type="button"
              onClick={() =>
                increaseQuantity(item.id)
              }
              disabled={
                item.quantity >= item.stock
              }
              className="h-9 w-9 rounded-lg bg-brand-bg font-sans font-bold text-brand-text transition hover:text-brand-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              +
            </button>

            <button
              type="button"
              onClick={() =>
                removeFromCart(item.id)
              }
              className="ml-2 font-sans text-sm font-bold text-red-400 transition hover:opacity-80"
            >
              Eliminar
            </button>
          </div>
        </div>

        {/* Subtotal */}
        <div className="sm:text-right">
          <p className="font-sans text-sm font-medium text-brand-muted">
            Subtotal
          </p>

          <p className="mt-1 font-display text-xl font-extrabold text-brand-primary">
            S/ {subtotal.toFixed(2)}
          </p>
        </div>

      </div>
    </article>
  );
}

export default CartItem;