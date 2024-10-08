import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe ser usado dentro de un CartProvider");
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const value = useMemo(() => {
        const addItemToCart = (item, quantity) => {
            const existingItemIndex = cartItems.findIndex(
                (cartItem) => cartItem.id === item.id
            );
            let updatedCart;
            if (existingItemIndex >= 0) {
                updatedCart = cartItems.map((cartItem, index) =>
                    index === existingItemIndex
                        ? {
                            ...cartItem,
                            quantity: cartItem.quantity + quantity,
                        }
                        : cartItem
                );
            } else {
                updatedCart = [...cartItems, { ...item, quantity }];
            }
            setCartItems(updatedCart);
        };

        const removeItemFromCart = (id) => {
            const updatedCart = cartItems.filter((item) => item.id !== id);
            setCartItems(updatedCart);
        };

        const clearCart = () => {
            setCartItems([]);
        };

        const isInCart = (id) => {
            return cartItems.some((cartItem) => cartItem.id === id);
        };

        return {
            cartItems,
            addItemToCart,
            removeItemFromCart,
            clearCart,
            isInCart,
        };
    }, [cartItems]);

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
