import React from 'react'
import {Box, Flex} from '@chakra-ui/react'
import brand from "../images/shopping-cart.png"

const Cartwidget = () => {
  return (
    <Flex>
        <Box m={2} p={2}>
          <img src={brand} />
          <p>3</p>
        </Box>
    </Flex>
  )
}

export default Cartwidget