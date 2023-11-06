import React from "react";
import { useState, useEffect, useCallback } from "react";
import Lenis from '@studio-freight/lenis';
import { AnimatePresence, motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

//Components
import Preloader from "./Pages/Preloader";
import Hero from "./Pages/Hero";
import About from './Pages/About';
import Projects from './Pages/Projects'
import Contact from './Pages/Contact';
import Notification from "./Components/Notification";
import Header from './Components/Header';
import Footer from "./Components/Footer";
import NavPanel from './Components/NavPanel';
import ContactForm from "./Components/ContactForm";
import Close from "./svg/Close";
import Burger from './svg/Burger';

//Hooks
import { useShowNotifProvider } from "./hooks/UseSetMessage";

function App() {
  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [sendMessage, setSendMessage] = useState(false);
  const { showNotif } = useShowNotifProvider();

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

  //For Showing Notification once Message has been sent
  const notif = useCallback(() => {
    const notif = document.querySelector('.notif')  

      if(showNotif) notif.classList.add('active')

      setTimeout(()=>{
        notif.classList.remove('active')
      },3000)
  },[showNotif])

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

  useEffect(()=>{
    notif()
  },[notif])

  useEffect(() => {
    showFormPopup();
  },[showFormPopup])

  useEffect(()=> {
    handleNav()
  }, [handleNav])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo('.burger', {opacity: 0},{
      opacity: 1,
      transition: {
        duration: .5,
        ease: [[0.76, 0, 0.24, 1]],
      },
      scrollTrigger: {
        trigger: '.hero',
        scrub: 1,
        start: 'center 20%'
      }
    })
  },[]) 

  //Smooth scrolling effect
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);
  }, [])

  return (
      <AnimatePresence>
        {loading 
          ? 
            <motion.div key='loading-anim'>
              <Preloader content="rttn.Mango" setLoading={setLoading}/>
            </motion.div>
          : 
            <React.Fragment key='primary-content'>
              <Header setShowNav={setShowNav} showNav={showNav}/>
              <main>
                <Hero/>
                <About/>
                <Projects showNav={showNav}/>
                <Contact setSendMessage={setSendMessage} showNav={showNav}/>
              </main>
              <Footer/>
            </React.Fragment>
          }

          <React.Fragment key='side-contents'>
            {sendMessage ? <ContactForm setSendMessage={setSendMessage}/> : null}

            <div className="burger">
              {
                  showNav ?
                  <Link to='/' title="Back to Page" className="close" onClick={()=>setShowNav(false)}><Close/></Link> : 
                  <Link to='/' title="Click to open Navigation Panel" id="burger" onClick={()=>{setShowNav(true)}}><Burger/></Link>
              }
            </div>

            <nav className={showNav ? 'nav show' : 'nav hidden'} id="nav">
              <NavPanel setShowNav={setShowNav}/>
            </nav>

            <Notification/>
          </React.Fragment>
      </AnimatePresence>
  )
}

export default App
