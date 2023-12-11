import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ( {children} ) => {
    const [cartItems, setCartItems] = useState([])

    const addItem = (item, quantity) => {
        const { id, title, price } = item;
        const index = cartItems.findIndex(product => product.id === id);


        if(index !== -1) {
            const cartItemsCopy = [...cartItems];
            cartItemsCopy[index].quantity += quantity;

            cartItemsCopy[index].subTotal = cartItemsCopy[index].quantity * cartItemsCopy[index].price;

            setCartItems(cartItemsCopy);
        } else {
            const newItem = {
                id,
                title,
                price,
                quantity,
                subTotal: quantity * price,
            };
            setCartItems([...cartItems, newItem]);
        }
        
    }

    const objectValue = {
        cartItems,
        addItem
    }

    return <CartContext.Provider value={objectValue}> {children} </CartContext.Provider>
}