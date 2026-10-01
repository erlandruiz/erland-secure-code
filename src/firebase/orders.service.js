import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "./config";

// Guarda una compra en Firestore
const createOrder = async ({
  ticketNumber,
  name,
  email,
  products,
  total,
}) => {
  const ordersCollection = collection(db, "orders");

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
      subtotal: product.price * product.quantity,
    })),

    total,

    createdAt: serverTimestamp(),
  };

  const orderRef = await addDoc(
    ordersCollection,
    orderData
  );

  return orderRef.id;
};

export { createOrder };