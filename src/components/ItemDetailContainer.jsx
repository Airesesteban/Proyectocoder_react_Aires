import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

export const ItemDetailContainer = () => {
  const { id } = useParams();

  return (
    <div>
      {id && (
        <ItemDetail
          id={id}
        />
      )}
    </div>
  )
}

export default ItemDetailContainer