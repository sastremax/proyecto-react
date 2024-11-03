import { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from "../../context";
import { Box, Icon, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const CartWidget = () => {
    const { cartState } = useContext(CartContext);

    const totalItems = cartState.reduce((acc, item) => acc + item.qtyItem, 0);

    return (
        <Link to="/checkout">
            <Box display="flex" alignItems="center" position="relative" mr={4}>
                <Icon as={CiShoppingCart} boxSize={8} />
                {totalItems > 0 && (
                    <Text
                        fontSize="sm"
                        color="white"
                        bg="red.500"
                        borderRadius="full"
                        px={2}
                        position="absolute"
                        top={-2}
                        right={-2}
                    >
                        {totalItems}
                    </Text>
                )}
            </Box>
        </Link>
    );
};
