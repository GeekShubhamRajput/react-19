import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome.jsx'
import Product from './components/Product.jsx'

function App() {
  return (
    <>
      <Welcome name="Shubham" />
      <Welcome name="Clark" />
      <Welcome name="Diana" />
      <Product name="Laptop" price={9999} isAvailable={true} categories={['Electronics', 'Computer', 'Gaming']} />
    </>
  )
}

export default App
