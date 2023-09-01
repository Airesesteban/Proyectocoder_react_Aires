import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, counter) => {
    
    const isInCart = cart?.find((cartItem) => cartItem.item.id === item.id);
    if (isInCart) {
      const newQ = isInCart.counter + counter;
      if (newQ <= item.stock){
        const newCart = cart.filter((cartItem) => cartItem.item.id !== item.id);
        setCart([...newCart, { item, counter: newQ }]);
      }else{
        console.log("stock insuficiente")
      }
      
    } else {
      setCart([...cart, { item, counter }]);
    }
  };

  const removeItem = (id) => {
    const newItem = cart.filter(({ item }) => item.id !== id);
    setCart(newItem);
  };

  const clearCart = () => setCart([]);

  const getSubtotal = (counter, price) => {
    let result = counter * price;
    return result;
  };

  function sumar(lista) {
    let resultado = 0;
    for (let i = 0; i < lista.length; i++) {
      resultado += lista[i];
    }
    return resultado;
  }

  const getTotal = () => {
    let subtotales = cart.map((item) => item.counter * item.item.price);
    return sumar(subtotales);
  };

  const itemQuantity = () => {
    let q = cart?.map((item) => item.counter ?? 0);
    let result = sumar(q);
    return result;
  };

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clearCart,
        cart,
        setCart,
        getSubtotal,
        getTotal,
        itemQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};



/* import{createContext, useState} from 'react' 

export const CartContext = createContext()

export const ShoppingCartContext = ({children}) =>{

    const [cart, setCart] =useState([])

    const itemQuantity = cart.length

    return(
        <CartContext.Provider value={{cart, setCart, itemQuantity}}>
            {children}
        </CartContext.Provider>
    )
}   

export default ShoppingCartContext */