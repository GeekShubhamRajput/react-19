import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome.jsx'

function App() {
  return (
    <>
      <Welcome name="Shubham" />
      <Welcome name="Clark" />
      <Welcome name="Diana" />
    </>
  )
}

export default App
