import { Link } from "react-router-dom";

const categories = [
  "Authentication",
  "Access Control",
  "Monitoring",
  "API Security",
  "Security Guides",
  "Web Security",
  "Bundles",
];

function Categories() {
  return (
    <section className="min-h-screen bg-brand-bg px-4 py-16 text-brand-text sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <p className="font-mono text-sm font-medium text-brand-secondary">
            CATEGORÍAS
          </p>

          <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
            Explora por categoría
          </h1>

          <p className="mt-3 max-w-2xl font-sans font-medium text-brand-muted">
            Encuentra recursos digitales según el área de ciberseguridad
            que quieras explorar.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/productos?category=${encodeURIComponent(category)}`}
              className="rounded-xl border border-brand-surface bg-brand-surface p-5 transition hover:-translate-y-1 hover:border-brand-primary/50 sm:p-6"
            >
              <p className="font-display text-lg font-extrabold sm:text-xl">
                {category}
              </p>

              <p className="mt-2 font-sans text-sm font-medium text-brand-muted">
                Ver productos
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;