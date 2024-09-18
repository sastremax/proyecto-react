import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Home = () => {

    const productsData = [
        {
        id: 1,
        name: "zapatilla adidas",
        description: "zapatilla marca adidas talle 42",
        price: 120,
        stock: 10,
        },
        {
        id: 2,
        name: "zapatilla topper",
        description: "zapatilla marca topper talle 42",
        price: 100,
        stock: 10,
        },
        {
        id: 3,
        name: "zapatilla kiker",
        description: "zapatilla marca kiker talle 42",
        price: 110,
        stock: 10,
        },
        {
        id: 4,
        name: "zapatilla nike",
        description: "zapatilla marca nike talle 42",
        price: 140,
        stock: 10,
        }
    ];

    return <ItemListContainer products={productsData} />;
};

export default Home;