import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

export const Item = ( {title, artist, id, price, pictureUrl} ) => {
    return(
        <>
            <div className="card">
                <img src={pictureUrl} alt="Portadas de los albums" className="card-image"/>
                <h3> {title} </h3>
                <h5> {artist} </h5>
                <h5> {price} </h5>
                <Link to={`/item/${id}`}> 
                    <Button text="Detalles" />
                </Link> 
            </div>
        </>
    )
}