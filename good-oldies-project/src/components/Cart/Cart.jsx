import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

    export const Cart = () => {

    const { cartItems } = useContext(CartContext);
    console.log(cartItems)

        return (
            <>
                <h3 className="greeting">Carrito</h3>
                {cartItems.map((item) => (
                <div key={item.id} className="card">
                    <img src={item.pictureUrl} alt="Portadas de los albums" className="card-image"/>
                    <h3> {item.title} </h3>
                    <h5> {item.artist} </h5>
                    <h5> {item.price} </h5>
                    <Link to={``}> 
                        <Button text="Comprar" />
                    </Link>
                    <Link to="/"> 
                        <Button text="Volver al inicio"/>
                    </Link>  
                </div>
            ))}
            </>
        )
    }