import { Link } from "react-router-dom";

import ItemCount from "./ItemCount";

function ItemDetail({
  product,
  isInCart,
  onAdd,
}) {
  return (
    <section className="min-h-screen bg-brand-bg px-6 py-20 text-brand-text">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12">

        {/* Imagen */}
        <div className="flex items-center justify-center rounded-xl bg-brand-surface p-5 sm:p-8">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-72 w-full object-contain sm:max-h-96"
          />
        </div>

        {/* Información */}
        <div>
          <p className="font-mono text-sm font-medium text-brand-secondary">
            {product.category}
          </p>

          <h1 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
            {product.name}
          </h1>

          <p className="mt-3 font-sans font-semibold text-brand-muted">
            {product.type} • {product.level}
          </p>

          <p className="mt-6 font-sans font-medium leading-7 text-brand-muted">
            {product.description}
          </p>

          {/* Tecnologías */}
          <div className="mt-6 flex flex-wrap gap-2">
            {product.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-brand-surface px-3 py-2 font-mono text-xs font-medium text-brand-secondary"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Precio */}
          <p className="mt-8 font-display text-3xl font-extrabold text-brand-primary">
            S/ {product.price.toFixed(2)}
          </p>

          {/* ItemCount */}
          {!isInCart ? (
            <ItemCount
              stock={product.stock}
              onAdd={onAdd}
            />
          ) : (
            <div className="mt-8">
              <p className="font-sans font-bold text-brand-secondary">
                Producto agregado al carrito.
              </p>

              <Link
                to="/carrito"
                className="mt-4 inline-block rounded-lg bg-brand-primary px-6 py-3 font-sans font-bold text-brand-bg transition hover:opacity-90"
              >
                Ir al carrito
              </Link>
            </div>
          )}

          {/* Volver */}
          <div className="mt-6">
            <Link
              to="/productos"
              className="inline-block font-sans font-bold text-brand-muted transition hover:text-brand-primary"
            >
              Volver a productos
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ItemDetail;