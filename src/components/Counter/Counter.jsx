import { Flex, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Counter = () => {

    const [state, setState] = useState(0);

    const handleAdd = () => {
        setState(state + 1);
    }

    const handleRemove = () => {
        setState(state - 1);
    }

    useEffect(() => {

    });
    return (
    <Flex>
        <Button onClick={handleRemove}>-</Button>
        <Text>{state}</Text>
        <Button onClick={handleAdd}>+</Button>
    </Flex>
    );
};

export default Counter;