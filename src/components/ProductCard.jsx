import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-brand-surface bg-brand-surface text-brand-text transition hover:-translate-y-1 hover:border-brand-primary/50">

      {/* Imagen del producto */}
      <div className="h-48 overflow-hidden bg-brand-bg p-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Información del producto */}
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs font-medium text-brand-secondary">
          {product.category}
        </p>

        <h3 className="mt-3 font-display text-xl font-extrabold">
          {product.name}
        </h3>

        <p className="mt-2 font-sans text-sm font-semibold text-brand-muted">
          {product.type} • {product.level}
        </p>

        <p className="mt-4 font-sans text-sm font-medium leading-6 text-brand-muted">
          {product.description}
        </p>

        {/* Tecnologías */}
        <div className="mt-4 flex flex-wrap gap-2">
          {product.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-brand-bg px-2 py-1 font-mono text-xs font-medium text-brand-secondary"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Precio y acción */}
        <div className="mt-auto pt-6">
          <span className="font-display text-xl font-extrabold text-brand-primary">
            S/ {product.price.toFixed(2)}
          </span>

          <p className="mt-2 font-sans text-sm font-medium text-brand-muted">
            Stock disponible: {product.stock}
          </p>

          <Link
            to={`/producto/${product.id}`}
            className="mt-4 inline-block w-full rounded-lg bg-brand-primary px-4 py-2 text-center font-sans text-sm font-bold text-brand-bg transition hover:opacity-90 sm:w-auto"
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;