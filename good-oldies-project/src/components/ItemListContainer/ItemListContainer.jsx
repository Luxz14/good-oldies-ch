import {  useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";



export const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);


    const getProductsDB = (category) => {
        const albums = category ? query( collection(db, "products"), where("category", "==", category)) : query( collection(db, "products"));
        getDocs(albums)
            .then(resp => {
                if (resp.size === 0) {
                    console.log("No hay discos en la base de datos");
                }
                const albumList = resp.docs.map(doc => {
                    const product = {
                        id: doc.id,
                        ...doc.data()
                    };
                    return product;
                })

                setProducts(albumList);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        getProductsDB(category)

    }, [category])

    return (
        <>
            <h3 className="greeting">Bienvenidos a Good Oldies!</h3>
            {<ItemList products={products} />}
        </>
    )
}