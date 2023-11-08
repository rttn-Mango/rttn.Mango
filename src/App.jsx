import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Lenis from '@studio-freight/lenis';
import { AnimatePresence, motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

//Components
import Preloader from "./Pages/Preloader";
import Homepage from "./Pages/Homepage";
import Header from './Components/Header';
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";

import Footer from "./Components/Footer";
import NavPanel from './Components/NavPanel';
import Close from "./svg/Close";
import Burger from './svg/Burger';

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
              <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/send" element={<ContactPage/>}/>
              </Routes>
              <Footer/>
            </React.Fragment>
          }

          <React.Fragment key='side-contents'>
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

          </React.Fragment>
      </AnimatePresence>
  )
}

export default App
