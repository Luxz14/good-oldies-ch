import { useState } from "react";

export const CartWidget = () => {
    const [count, setCount] = useState(0);

    return (
        <i className="fa-solid fa-cart-shopping fa-lg"> <span className="cart"> {count} </span> </i>
    )
}