import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Lenis from '@studio-freight/lenis';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ScaleLoader from 'react-spinners/ScaleLoader';
import { useThemeContext } from "./hooks/useThemeContext";
import { useLoadingContext } from "./hooks/useLoadingContext";

//Pages
import Preloader from "./Pages/Preloader";
import Homepage from "./Pages/Homepage";
import NotFound from "./Pages/NotFound";
import Minify from './Pages/Works/minify';
import Shortly from './Pages/Works/shortly';

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
  const {loading, setLoading} = useLoadingContext();
  const [showNav, setShowNav] = useState(false);
  const [fromHeader, setFromHeader] = useState(false);
  const {changePalette, setChangePalette} = useThemeContext();

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

  //To switch the values of custom properties when light or dark mode is toggled
  useEffect(() => {
    const changeTheme = () => {

      if(changePalette) {
        document.body.style.setProperty('--clr-txt', 'hsl(30, 15%, 5%)')
        document.body.style.setProperty('--clr-bg', 'hsl(30, 10%, 96%)')
        document.body.style.setProperty('--clr-primary', 'hsl(29, 58%, 15%)')
        document.body.style.setProperty('--clr-secondary', 'hsl(194, 48%, 17%)')
      }
      else{
        document.body.style.setProperty('--clr-txt', 'hsl(30, 15%, 95%)')
        document.body.style.setProperty('--clr-bg', 'hsl(210, 10%, 4%)')
        document.body.style.setProperty('--clr-primary', 'hsl(30, 48%, 75%)')
        document.body.style.setProperty('--clr-secondary', 'hsl(194, 53%, 78%)')
      }
    }

    changeTheme();
  }, [changePalette])

  return (
      <>
        <div className={loading ? "preloader" : 'preloader removed'}>
          <Preloader content="Kim.Oliver.Manga" setLoading={setLoading}/>
        </div>

        <Header setShowNav={setShowNav} showNav={showNav} setFromHeader={setFromHeader} changePalette={changePalette} setChangePalette={setChangePalette}/>
          <Suspense fallback={<span aria-hidden="true" className="loading-fallback"><ScaleLoader color="#fff" size={100}/></span>}>
            <Routes>
              <Route index path="/" element={<Homepage loading={loading}/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/works" element={<WorksPage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>

              {/* Works page read more */}
              <Route path="/works/minify" element={<Minify/>}/>
              <Route path="/works/shortly" element={<Shortly/>}/>

              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </Suspense>
        <Footer/>

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
          <Analytics/>
      </>
  )
}

export default App
