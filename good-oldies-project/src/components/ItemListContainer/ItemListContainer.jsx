import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((resp) => {

                if (category) {
                    const productsFilter = resp.filter((product) => product.category === category);
                
                    if(productsFilter.length > 0) {
                        setProducts(productsFilter);
                    } else {
                        setProducts(resp);
                    }
                } else {
                    setProducts(resp);
                }
            })
            .catch((error) => console.log(error));
    }, [category]);

    return (
        <>
            <h3 className="greeting">Bienvenidos a Good Oldies!</h3>
            {<ItemList products={products} />}
        </>
    )
}