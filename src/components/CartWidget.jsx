import React from 'react'
import {Box, Flex} from '@chakra-ui/react'

const Cartwidget = () => {
  return (
    <Flex>
        <Box m={2} p={2}>
          <img src="src/images/shopping-cart.png" />
          <p>3</p>
        </Box>
    </Flex>
  )
}

export default Cartwidget