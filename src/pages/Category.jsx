import { useParams } from "react-router";
import { useItemsByCategory } from "../hooks";
import { ItemListContainer } from "../components";

export const Category = () => {
    const { categoryId } = useParams();
    const { productsData, loading } = useItemsByCategory(categoryId);

    const filteredProducts = productsData.filter(
        (product) => product.category === categoryId
    );

    if (loading) {
    return <div>Cargando...</div>;
    }

    if (!loading && filteredProducts.length === 0) {
        return <p>No hay productos disponibles en esta categoría.</p>;
    }
    
    return <ItemListContainer products={filteredProducts} />;

};
