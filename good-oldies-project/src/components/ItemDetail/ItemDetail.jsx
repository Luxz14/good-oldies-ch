import { Button } from "../Button/Button"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import Swal from "sweetalert2"

export const ItemDetail = ({id, title, artist, genre, year, price, pictureUrl, stock }) => {

    const { addItem} = useContext(CartContext);

    const addCount = (items) => {
        addItem({
            id,
            title,
            artist,
            genre,
            year,
            price,
            pictureUrl
        }, items)
    }


    return (
        <div className="card-center">
            <img src={pictureUrl} alt="Portadas de los albums" className="card-image"/>
            <h3> {title} </h3>
            <h5> {artist} </h5>
            <p> {genre} </p>
            <p> {year} </p>
            <h5> {price} </h5>
            <ItemCount stock={stock} addCount={addCount} />
            <Link to="/"> 
                <Button text="Volver al inicio"/>
            </Link> 
        </div>
    )
}