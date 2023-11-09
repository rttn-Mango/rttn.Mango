import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Lenis from '@studio-freight/lenis';
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

//Components
import Preloader from "./Pages/Preloader";
import Homepage from "./Pages/Homepage";
import Header from './Components/Header';
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import WorksPage from "./Pages/WorksPage";
import ThanksPage from "./Pages/ThanksPage";

import Footer from "./Components/Footer";
import NavPanel from './Components/NavPanel';
import Close from "./svg/Close";
import Burger from './svg/Burger';

function App() {
  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(false);

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

  useEffect(()=> {
    handleNav()
  }, [handleNav])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const hero = document.querySelector('.hero')

    gsap.fromTo('.burger', {scale: 0, opacity: 0},{
      scale: 1,
      opacity: 1,
      transition: {
        duration: .5,
        ease: [[0.76, 0, 0.24, 1]],
      },
      scrollTrigger: {
        trigger: hero,
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
                <Route path="/works" element={<WorksPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/thanks" element={<ThanksPage/>}/>
              </Routes>
              <Footer/>
            </React.Fragment>
          }

          <React.Fragment key='side-contents'>
            <div className="burger">
              {
                  showNav ?
                  <span className="close" onClick={()=>setShowNav(false)}><Close/></span> : 
                  <span id="burger" onClick={()=>{setShowNav(true)}}><Burger/></span>
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
