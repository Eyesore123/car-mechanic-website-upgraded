import './Styles.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Products from './pages/Products'

function App() {

  return (
    <div className='bg-cyan-300 h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/galleria" element={<Gallery />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
