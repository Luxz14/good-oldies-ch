import { useContext } from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import { CartContext } from "../../context/CartContext";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const ShopDetail = () => {
    const { orderId } = useContext(FirebaseContext);
    const { cartItems, totalCartItems, clearCartItems } = useContext(CartContext);
    console.log(orderId)

    return (
        <>
        <div className="container">
            <div className="shop-detail-container">
                <h3 className="greeting">Tu compra fue realizada con exito!</h3>
                <h5>Tu numero de compra es: {orderId}</h5> 
                <h6>Detalle de compra:</h6>
                {cartItems.map((item) => (
                    <p key={item.id}> {item.quantity} - {item.title} </p>
                ))}
                <h5><strong>Total: {totalCartItems}</strong></h5>
                <Link to="/"> 
                    <Button text="Volver al inicio" functionClick={clearCartItems} />
                </Link>
            </div>
            </div> 
        </>
    )
}