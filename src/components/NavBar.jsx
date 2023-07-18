import React from 'react'
import {Menu, MenuButton, MenuItem, MenuList, Button, Flex, Box, Spacer} from "@chakra-ui/react"
import {ChevronDownIcon} from '@chakra-ui/icons'
import CartWidget from './Cartwidget'

const  NavBar  = () => {
  return (
    <Flex>
      <Box p="2" bg="skyblue" color="white"> 
        La tiendita del Playmobil 
      </Box>
      <Spacer/>
      <Box p="3">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Categorias
          </MenuButton>
          <MenuList>
            <MenuItem>Granja</MenuItem>
            <MenuItem>Figuras</MenuItem>
            <MenuItem>Espacio</MenuItem>
            <MenuItem>Piratas</MenuItem>
            <MenuItem>Construccion</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box>
        <CartWidget />
      </Box>
    </Flex>
  )
}

export default  NavBar