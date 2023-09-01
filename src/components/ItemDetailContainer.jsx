import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

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

export default ItemDetailContainer;


/* import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs} from "firebase/firestore"
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {

    const [data, setData] = useState([])
  
    useEffect(() => {
  
      const db = getFirestore()
  
      const productsCollection = collection(db, "productos")
  
      getDocs(productsCollection).then((querySnapshot) => {
  
        const productos = querySnapshot.docs.map((doc) => ({
  
          ...doc.data(),
  
          id: doc.id,
  
        }))

        setData(productos)
  
      })
  
    }, [])
  
   
  
    return <ItemDetail productos={data} />
  
  };
  
   
  
export default ItemDetailContainer;
 */