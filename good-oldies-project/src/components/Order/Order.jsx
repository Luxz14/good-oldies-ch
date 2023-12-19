import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Button } from "../Button/Button"
import { useNavigate } from "react-router-dom"
import { FirebaseContext } from "../../context/FirebaseContext"
import Swal from "sweetalert2"


export const Order = () => {

    const { cartItems ,totalCartItems } = useContext(CartContext)
    const { addOrderDB } = useContext(FirebaseContext);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("");
    const [emailMatch, setEmailMatch] = useState(true)
    const [phone, setPhone] = useState("")
    const navigate = useNavigate()

    const handleForm = async (e) => {
        e.preventDefault(); 

        try {
            if (emailMatch) {
                await addOrderDB(cartItems, { name, email, phone }, totalCartItems);
                navigate("/Shop-Detail");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error en la confirmacion de email",
                    text: "Los correos electrónicos no coinciden. Inténtalo de nuevo",
                });
            }
        } catch (error) {
            console.error("Se ha encontrado un error intentando agregar la Orden", error);
        }

        setName("");
        setEmail("");
        setPhone("");
        setConfirmEmail("");
        
    }

    const validateEmail = () => {
        if(email === confirmEmail) {
            setEmailMatch(true);
        } else {
            setEmailMatch(false);
            Swal.fire({
                icon: "error",
                title: "Error en la confirmacion de email",
                text: "Los correos electrónicos no coinciden. Intentalo de nuevo",
                });
        }
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
                    <input type="email" value={confirmEmail} placeholder="Confirme su Email" onChange={(e) => setConfirmEmail(e.target.value)} onBlur={validateEmail} required />
                    </label>
                    <label>
                    <input type="number" value={phone} placeholder="Escriba su numero de telefono" onChange={(e) => setPhone(e.target.value)} required />
                    </label>
                    <Button text="Comprar"variant="btn btn-success" functionClick={handleForm} disabled={!emailMatch} />
                </form>
                <h3>Total de la Compra: ${totalCartItems}</h3>
        </div>
    )
}