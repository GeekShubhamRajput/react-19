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
import { Alert } from './components/Alert.jsx'
import { AlertWithExtCss } from './components/AlertWithExtCss.jsx'
import { RedButton } from './components/RedButton.jsx'
import { Notification } from './components/Notification.jsx'
import { LikeBotton } from './components/LikeButton.jsx'
import { CustomButton } from './components/CustomButton.jsx'
import { Contact } from './components/Contact.jsx'
import { NewsLetter } from './components/NewsLetter.jsx'
import { Menu } from './components/Menu.jsx'
import { Counter } from './components/Counter.jsx'
import { LoggedInCard } from './components/LoggedInCard.jsx'
import { PrevStateCounter } from './components/PrevStateCounter.jsx'
import { BatchingCounter } from './components/BatchingCounter.jsx'

function App() {
  return (
    <>
      <BatchingCounter />
    </>
  )
}

export default App
