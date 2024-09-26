import { useEffect, useState } from "react";

export const useItemById = (id) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchProduct = async () => {
        try {
            const response = await fetch (`https://dummyjson.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.error("Error al obtener el producto:", error);
            setError(error);
        } finally {
            setLoading(false);
        }
      }; 

      fetchProduct();
    }, [id]);

    return { product, loading, error };
};
