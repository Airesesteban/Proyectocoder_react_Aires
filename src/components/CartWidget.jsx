import React from 'react'
import {Box, Flex} from '@chakra-ui/react'
import cartImage from "../images/shopping-cart.png"
import {useContext} from 'react'
import {CartContext} from '../context/ShoppingCartContext'

const Cartwidget = () => {

  const {itemQuantity} = (CartContext)
  return (
    <Flex>
      <CartContext>
        <Box m={2} p={2}>
          <img src={cartImage} />
          <p>{itemQuantity}</p>
        </Box>
      </CartContext>
    </Flex>
  )
}

export default Cartwidget