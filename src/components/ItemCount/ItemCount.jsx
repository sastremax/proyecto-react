import { Flex, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ItemCount = ({ stock, initial }) => {
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

    useEffect(() => {
        console.log(`El contador ha cambiado a: ${count}`);
    }, [count]);

    return (
        <Flex>
            <Button onClick={handleRemove}>-</Button>
            <Text>{count}</Text>
            <Button onClick={handleAdd}>+</Button>
        </Flex>
    );
};

ItemCount.propTypes = {
    stock: PropTypes.number.isRequired,
    initial: PropTypes.number.isRequired,    
};
