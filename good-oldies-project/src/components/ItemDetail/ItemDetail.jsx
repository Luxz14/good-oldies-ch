import { Button } from "../Button/Button"
import { Link } from "react-router-dom"

export const ItemDetail = ({title, artist, genre, year, price, pictureUrl }) => {
    return (
        <div className="card-center">
            <img src={pictureUrl} alt="Portadas de los albums" className="card-image"/>
            <h3> {title} </h3>
            <h5> {artist} </h5>
            <p> {genre} </p>
            <p> {year} </p>
            <h5> {price} </h5>
            <Button text="Agregar al Carrito" />
            <Link to="/"> 
                <Button text="Volver al inicio"/>
            </Link> 
        </div>
    )
}