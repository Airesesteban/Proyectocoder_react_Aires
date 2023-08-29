import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  return (
    <div>
        {productos?.map((p) => {
            return (
                <Item
                    key={p.id}
                    id={p.id}
                    nombre={p.nombre}
                    description={p.description}
                    stock={p.stock}
                    category={p.category}
                    image={p.img}
                    price={p.precio}
                />
            )
            })}
    </div>
  )
}

export default React.memo(ItemList)
