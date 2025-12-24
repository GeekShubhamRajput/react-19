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

function App() {
  return (
    <>
      <Userdetails name="James" isOnline={true} />
      <Userdetails name="Clark" isOnline={false} />
      <hr />
      <UserDetail name="Evan" isOnline={true} isPremium={true} isNewUser={false} role='admin'/>
      <UserDetail name="Ben" isOnline={false} isPremium={false} isNewUser={true} role='vip'/>
    </>
  )
}

export default App
