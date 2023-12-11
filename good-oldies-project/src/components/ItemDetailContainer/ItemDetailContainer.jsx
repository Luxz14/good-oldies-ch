import { useEffect, useState } from "react";
import { getProductById } from "../utils/seedProducts";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null)

    useEffect(() => {
        getProductById(id)
        .then(resp => setItem(resp))
        .catch(error => console.log(error));
    }, [])

    return (
        <>
        <h3 className="greeting">Detalles del producto</h3>
            {item && <ItemDetail {...item} /> }
        </>
    )
}