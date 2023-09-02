import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {collection, addDoc, getFirestore} from 'firebase/firestore'
import {useState, useContext} from 'react'
import { CartContext } from '../context/ShoppingCartContext'


const SendOrder = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState(null)
    const {cart} = useContext(CartContext)

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(ordersCollection, order).then(({id}) =>
            setOrderId(id))
    }

    const order = {
        name,
        email,
        date:   new Date(),
        cart
    }

    const ordersCollection = collection(db, "orden")

  return (
    <div>
        <h1>Enviando orden</h1>
        <form onSubmit={handleSubmit}>
            <fieldset disabled= {orderId}>
                <input type="text" placeholder=" Nombre Y Apellido" 
                onChange={(e) => setName(e.target.value)}
                />
                <input type="text" placeholder=" Email" 
                onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Enviar Información</button>
            </fieldset>
        </form>
        { orderId &&
        <>   
            <p>Su numero de orden es: {orderId}</p>
            <p>Muchas gracias por su compra!</p>
            <Button variant='solid' colorScheme='blue'>
                <Link to="/">
                    Seguir comprando
                </Link>
            </Button>
        </> 
        }
    </div>
  )
}

export default SendOrder