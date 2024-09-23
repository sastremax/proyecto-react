import { ItemListContainer, Loader } from "../components";
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/products.service";

export const Home = () => {

    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);   

    useEffect(() => {
        getAllProducts()
        .then((res) => {           
            setProductsData(res.data.products);
        })
        .catch((error) => {
            console.log("Error al obtener los productos", error);       
        })
        .finally(() => setLoading(false));
    }, []);

    return loading ? (
        <Loader />
    ) : (
        <ItemListContainer products={productsData} />
    );
};