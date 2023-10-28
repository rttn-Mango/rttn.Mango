import { useState, useEffect } from "react";

//Components
import Preloader from "./Pages/Preloader";
import Header from "./Pages/Components/Header";
import Hero from "./Pages/Hero";
import About from './Pages/About';
import Projects from './Pages/Projects'
import Contact from './Pages/Contact';
import Footer from './Pages/Components/Footer';
import Lenis from '@studio-freight/lenis'

function App() {
  const [loading, setLoading] = useState(true);

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
          <Header/>
          <main>
            <Hero/>
            <About/>
            <Projects/>
            <Contact/>
          </main>
          <Footer/>
        </>  
      }
      
    </>
  )
}

export default App
