import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/Pages/Home'
import Products from './assets/Pages/Products'
import Productsdetails from './assets/Pages/Productsdetails'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Productsdetails />} />
      </Routes>
    </div>
  )
}

export default App