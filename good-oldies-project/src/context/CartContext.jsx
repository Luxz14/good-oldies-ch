import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    const addItem = (item, quantity) => {

        const { id, title, price } = item;

        const newItem = {
            id,
            title,
            price,
            quantity,
            subTotal: quantity * price
        }
        setCartItems([...cartItems, newItem]);
    }

    const objectValue = {
        cartItems,
        addItem
    }

    return <CartContext.Provider value={objectValue}> {children} </CartContext.Provider>
}