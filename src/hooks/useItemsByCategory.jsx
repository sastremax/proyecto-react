import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


export const useItemsByCategory = (categoryId) => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const customQuery = query(
            collection(db, "products"),
            where("category", "==", categoryId)
        );

        getDocs(customQuery)
            .then((snapshot) => {
                const filteredProducts = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProductsData(filteredProducts);
            })
            .catch((error) => console.log("Error al obtener productos:", error))
            .finally(() => setLoading(false));
    }, [categoryId]);

    return { productsData, loading };
};
