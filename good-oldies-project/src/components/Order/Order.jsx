import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Button } from "../Button/Button"
import { useNavigate } from "react-router-dom"
import { FirebaseContext } from "../../context/FirebaseContext"


export const Order = () => {

    const { cartItems ,totalCartItems } = useContext(CartContext)
    const { addOrderDB } = useContext(FirebaseContext);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const navigate = useNavigate()

    const handleForm = async (e) => {
        e.preventDefault(); 

        try {
            await addOrderDB(cartItems, { name, email, phone }, totalCartItems);
            navigate("/Shop-Detail")
        }

        catch (error) {
            console.error("Se ha encontrado un error intentando agregar la Orden", error);
        }

        setName("");
        setEmail("");
        setPhone("");
        
    }


    return(
        <div className="container-form">
        <form id="form-contact">
                    <label>
                        <input type="text" value={name} placeholder="Escriba su Nombre" onChange={(e) => setName(e.target.value)} required />
                    </label>
                    <label>
                    <input type="email" value={email} placeholder="Escriba su Email" onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <label>
                    <input type="number" value={phone} placeholder="Escriba su numero de telefono" onChange={(e) => setPhone(e.target.value)} required />
                    </label>
                    <Button text="Comprar" variant="btn btn-success" functionClick={handleForm} />
                </form>
                <h3>Total de la Compra: ${totalCartItems}</h3>
        </div>
    )
}