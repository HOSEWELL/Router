import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import NavBar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <NavBar/>
    
    </>
  )
}

export default App
