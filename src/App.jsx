import { useState } from 'react'

import './App.css'
import Header from './Header/Header'
import Home from './Home/Home';
import Recipe from "./Recipe/Recipe";
import About from './About/About';
import Community from './Community/Community';
import Cta from './CTA/Cta';
import Footer from './Footer/Footer';

function App() {
  const [count, setCount] = useState();

  return (
    <>
      <Header />
      <Home />
      <Recipe />
      <About />
      <Community />
      <Cta />
      <Footer />
    </>
  )
}

export default App