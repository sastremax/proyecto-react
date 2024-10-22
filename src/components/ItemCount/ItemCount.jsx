import { useState } from "react";
import { Flex, Button, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const ItemCount = ({ stock, initial = 1, onAddToCart }) => {
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleRemove = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <Flex alignItems="center" direction="column">
            <Flex alignItems="center">
                <Button onClick={handleRemove} disabled={count === 1}>
                    -
                </Button>
                <Text mx={4}>{count}</Text>
                <Button onClick={handleAdd} disabled={count === stock}>
                    +
                </Button>
            </Flex>
            <Button mt={4} onClick={() => onAddToCart(count)}>
                Agregar al Carrito
            </Button>
        </Flex>
    );
};

ItemCount.propTypes = {
    stock: PropTypes.number.isRequired, // Asegura que sea un número requerido
    initial: PropTypes.number, // Asegura que sea un número
    onAddToCart: PropTypes.func.isRequired, // Asegura que sea una función requerida
};