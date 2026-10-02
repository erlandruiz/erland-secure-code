import {
  useContext,
  useEffect,
  useState,
} from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { getProductById } from "../firebase/products.service";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();

  const {
    cart,
    addToCart,
  } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const productFromFirebase =
          await getProductById(id);

        if (!productFromFirebase) {
          setError("Producto no encontrado.");
          return;
        }

        setProduct(productFromFirebase);
      } catch (error) {
        console.error(
          "Error al cargar producto:",
          error
        );

        setError(
          "No se pudo cargar el producto."
        );
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
  };

  const isInCart = product
    ? cart.some(
        (item) => item.id === product.id
      )
    : false;

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
    <ItemDetail
      product={product}
      isInCart={isInCart}
      onAdd={handleAdd}
    />
  );
}

export default ItemDetailContainer;