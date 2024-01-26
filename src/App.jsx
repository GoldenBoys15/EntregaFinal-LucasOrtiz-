import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar.jsx'
import Cart from './components/Cart'
import React from 'react'
import CartProvider from './context/CartContext'
import { Flex } from '@chakra-ui/react';
import Formulario from './components/Formulario.jsx';

const App = () => {
  return (
  <CartProvider>
    <BrowserRouter>
      <NavBar />  
      <Routes>
        <Route exact path="/" element={ <Flex direction="row" justify="center" align="center" ><ItemListContainer /></Flex>} />
        <Route exact path='/carrito' element={<Cart />} />
        <Route path="/item/:id" element={<Flex justify="center" align="center" direction="row"> <ItemDetailContainer /></Flex>} />
        <Route path="/category/:categoria" element={ <Flex justify="center" align="center"><ItemListContainer /> </Flex>} />
        <Route exact path='/pedido' element={<Formulario />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App;
