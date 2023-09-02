import { useContext, useState } from 'react'
import { ButtonGroup,IconButton,Tooltip,Center,Button } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { CartContext } from '../context/ShoppingCartContext'

const ItemCount = ({stock, id, price, name, image}) => {
  const [contador, setContador]= useState(1)
  const { addItem } = useContext(CartContext)

  const sumar=()=>{
    setContador(contador + 1)
}

  const restar=()=>{
    if(contador > 0){
        setContador(contador -1)
    }
  }    

  return (
    <div>
      <ButtonGroup size="sm" isAttached variant="outline">
        {contador <1 ? (
          <Tooltip label="minimum stock reached" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton icon={<MinusIcon />} onClick={restar} />
        )}
        <Center>
          <Button
          onClick={() => addItem({ id: id, counter: contador, price: price, stock, image, name }, contador)}
          variant="solid"
          colorScheme="blue"
          >
          Agregar al carrito: {contador}
          </Button>
        </Center>
        {contador < stock ? (
          <IconButton icon={<AddIcon />} onClick={sumar} />
        ) : (
          <Tooltip label="stock limit reached" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />  
          </Tooltip>
        )}
      </ButtonGroup>
    </div>
    )
}

export default ItemCount