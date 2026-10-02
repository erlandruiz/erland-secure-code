import {
  createContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem(
      "erland-securecode-cart"
    );

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "erland-securecode-cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  // Agrega un producto con la cantidad seleccionada
  const addToCart = (product, quantity = 1) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) => {
          if (item.id === product.id) {
            const newQuantity =
              item.quantity + quantity;

            return {
              ...item,
              quantity: Math.min(
                newQuantity,
                product.stock
              ),
            };
          }

          return item;
        });
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: Math.min(
            quantity,
            product.stock
          ),
        },
      ];
    });
  };

  // Aumenta una unidad sin superar el stock
  const increaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (
          item.id === productId &&
          item.quantity < item.stock
        ) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      })
    );
  };

  // Disminuye una unidad
  const decreaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Elimina completamente un producto
  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== productId
      )
    );
  };

  // Vacía todo el carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export {
  CartContext,
  CartProvider,
};