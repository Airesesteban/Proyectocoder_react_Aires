import React from 'react'
import Item from './Item'
import { GridItem, Grid } from '@chakra-ui/react' 

const ItemList = ({productos}) => {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {productos?.map((p) => {
            return (
              <GridItem w='100%' 
                key={p.id}>
                <Item
                    id={p.id}
                    nombre={p.nombre}
                    description={p.description}
                    stock={p.stock}
                    category={p.category}
                    image={p.img}
                    price={p.precio}
                />
                </GridItem>
            )
            })}
    </Grid>
  )
}

export default ItemList
