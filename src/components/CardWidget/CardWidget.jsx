import { IconButton, Box } from "@chakra-ui/react";
import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context";

export const CardWidget = () => {
    const navigate = useNavigate();

    const { cartItems } = useCart();
    console.log("cartItems:", cartItems);

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const handleCartClick = () => {
        navigate("/cart");
    };

    return (
        <IconButton
            icon={
                <Box display="flex" alignItems="center">
                    <CiShoppingCart />
                    {totalItems > 0 && (
                        <Box as="span" ml="8px">
                            {totalItems}
                        </Box>
                    )}
                </Box>
            }
            onClick={handleCartClick}
            aria-label="Carrito"
            style={{
                display: "flex",
                marginRight: "30px",
                alignItems: "center",
                width: "30%",
                justifyContent: "space-between",
            }}
        />
    );
};
