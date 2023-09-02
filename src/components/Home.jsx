import React from 'react'
import img_home from '../images/Img_home.jpeg'
import { Box, Center, Flex} from '@chakra-ui/react'
import ItemListContainer from './ItemListContainer'

const Home = () => {
  return (
    <Box>
      <Center mt={4}>
        Bienvenidos a la tiendita del Playmobil
      </Center>
      <Center mt="5">
        <img src={img_home}/>
      </Center>
      <Flex>
        <ItemListContainer/> 
      </Flex>
    </Box>
  )
}

export default Home