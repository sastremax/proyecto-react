import { useParams } from "react-router";
import { ItemListContainer } from "../components";
import { useItems } from "../hooks";

export const Category = () => {
    const { categoryId } = useParams();
    const { productsData, loading } = useItems();
    const filteredProducts = productsData.filter(
        (product) => product.category === categoryId
    );

    return loading ? (
        <div>Cargando...</div>
    ) : (
        <ItemListContainer products={filteredProducts} />
    );
};
