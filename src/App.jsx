import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Lenis from '@studio-freight/lenis';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ScaleLoader from 'react-spinners/ScaleLoader';

//Pages
import Preloader from "./Pages/Preloader";
import Homepage from "./Pages/Homepage";

//Lazy loaded Pages
const AboutPage = lazy(() => import("./Pages/AboutPage"))
const ContactPage = lazy(() => import("./Pages/ContactPage"))
const WorksPage = lazy(() => import("./Pages/WorksPage"))

//Components
import Header from './Components/Header';
import Footer from "./Components/Footer";
import NavPanel from './Components/NavPanel';
import Close from "./svg/Close";
import Burger from './svg/Burger';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [fromHeader, setFromHeader] = useState(false);

  //For disabling background actions when nav is opened or still loading, e.g. scrolling and tab navigation
  useEffect(()=> {
    const handleNav = () => {
      if(showNav || loading) {
        document.body.addEventListener('wheel',(e)=>{e.stopPropagation()})
        document.body.classList.add('disabled');
      }
      else{document.body.classList.remove('disabled')}
    }

    handleNav()
  }, [showNav, loading])

  //Burger menu animation to appear when user scrolls a certain amount
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
      const hero = document.getElementById('#trigger')

      gsap.fromTo('.burger', {scale: 0, opacity: 0},{
        scale: 1,
        opacity: 1,
        ease: 'back.out',
        scrollTrigger: {
          trigger: hero,
          scrub: true,
          start: 'top top',
          end: '5%',
        }
      })
  },[]) 

  //Smooth scrolling effect
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      if(!loading){
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
    }

    requestAnimationFrame(raf);
  }, [loading])

  return (
      <>
            <div className={loading ? "preloader" : 'preloader removed'}>
              <Preloader content="Kim.Oliver.Manga" setLoading={setLoading}/>
            </div>
        
            <>
              <>
                <Header setShowNav={setShowNav} showNav={showNav} setFromHeader={setFromHeader}/>
                  <Suspense fallback={<span aria-hidden="true" className="loading-fallback"><ScaleLoader color="#fff" size={100}/></span>}>
                    <Routes>
                      <Route index path="/" element={<Homepage/>}/>
                      <Route path="/about" element={<AboutPage/>}/>
                      <Route path="/works" element={<WorksPage/>}/>
                      <Route path="/contact" element={<ContactPage/>}/>
                    </Routes>
                  </Suspense>
                <Footer/>
              </>

                <>
                  {/* Floating Burger Menu which appears when header is not in view */}
                  <div className="burger" aria-hidden="true">
                    {
                        showNav ? <div onClick={()=>setShowNav(false)}><Close/></div> 
                        : <div onClick={()=>{setShowNav(true)}}><Burger/></div>
                    }
                  </div>

                  <nav className={showNav ? 'nav show' : 'nav hidden'} id="nav">
                    <NavPanel setShowNav={setShowNav} fromHeader={fromHeader} setFromHeader={setFromHeader}/>
                  </nav>
                </>
            </> 
          <Analytics/>
      </>
  )
}

export default App
