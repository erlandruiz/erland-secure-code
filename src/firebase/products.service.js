import {
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

import { db } from "./config";

// Obtiene todos los productos desde Firestore
const getProducts = async () => {
  const productsCollection = collection(db, "products");

  const snapshot = await getDocs(productsCollection);

  const products = snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));

  return products;
};

// Obtiene un producto por su ID de Firestore
const getProductById = async (productId) => {
  const productRef = doc(
    db,
    "products",
    productId
  );

  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};

export {
  getProducts,
  getProductById,
};