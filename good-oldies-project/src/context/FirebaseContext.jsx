import { createContext, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../config/firebaseConfig";


export const FirebaseContext = createContext(null);

export const FirebaseContextProvider = ( {children} ) => {
    const [orderId, setOrderId] = useState("");
    console.log(orderId)

    const addOrderDB = async (cartProducts, userData, total) => {
        const newOrder = {
            buyer: userData,
            items: cartProducts,
            data: serverTimestamp(),
            total
        }

        const newDoc = await addDoc(collection(db, "orders"), newOrder);
        setOrderId(newDoc.id);
        console.log(newOrder)
        console.log(newDoc.id)
    }

    const objectValue = {
        addOrderDB,
        orderId
    }

    return (
        <FirebaseContext.Provider value={objectValue}> {children} </FirebaseContext.Provider>
    );
}