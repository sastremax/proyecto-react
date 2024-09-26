import { Flex, Text, Button } from "@chakra-ui/react";

import { useEffect, useState } from "react";

export const ItemCount = () => {

    const [state, setState] = useState(0);

    const handleAdd = () => {        
        setState(state + 1);        
    };

    const handleRemove = () => {
        setState(state - 1);
    };

    useEffect(() => {
        console.log(`El contador ha cambiado a: ${state}`);
    }, [state]);

    return (
        <Flex>
            <Button onClick={handleRemove}>-</Button>
            <Text>{state}</Text>
            <Button onClick={handleAdd}>+</Button>            
        </Flex>
    );
};

