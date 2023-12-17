import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

export const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to="/cart">
            <i className="fa-solid fa-cart-shopping fa-lg"> <span className="cart"> {totalQuantity} </span> </i>
        </Link>
    )
}