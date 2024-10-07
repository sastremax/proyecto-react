import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const value = useMemo(() => {
        const addItemToCart = (item, quantity) => {
            const updatedCart = [...cartItems, { ...item, quantity }];
            setCartItems(updatedCart);
        };

        const removeItemFromCart = (id) => {
            const updatedCart = cartItems.filter((item) => item.id !== id);
            setCartItems(updatedCart);
        };

        const clearCart = () => {
            setCartItems([]);
        };

        return {
            cartItems,
            addItemToCart,
            removeItemFromCart,
            clearCart,
        };
    }, [cartItems]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
