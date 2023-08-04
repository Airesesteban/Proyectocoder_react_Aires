import React from 'react'
import {Menu, MenuButton, MenuItem, MenuList, Button, Flex, Box, Spacer} from "@chakra-ui/react"
import {ChevronDownIcon} from '@chakra-ui/icons'
import CartWidget from './Cartwidget'
import { Link } from 'react-router-dom'

const  NavBar  = () => {
  return (
    <Flex>
      <Box p="2" bg="skyblue" color="white" fontSize={24}>
        <Link to={"/"}>
          La tiendita del Playmobil 
        </Link> 
      </Box>
      <Spacer/>
      <Box p="3">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Categorias
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link to={`/category/${'granja'}`}>
                Granja
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/category/${'figuras'}`}>
                Figuras
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/category/${'espacio'}`}>
                Espacio
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/category/${'piratas'}`}>
                Piratas
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/category/${'fuerzasEspeciales'}`}>
                Fuerzas especiales
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box>
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </Box>
    </Flex>
  )
}

export default  NavBar