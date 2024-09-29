import { useParams } from "react-router";
import { useItemById } from "../hooks";
import { ItemDetailContainer } from "../components";

export const ItemDetail = () => {
    const { id } = useParams();
    const { product, error } = useItemById(id);

    if (error) {
        return (
            <p>
                Error al cargar el producto. Por favor, intenta nuevamente más
                tarde.
            </p>
        );
    }

    if (!product) {
        return <p>El producto no está disponible.</p>;
    }

    return <ItemDetailContainer item={product} />;
};
