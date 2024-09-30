import { useState, useEffect } from "react";
import { getAllProducts } from "../../services/products.service";
import { ItemListContainer } from "../ItemListContainer";

export const AllProducts = () => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllProducts()
            .then((res) => {
                console.log(res.data.products);
                setProductsData(res.data.products);
            })
            .catch((error) => {
                console.log("Error al obtener los productos", error);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return <ItemListContainer products={productsData} />;
};
