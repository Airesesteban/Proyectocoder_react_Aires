import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Cart from './components/Cart'
import ShoppinCartContext from './context/ShoppingCartContext'
import Cartwidget from './components/Cartwidget'

const App = () => {
  return (
    <BrowserRouter>
      <ShoppinCartContext>
          <Cartwidget />  {/* revisar */}
          <ItemCount/>    {/* revisar */}
      </ShoppinCartContext>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/category/:category" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App