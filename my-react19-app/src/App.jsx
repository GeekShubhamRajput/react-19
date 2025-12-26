import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome.jsx'
import Product from './components/Product.jsx'
import Greeting from './components/Greeting'
import UserCard from './components/UserCard.jsx'
import CardWrapper from './components/CardWrapper.jsx'
import { Userdetails } from './components/UserDetails.jsx'
import { UserDetail } from './components/Userdetail.jsx'
import { ProductList } from './components/ProductList.jsx'
import { UserList } from './components/UserList.jsx'

function App() {
  return (
    <>
      <UserList />
      <ProductList />
    </>
  )
}

export default App
