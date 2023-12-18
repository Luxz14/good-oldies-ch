import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../config/firebaseConfig"
import { useContext, useRef, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Button } from "../Button/Button"
// import Swal from "sweetalert2"


export const Order = () => {

    const { cartItems ,totalCartItems } = useContext(CartContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState(null)

    const addOrderDB = (cartProducts, userData, total) => {
        const newOrder = {
            buyer: userData,
            items: cartProducts,
            data: serverTimestamp(),
            total
        }

        console.log(newOrder)
        addDoc( collection(db, "orders"), newOrder );
    }

    const handleForm = (e) => {
        e.preventDefault(); 

        addOrderDB(cartItems, {name, email, phone}, totalCartItems)

        setName("");
        setEmail("");
        setPhone(null);
        
        
    }

    // const ordersRef = collection(db, "orders");
    // const orderData = {
    //     name,
    //     email,
    //     phone,
    //     totalCartItems
    //     }

    // const docRef = addDoc(ordersRef, orderData);
    // console.log('Orden creada con ID', docRef.id);

    // const orderConfirmation = `
    // Gracias por tu compra!
    // Tu numero de orden es: ${docRef.id}<br>
    // Total de la Compra: $${totalCartItems}<br>
    // Nombre: ${name}<br>
    // Email: ${email}<br>
    // Número de Teléfono: ${phone}<br>
    // `;

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