import { useState } from "react";
import { Button } from "../Button/Button";

export const ItemCount = ({stock, initial = 1, addCount}) => {
    const [count, setCount] = useState(initial)


    const increment = () => {
        if(count < stock) {
            return setCount(count + 1);
        }
        setCount(count);
    }

    const decrement = () => {
        if (count === 0) {
            return setCount(0);
        }
        setCount(count - 1);
    };
    
    
    return(
        <>
            <div>
            <Button text="-" functionClick={decrement}></Button>
            <strong>{count}</strong>
            <Button text="+" functionClick={increment}></Button>
            </div>
        <Button text="Agregar al carrito" functionClick={() => addCount(count)}></Button>
        </>
    )
}