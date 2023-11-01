import { useState, useEffect, useCallback } from "react";
import Lenis from '@studio-freight/lenis';

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

    window.addEventListener('keydown', (event) =>{if(event.key === 'Escape') setSendMessage(false)})

    if(sendMessage) {
      formModal.showModal();
    }else{
      formModal.close();
    }
  },[sendMessage])

  //For disabling background actions when nav is opened, e.g. scrolling and tab navigation
  const handleNav = useCallback(() => {
    if(showNav) {
      document.body.addEventListener('wheel',(e)=>{
        e.stopPropagation();
      })
      document.body.classList.add('disabled');
    }
    else{document.body.classList.remove('disabled');}
  },[showNav])

  useEffect(() => {
    showFormPopup();
  },[showFormPopup])

  useEffect(()=> {
    handleNav()
  }, [handleNav])

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
          <Header setShowNav={setShowNav} showNav={showNav}/>
          <main>
            <Hero/>
            <About/>
            <Projects showNav={showNav}/>
            <Contact setSendMessage={setSendMessage} showNav={showNav}/>
          </main>
          <Footer/>
        </>  
      }

      {sendMessage ? <ContactForm setSendMessage={setSendMessage}/> : null}

      <nav className={showNav ? 'nav show' : 'nav hidden'} id="nav">
        <NavPanel setShowNav={setShowNav}/>
      </nav>
    </>
  )
}

export default App
