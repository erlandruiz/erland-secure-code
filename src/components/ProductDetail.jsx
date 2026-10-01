import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { getProductById } from "../firebase/products.service";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const productFromFirebase = await getProductById(id);

        if (!productFromFirebase) {
          setError("Producto no encontrado.");
          return;
        }

        setProduct(productFromFirebase);
      } catch (error) {
        console.error("Error al cargar producto:", error);

        setError("No se pudo cargar el producto.");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <section className="min-h-screen bg-brand-bg px-6 py-20 text-brand-text">
        <div className="mx-auto max-w-7xl">
          <p className="font-sans font-semibold text-brand-muted">
            Cargando producto...
          </p>
        </div>
      </section>
    );
  }

  if (error || !product) {
    return (
      <section className="min-h-screen bg-brand-bg px-6 py-20 text-brand-text">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-display text-3xl font-extrabold">
            {error || "Producto no encontrado"}
          </h1>

          <Link
            to="/productos"
            className="mt-6 inline-block font-sans font-bold text-brand-primary"
          >
            Volver a productos
          </Link>
        </div>
      </section>
    );
  }

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

          {/* Botones */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => addToCart(product)}
              className="w-full rounded-lg bg-brand-primary px-6 py-3 font-sans font-bold text-brand-bg transition hover:opacity-90 sm:w-auto"
            >
              Agregar al carrito
            </button>

            <Link
              to="/productos"
              className="w-full rounded-lg border border-brand-muted/30 px-6 py-3 text-center font-sans font-bold text-brand-text transition hover:border-brand-primary sm:w-auto"
            >
              Volver a productos
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProductDetail;