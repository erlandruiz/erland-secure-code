import {
  useEffect,
  useState,
} from "react";

import { useSearchParams } from "react-router-dom";

import { getProducts } from "../firebase/products.service";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchParams] = useSearchParams();

  const selectedCategory =
    searchParams.get("category");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const productsFromFirebase =
          await getProducts();

        setProducts(productsFromFirebase);
      } catch (error) {
        console.error(
          "Error al cargar productos:",
          error
        );

        setError(
          "No se pudieron cargar los productos."
        );
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) =>
          product.category === selectedCategory
      )
    : products;

  if (loading) {
    return (
      <section className="min-h-screen bg-brand-bg px-6 py-20 text-brand-text">
        <div className="mx-auto max-w-7xl">
          <p className="font-sans font-semibold text-brand-muted">
            Cargando productos...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-brand-bg px-6 py-20 text-brand-text">
        <div className="mx-auto max-w-7xl">
          <p className="font-sans font-semibold text-red-400">
            {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-brand-bg px-6 py-20 text-brand-text">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <p className="font-mono text-sm font-medium text-brand-secondary">
            PRODUCTOS DIGITALES
          </p>

          <h2 className="mt-2 font-display text-3xl font-extrabold">
            {selectedCategory
              ? selectedCategory
              : "Todos los productos"}
          </h2>

          <p className="mt-3 max-w-2xl font-sans font-medium text-brand-muted">
            Recursos de ciberseguridad para desarrolladores.
          </p>
        </div>

        <ItemList
          products={filteredProducts}
        />

      </div>
    </section>
  );
}

export default ItemListContainer;