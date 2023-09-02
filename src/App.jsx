import React from 'react'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import {CartProvider as ShoppingCartContext} from './context/ShoppingCartContext'
import SendOrder from './components/SendOrder'

const App = () => {
  return (
    <BrowserRouter>
      <ShoppingCartContext>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
          <Route exact path="/checkout" element={<SendOrder />} />
        </Routes>
      </ShoppingCartContext>
    </BrowserRouter> 
  ) 
}

export default App