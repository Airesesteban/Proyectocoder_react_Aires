import React from 'react'
import img_home from '../images/Img_home.jpeg'
import { Center } from '@chakra-ui/react'
import ItemListContainer from './ItemListContainer'

const Home = () => {
  return (
    <Center mt="5">
      <img src={img_home}/>
       <ItemListContainer/> 
    </Center>
  )
}

export default Home