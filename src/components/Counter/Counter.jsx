import { Flex, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Counter = ({ stock, onAdd }) => {

    const [state, setState] = useState(0);

    const handleAdd = () => {
        if (state < stock) {
            setState(state + 1);
        }
    };

    const handleRemove = () => {
        if (state > 0) {
            setState(state - 1);
        }
    };

    const handleConfirm = () => {
        if (state > 0) {
            onAdd(state);
        }
    };

    useEffect(() => {
        console.log(`El contador ha cambiado a: ${state}`);
    }, [state]);

    return (
        <Flex>
            <Button onClick={handleRemove}>-</Button>
            <Text>{state}</Text>
            <Button onClick={handleAdd}>+</Button>
            <Button onClick={handleConfirm} disabled={state === 0}>Confirmar</Button>
        </Flex>
    );
};

Counter.propTypes = {
    stock: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired
};

export default Counter;