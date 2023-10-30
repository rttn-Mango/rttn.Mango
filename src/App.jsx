import { useState, useEffect, useCallback } from "react";
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
import ContactForm from "./Pages/Components/ContactForm";

function App() {
  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [sendMessage, setSendMessage] = useState(false);

  const showFormPopup = useCallback(() => {
    const formModal = document.getElementById('modal');
    if(formModal === null) return;


    if(sendMessage) {
      formModal.showModal();
    }else{
      formModal.close();
    }
  },[sendMessage])

  useEffect(() => {
    showFormPopup();
  },[showFormPopup])

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
            <Contact setSendMessage={setSendMessage}/>
          </main>
          <Footer/>
        </>  
      }

      {sendMessage ? <ContactForm setSendMessage={setSendMessage}/> : null}

      {
        showNav ? <NavPanel setShowNav={setShowNav}/> : null
      }
      
    </>
  )
}

export default App
