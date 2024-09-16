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
        console.log("useEffect descontrolado");
    });

    useEffect(() => {
        console.log("useEffect controlado con dependencias vacias")
    }, []);

    useEffect(() => {
        console.log("useEffect controlado con dependencia");
    }, [state]);

    return (
    <Flex>
        <Button onClick={handleRemove}>-</Button>
        <Text>{state}</Text>
        <Button onClick={handleAdd}>+</Button>
    </Flex>
    );
};

export default Counter;