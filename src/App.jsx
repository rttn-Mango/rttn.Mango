import { useState, useEffect } from "react";
import Lenis from '@studio-freight/lenis'

//Components
import Preloader from "./Pages/Preloader";
import Header from "./Pages/Components/Header";
import Hero from "./Pages/Hero";
import About from './Pages/About';
import Projects from './Pages/Projects'
import Contact from './Pages/Contact';
import Footer from './Pages/Components/Footer';
import NavPanel from "./Pages/Components/NavPanel";

function App() {
  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(false);

  //Smooth scrolling effect
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      {loading 
        ? <Preloader content="rttn.Mango" setLoading={setLoading}/>
        : 
        <>
          <Header setShowNav={setShowNav}/>
          <main>
            <Hero/>
            <About/>
            <Projects/>
            <Contact/>
          </main>
          <Footer/>
        </>  
      }

      {
        showNav ? <NavPanel setShowNav={setShowNav}/> : null
      }
      
    </>
  )
}

export default App
