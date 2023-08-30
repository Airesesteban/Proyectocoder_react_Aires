/* import {ItemDetail} from "./ItemDetail";
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
  
   
  
  export default ItemDetailContainer; */
  import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "firebase/firestore";
import { ItemDetail } from "./ItemDetail";
/* import "../main.css"; */

export const ItemDetailContainer = () => {
  const [state, setState] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    const db = getFirestore();
        db.collection('products').doc(id)
        .get()
        .then(res => {
          setState({id:res.id, ...res.data()})
        })
      }, [id]);
      
  return (
    <div /* className="main" */>
      {state && (
        <ItemDetail
        state={state}
        />
        )}
    </div>
  ) }

  export default ItemDetailContainer;