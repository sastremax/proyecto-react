import { IconButton } from "@chakra-ui/react";
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

export const CardWidget = () => {
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate("/cart");
    };

    return (
        <IconButton
            icon={<TiShoppingCart />}
            onClick={handleCartClick}
            aria-label="Carrito"
            style={{
                display: "flex",
                marginRight: "30px",
                alignItems: "center",
                width: "30%",
                justifyContent: "space-between",
            }}
        >
            00
        </IconButton>
    );
};
