import { useState } from "react";

function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(
    stock > 0 ? 1 : 0
  );

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (count >= 1 && count <= stock) {
      onAdd(count);
    }
  };

  if (stock === 0) {
    return (
      <p className="font-sans font-bold text-red-400">
        Producto sin stock
      </p>
    );
  }

  return (
    <div className="mt-8">
      <p className="mb-3 font-sans font-semibold text-brand-muted">
        Stock disponible: {stock}
      </p>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={decrease}
          disabled={count <= 1}
          className="h-10 w-10 rounded-lg bg-brand-surface font-sans text-lg font-bold text-brand-text disabled:cursor-not-allowed disabled:opacity-40"
        >
          -
        </button>

        <span className="min-w-10 text-center font-display text-xl font-bold">
          {count}
        </span>

        <button
          type="button"
          onClick={increase}
          disabled={count >= stock}
          className="h-10 w-10 rounded-lg bg-brand-surface font-sans text-lg font-bold text-brand-text disabled:cursor-not-allowed disabled:opacity-40"
        >
          +
        </button>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        disabled={count < 1 || count > stock}
        className="mt-5 w-full rounded-lg bg-brand-primary px-6 py-3 font-sans font-bold text-brand-bg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;