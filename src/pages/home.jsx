import { ItemListContainer } from "../components/ItemListContainer";
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/products.service";
import { Loader } from "../components/Loader";

const Home = () => {

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

export default Home;

/*
    const productsData = [
        {
        id: 1,
        title: "Zapatilla Adidas",
        description: "zapatilla marca Adidas talle 42",
        price: 120,
        stock: 10,
        },
        {
        id: 2,
        title: "Zapatilla Topper",
        description: "zapatilla marca topper talle 42",
        price: 100,
        stock: 10,
        },
        {
        id: 3,
        title: "Zapatilla Kiker",
        description: "zapatilla marca kiker talle 42",
        price: 110,
        stock: 10,
        },
        {
        id: 4,
        title: "Zapatilla Nike",
        description: "zapatilla marca nike talle 42",
        price: 140,
        stock: 10,
        },
        {
        id: 5,
        title: "Zapatilla Trucha",
        description: "zapatilla marca trucha talle 42",
        price: 70,
        stock: 8,
        }
    ];
*/