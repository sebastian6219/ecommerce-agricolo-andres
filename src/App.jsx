import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header/Header'

import Aside from './components/Aside/Aside'

import { CartContextProvider } from './context/CartContext'

import ItemListContainer from './components/Aside/Content/ItemsListContainer';
import { ItemDetailContainer } from './components/Aside/Content/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Aside/Content/cart/Cart'
import Checkout from './components/Aside/Content/cart/checkout/Checkout'

function App() {


  return (
    <>

      <CartContextProvider>

        <BrowserRouter>

          <Header/>

          <Routes>

            <Route path='/' element={<Aside/>}></Route>
            <Route path='/categoria/:categoryName' element={<ItemListContainer />} />
            <Route path='/detalle/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/cart/checkout' element={<Checkout/>}/>
            <Route path='/*' element={<h1>No se que hiciste pero Rompiste Todo</h1>} />

          </Routes>

        </BrowserRouter>

      </CartContextProvider>
    </>
  )
}

export default App
