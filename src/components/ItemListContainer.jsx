import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { Center } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore"
import Loading from './Loading'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const {category} = useParams()

  useEffect(() => {
    const db = getFirestore()
    const productsCollection = collection(db, "productos")
    getDocs(productsCollection).then((querySnapshot) => {
      const productos = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      setTimeout(() => {
        setProductos(productos)
      }, 1500)
    })
  }, [])

const filteredProducts = productos.filter((producto)=> producto.category === category)
  
return (
    <Center p="1rem">
        {productos.length < 1 ? <Loading/> : category ? <ItemList productos={filteredProducts} /> : <ItemList productos={productos} />}
    </Center>
  )
}

export default ItemListContainer