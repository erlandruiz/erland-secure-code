import {
  collection,
  doc,
  getDocs,
  writeBatch,
} from "firebase/firestore";

import products from "../data/products";
import { db } from "./config";

// Carga los productos iniciales en Firestore
const seedProducts = async () => {
  const productsCollection = collection(db, "products");

  // Comprobamos si ya existen productos
  const snapshot = await getDocs(productsCollection);

  if (!snapshot.empty) {
    console.log(
      "La colección products ya contiene datos. No se realizó otra carga."
    );

    return;
  }

  const batch = writeBatch(db);

  products.forEach((product) => {
    // Firestore genera automáticamente el ID
    const productRef = doc(productsCollection);

    // Eliminamos el ID local antes de guardar
    const { id, ...productData } = product;

    batch.set(productRef, productData);
  });

  await batch.commit();

  console.log(
    "Productos cargados correctamente con IDs automáticos de Firestore."
  );
};

export default seedProducts;