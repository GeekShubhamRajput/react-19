import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome.jsx'
import Product from './components/Product.jsx'
import Greeting from './components/Greeting'
import UserCard from './components/UserCard.jsx'
import CardWrapper from './components/CardWrapper.jsx'

function App() {
  return (
    <>
      <CardWrapper title="React JS"> React is JS library</CardWrapper> 
      <UserCard name="Clark" age={32} email="clark@gmail.com" />
      <Greeting />
      <Greeting message="Good morning" name="Clark"/>
      <Greeting message="Good morning"/>
      <Greeting name="Sam"/>
      <Welcome name="Shubham" />
      <Welcome name="Clark" />
      <Welcome name="Diana" />
      <Product name="Laptop" price={9999} isAvailable={true} categories={['Electronics', 'Computer', 'Gaming']} />
    </>
  )
}

export default App
