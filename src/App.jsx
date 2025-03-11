import { useState } from 'react'
import './App.css'
import Header from './Header/Header'

function App() {
  const [count, setCount] = useState();

  return (
    <>
      <Header />
    </>
  )
}

export default App