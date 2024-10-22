import { Button } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";

const ChildMemo = React.memo(({ count }) => {
    return <div>Valor del Estado Auxiliar: {count}</div>;
});

ChildMemo.displayName = "ChildMemo";

export const Memo = () => {
    const [state, setState] = React.useState(0);
    const [auxState, setAuxState] = React.useState(0);

    const handleAdd = () => {
        setState(state + 1);
    };

    const handleAddAux = () => {
        setAuxState(auxState + 1);
    };

    console.log("Se renderiza el padre");

    return (
        <div>
            <Button onClick={handleAdd}>Incrementar</Button>
            <Button onClick={handleAddAux}>Incrementar Auxiliar</Button>
            <div>Valor del Estado: {state}</div>
            <ChildMemo count={auxState} />
        </div>
    );
};

ChildMemo.propTypes = {
    count: PropTypes.number.isRequired,
};
