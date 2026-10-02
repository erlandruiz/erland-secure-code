import {
  collection,
  doc,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "./config";

// Guarda la compra y descuenta el stock
const createOrder = async ({
  ticketNumber,
  name,
  email,
  products,
  total,
}) => {
  const orderRef = doc(collection(db, "orders"));

  await runTransaction(db, async (transaction) => {
    // Referencias de los productos comprados
    const productRefs = products.map((product) =>
      doc(db, "products", product.id)
    );

    // Primero leemos todos los productos
    const productSnapshots = [];

    for (const productRef of productRefs) {
      const productSnapshot =
        await transaction.get(productRef);

      productSnapshots.push(productSnapshot);
    }

    // Validamos stock antes de escribir
    productSnapshots.forEach(
      (productSnapshot, index) => {
        if (!productSnapshot.exists()) {
          throw new Error(
            "Uno de los productos ya no existe."
          );
        }

        const currentProduct =
          productSnapshot.data();

        const quantity =
          products[index].quantity;

        if (currentProduct.stock < quantity) {
          throw new Error(
            `Stock insuficiente para ${currentProduct.name}.`
          );
        }
      }
    );

    // Descontamos stock
    productSnapshots.forEach(
      (productSnapshot, index) => {
        const currentProduct =
          productSnapshot.data();

        const quantity =
          products[index].quantity;

        const newStock =
          currentProduct.stock - quantity;

        transaction.update(
          productSnapshot.ref,
          {
            stock: newStock,
          }
        );
      }
    );

    // Datos de la orden
    const orderData = {
      ticketNumber,

      customer: {
        name,
        email,
      },

      items: products.map((product) => ({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        subtotal:
          product.price * product.quantity,
      })),

      total,

      createdAt: serverTimestamp(),
    };

    // Creamos la orden
    transaction.set(
      orderRef,
      orderData
    );
  });

  return orderRef.id;
};

export { createOrder };