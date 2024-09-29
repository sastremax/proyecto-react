import { useParams } from "react-router";
import { ItemListContainer } from "../components";
import { useItems } from "../hooks";

export const Category = () => {
    const { categoryId } = useParams();
    const { productsData, loading } = useItems();
    const filteredProducts = productsData.filter(
        (product) => product.category === categoryId
    );

    if (loading) {
    return <div>Cargando...</div>;
    }

    if (filteredProducts.length > 0) {
        return <ItemListContainer products={filteredProducts} />;
    }
    return <p>No hay productos disponibles en esta categoría.</p>;    
};
