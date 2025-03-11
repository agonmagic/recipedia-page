import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Home from './Home/Home';

function App() {
  const [count, setCount] = useState();

  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default App