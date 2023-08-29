import {useContext, useState} from "react"
import { Text, ButtonGroup,IconButton,Tooltip,Center,Button } from "@chakra-ui/react"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { CartContext } from "../context/ShoppingCartContext"

const ItemCount = ({stock, id, price, name}) => {

  const [contador, setContador]= useState(1)
  const [cart, setCart] = useContext(CartContext)

  const sumar=()=>{
    setContador(contador + 1)
}

  const restar=()=>{
    if(contador > 0){
        setContador(restar -1)
    }
  }    
  const addToCart = () => {

    setCart((currItems) => {

      const isItemFound = currItems.find((item) => item.id === id);

      if (isItemFound) {

        return currItems.map((item) => {

          if (item.id === id) {

            return { ...item, quantity: item.quantity + contador };

          } else {

            return item;

          }

        });

      } else {

        return [...currItems, { id, quantity: contador, price, name }];

      }

    });

  };


  return (
    <div>
      <ButtonGroup size="sm" isAttached variant="outline">
        {count <1 ? (
          <Tooltip label="minimum stock reached" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton icon={<MinusIcon />} onClick={restart} />
        )}
        <Center>
          <Button onClick={() => addToCart()} variant="solid" colorScheme="bluesky">
            Add to cart: {contador}
          </Button>
        </Center>
        {count < stock ? (
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