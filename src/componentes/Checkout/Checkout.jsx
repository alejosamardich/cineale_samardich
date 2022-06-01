import { useContext, useState, useTransition } from "react";
import CartContext from "../../store/CartContextProvider";
import {collection,addDoc, getFirestore} from 'firebase/firestore';
import { Link } from "react-router-dom";
import './Checkout.css'
import Swal from 'sweetalert2'

export const Checkout = () => {

    const db = getFirestore();

    const {products, getTotalPrice, clear} = useContext(CartContext)

    const [orderID, setOrderID] = useState()

    const [buyer, setBuyer]= useState({
        Nombre:'',
        Email:'',
        Telefono:''
    })

    const {Nombre, Email, Telefono} = buyer

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    }

    const genOrder = async(data) => {
        try {
            const col = collection(db,"orders")
            const order = await addDoc(col, data)
            setOrderID(order.id)
            clear([])
        } catch (error){
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const dia = new Date()
        const total = getTotalPrice()
        const items = products.map (e=> {return {id:e.id, title:e.title, price:e.precio, quantity:e.quantity}})
        const data = {buyer, items, dia, total}
        console.log("Datos", data) 
        genOrder(data)
        Swal.fire({
            icon:'success',
            title: '¡Reserva Realizada!',
            footer:'<a href="./">Relizar otra Reserva</a> ',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
    }

    return (
        <>
        <h2>Finalizando compra</h2>
        {!orderID&&
        <div className="form">
            <h4>Completar Datos:</h4>
            <form onSubmit={handleSubmit}>
                <input className="input" type="text" name="Nombre" placeholder="Nombre" value={Nombre} onChange={handleInputChange} required/>
                <input className="input" type="number" name="Telefono" placeholder="Telefono" value={Telefono} onChange={handleInputChange} required/>
                <input className="input" type="email" name="Email" placeholder="Email" value={Email} onChange={handleInputChange} required/>
                <input className="input" type="submit" value="Finalizar Compra" />
            </form>
        </div>} 
        <button className="button-brown"><a href="./">Home</a></button>
    </>
    )
}

export default Checkout