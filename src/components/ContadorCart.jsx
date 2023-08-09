import {useContext} from 'react'
import {CartContext} from '../context/ShoppingCartContext' 

const ContadorCart = () => {

  const {cart,setCart,longitud} = useContext(CartContext)  
  return (
    <div>
        <h1>cart</h1>
        <p>longitud</p>
    </div>
  )
}

export default ContadorCart