import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartState, setCartState] = useState([]);

    const addItem = (product, qtyItem) => {
        const existingProduct = cartState.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {
            setCartState(
                cartState.map((item) =>
                    item.id === product.id
                        ? { ...item, qtyItem: item.qtyItem + qtyItem }
                        : item
                )
            );
        } else {
            setCartState([...cartState, { ...product, qtyItem }]);
        }
    };

    const removeItem = (product) => {
        const existingProduct = cartState.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {
            if (existingProduct.qtyItem === 1) {
                setCartState(
                    cartState.filter((item) => item.id !== product.id)
                );
            } else {
                setCartState(
                    cartState.map((item) =>
                        item.id === product.id
                            ? { ...item, qtyItem: item.qtyItem - 1 }
                            : item
                    )
                );
            }
        }
    };

    return (
        <CartContext.Provider
            value={{
                cartState,                
                addItem,
                removeItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
