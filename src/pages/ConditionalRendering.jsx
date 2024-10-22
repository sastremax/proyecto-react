import { useEffect, useState } from "react";
import styles from "../styles/ConditionalRendering.module.css";

export const ConditionalRendering = () => {
    const [loading, setLoading] = useState(true);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
        setTimeout(() => {
            setIsActive(true);
        }, 4000);
    }, []);

    const myStyles = {
        color: isActive ? "red" : "green",
    };

    const componentType = "button";

    const MyComponent = componentType === "button" ? Button : Input;

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <h1 style={myStyles}>ConditionalRendering</h1>
            )}
            <MyComponent />
        </div>
    );
};

const Button = () => {
    return <button>Button</button>;
};

const Input = () => {
    return <input type="text" />;
};
