import React from 'react'
import img_home from '../images/Img_home.jpeg'
import { Center } from '@chakra-ui/react'
import ItemList from './ItemList'

const Home = () => {
  return (
    <Center mt="5">
      <img src={img_home}/>
      <ItemList productos={productos} />
    </Center>
  )
}

export default Home