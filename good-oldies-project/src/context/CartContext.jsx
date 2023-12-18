import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ( {children} ) => {

    const storedCartItems = JSON.parse(localStorage.getItem('cartItmes')) || [];

    const [cartItems, setCartItems] = useState(storedCartItems)
    const [totalCartItems, setTotalCartItems] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const addItem = (item, quantity) => {
        const { id, title, price, artist, pictureUrl } = item;        
        const index = cartItems.findIndex(product => product.id === id);


        if(index !== -1) {
            const cartItemsCopy = [...cartItems];
            cartItemsCopy[index].quantity += quantity;

            cartItemsCopy[index].subTotal = cartItemsCopy[index].quantity * cartItemsCopy[index].price;

            setCartItems(cartItemsCopy);
        } else {
            const newItem = {
                id,
                pictureUrl,
                title,
                artist,
                price,
                quantity,
                subTotal: quantity * price,
            };
            setCartItems([...cartItems, newItem]);
        }
        
    }

    const removeItem = (id) => {
        const arrayFilter = cartItems.filter((item) => item.id !== id);
        setCartItems(arrayFilter);
    }

    const clearCartItems = () => {
        setCartItems([]);
    }

    const handleTotal = () => {
        const total = cartItems.reduce( (acum, item) => acum + item.subTotal, 0 );
        setTotalCartItems(total);
    }

    const handleTotalQuantity = () => {
        const total = cartItems.reduce( (acum, item) => acum + item.quantity, 0);
        setTotalQuantity(total);
    }

    useEffect(() => {
        handleTotal();
        handleTotalQuantity();
    }, [cartItems])

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const objectValue = {
        cartItems,
        addItem,
        totalCartItems,
        totalQuantity,
        removeItem,
        clearCartItems,
    }

    return <CartContext.Provider value={objectValue}> {children} </CartContext.Provider>
}