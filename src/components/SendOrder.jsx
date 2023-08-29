import {collection, addDoc, getFirestore} from "firebase/firestore"
import {useState} from "react"

const SendOrder = () => {
    const [name, setName] = useState("")
    const {email, setEmail} = useState("")
    const [orderId, setOrderId] = useState("null")

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(ordersCollection, order).then(({id}) =>
            setOrderId(id))
    }

    const order = {
        name,
        email
    }

    const ordersColecction = collection(db. "orden")

  return (
    <div>
        <h1>Enviando orden</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder=" Nombre Y Apellido" 
            onChange={(e) => setName(e.target.value)}
            />
            <input type="text" placeholder=" Email" 
            onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Enviar Información</button>
        </form>
        <p>Su numero de orden es: {orderId}</p>
    </div>
  )
}

export default SendOrder