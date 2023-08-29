import React from 'react'
import {Box, Flex} from '@chakra-ui/react'
import cartImage from "../images/shopping-cart.png"
import {useContext} from 'react'
import {CartContext} from '../context/ShoppingCartContext'

const Cartwidget = () => {

  const {cart,setCart,longitud} = useContext(CartContext)
  return (
    <Flex>
        <Box m={2} p={2}>
          <img src={cartImage} />
          <p>{longitud}</p>
        </Box>
    </Flex>
  )
}

export default Cartwidget