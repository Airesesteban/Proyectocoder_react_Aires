import React from 'react'

const ItemCount = () => {

  const [contador, setContador]= useState(0)

  const sumar=()=>{
    setContador(contador + 1)
}

  const restar=()=>{
    if(contador > 0){
        setContador(restar -1)
    }
  }    

  return (
    <div>ItemCount</div>
    )
}

export default ItemCount