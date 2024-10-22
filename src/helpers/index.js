import { getAllProducts } from "../services/products.service";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

export async function createProductsFirestore(collectionName) {
    try {
        const response = await getAllProducts();
        const fetchedProducts = response.data.products;

        if (!Array.isArray(fetchedProducts)) {
            throw new Error("La respuesta de la API no es un array.");
        }

        const productsCollection = collection(db, collectionName);

        const addPromises = fetchedProducts.map((product) => {
            delete product.id;
            return addDoc(productsCollection, {
                ...product,
                createdAt: new Date(),
            });
        });

        await Promise.all(addPromises);

        } catch (err) {
            console.error("Error al obtener o almacenar productos:", err);
        }
    }