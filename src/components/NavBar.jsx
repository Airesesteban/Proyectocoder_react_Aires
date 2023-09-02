import React from 'react'
import {Menu, MenuButton, MenuItem, MenuList, Button, Flex, Box, Spacer, Center} from "@chakra-ui/react"
import {ChevronDownIcon} from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import brand from '../images/logo.webp'

const  NavBar  = () => {
  return (
    <Flex borderBottom = '4px' borderColor = 'black' bgColor = '#63CAF2'>
      <h1 style={{display:"none"}}>La tiendita del Playmobil</h1>
      <Box p="2" bg="skyblue" color="white">
        <Link to={"/"}>
        <img src={brand} />
        </Link> 
      </Box>
      <Spacer/>
      <Center>
      <Box p="3">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Categorias
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link to={`/category/${'Granja'}`}>
                Granja
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/category/${'Figuras'}`}>
                Figuras
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/category/${'Espacio'}`}>
                Espacio
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/category/${'Piratas'}`}>
                Piratas
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/category/${'Fuerzas Especiales'}`}>
                Fuerzas especiales
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      </Center>
      <Spacer/>
      <Center>
      <Box mr={2}>
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </Box>
      </Center>
    </Flex>
  )
}

export default  NavBar