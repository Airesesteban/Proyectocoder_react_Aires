import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, counter) => {
    const isInCart = cart.find((cart) => cart.item.id === item.id);

    if (isInCart) {
      const newQ = isInCart.counter + counter;
      const newCart = cart.filter((cart) => cart.item.id !== item.id);
      setCart([...newCart, { item, counter: newQ }]);
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
    let q = cart.map((item) => item.counter);
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
        getSubtotal,
        getTotal,
        itemQuantity,
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