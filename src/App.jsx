import { useState } from 'react'

import './App.css'
import Header from './Header/Header'
import Home from './Home/Home';
import Recipe from "./Recipe/Recipe";

function App() {
  const [count, setCount] = useState();

  return (
    <>
      <Header />
      <Home />
      <Recipe />
    </>
  )
}

export default App