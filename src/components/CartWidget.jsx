import React from 'react'
import {Box, Flex, Center} from '@chakra-ui/react'
import cartImage from '../images/shopping-cart.png'
import {useContext} from 'react'
import {CartContext} from '../context/ShoppingCartContext'

const Cartwidget = () => {

  const {itemQuantity} = useContext(CartContext)
  return (
    <Flex p={4}>
        <Box color='white'>
          <img src={cartImage} />
          Mi carrito
        </Box>
        <Box>
          <Center w='20px' h='20px' bg='#65D9DB' color='white'>
            <p>{itemQuantity()}</p>
          </Center>
        </Box>
    </Flex>
  )
}

export default Cartwidget