import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const initialCartState = {products: []};

export const CartProvider = ({
    children
}) => {
    const [cart, setCart] = useState(initialCartState);

    const addToCart = (quantity, product) => {
        setCart(oldState => ({
            ...oldState,
            products: [...oldState.products, product]
        }));
    }

    const removeFromCart = (index) => {
        setCart(oldState => ({
            ...oldState,
            products: [...oldState.products.splice(index, 1)]
        }));
    }

    const clearCart = () => {
        setCart(initialCartState);
    }

    return (
        <CartContext.Provider value={{addToCart, clearCart, removeFromCart, cart}} >
            {children}
        </CartContext.Provider> 
    )
}

export const useCartContext = () => {
    const state =  useContext(CartContext);

    return state;
}