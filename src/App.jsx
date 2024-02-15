import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Lenis from '@studio-freight/lenis';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ScaleLoader from 'react-spinners/ScaleLoader';
import { useThemeContext } from "./hooks/useThemeContext";
import { useLoadingContext } from "./hooks/useLoadingContext";
import useHoverContentContext from "./hooks/useHoverContentContext";

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

//Icon
import TiltedArrow from "./svg/TiltedArrow";
import dp from '/dp.webp'

function App() {
  const {loading, setLoading} = useLoadingContext();
  const [showNav, setShowNav] = useState(false);
  const [fromHeader, setFromHeader] = useState(false);
  const {changePalette, setChangePalette} = useThemeContext();
  const {hoverContent, setHoverContent} = useHoverContentContext();

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
    const burger = document.querySelector('#floating-burger');

    burger.addEventListener('mousemove', e => {
      let rect = e.target.getBoundingClientRect();

      burger.style.setProperty('--_xPos', `${e.clientX - rect.left}px`)
      burger.style.setProperty('--_yPos', `${e.clientY - rect.top}px`)
      burger.style.setProperty('--_visibility', `visible`)
  })

    gsap.fromTo('#floating-burger', {scale: 0, opacity: 0},{
      scale: 1,
      opacity: 1,
      ease: 'back.out',
      scrollTrigger: {
        trigger: document.body,
        scrub: true,
        start: '3% top',
        end: '3% top',
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
        document.body.style.setProperty('--clr-txt', 'hsl(216, 100%, 3%)')
        document.body.style.setProperty('--clr-bg', 'hsl(216, 100%, 97%)')
        document.body.style.setProperty('--clr-primary', 'hsl(217, 97%, 30%)')
        document.body.style.setProperty('--clr-secondary', 'hsl(216, 56%, 74%)')
        document.body.style.setProperty('--accent', 'hsl(290, 78%, 27%)')
      }
      else{
        document.body.style.setProperty('--clr-txt', 'hsl(216, 100%, 97%)')
        document.body.style.setProperty('--clr-bg', 'hsl(216, 100%, 3%)')
        document.body.style.setProperty('--clr-primary', 'hsl(216, 56%, 74%)')
        document.body.style.setProperty('--clr-secondary', 'hsl(217, 97%, 30%)')
        document.body.style.setProperty('--accent', 'hsl(290, 22%, 73%)')
      }
    }

    changeTheme();
  }, [changePalette])

  //Gradient and Hover mouse follower
  useEffect(() => {
    gsap.set(".gradient-mouse-follower, .hover-mouse-follower", {xPercent: -50, yPercent: -50});

    //Gradient
    let xSetterGradient = gsap.quickTo('.gradient-mouse-follower',  'x', {ease: 'elastic', duration: 5});
    let ySetterGradient = gsap.quickTo('.gradient-mouse-follower',  'y', {ease: 'elastic', duration: 5});

    //Hover
    let xSetterHover = gsap.quickTo('.hover-mouse-follower',  'x', {duration: .3});
    let ySetterHover = gsap.quickTo('.hover-mouse-follower',  'y', {duration: .3});

    gsap.to('.hover-mouse-follower', {
      height: () => {
        if(hoverContent.shouldBeDisabled) return 0
        if(hoverContent.isHovered) return hoverContent.height
        //This is to reset the height back to 25 when mouse follower is hidden and user clicked a link
        else return 25
      },
      width: () => {
        if(hoverContent.shouldBeDisabled) return 0
        if(hoverContent.isHovered) return hoverContent.width
        //This is to reset the width back to 25 when mouse follower is hidden and user clicked a link
        else return 25
      },
      display: hoverContent.shouldBeDisabled || window.innerWidth < 1440 ? 'none' : 'inherit',
    })

    document.addEventListener('mousemove', e => {
      xSetterGradient(e.x);
      ySetterGradient(e.y);

      xSetterHover(e.x);
      ySetterHover(e.y);
    })

  }, [hoverContent])

  return (
      <>
        <div className={loading ? "preloader" : 'preloader removed'}>
          <Preloader content="Kim.Oliver.Manga" setLoading={setLoading}/>
        </div>

        <div className="gradient-mouse-follower" aria-hidden="true" style={{display: window.innerWidth < 1440 && 'none'}}></div>
        <div className="hover-mouse-follower" aria-hidden="true">
          {hoverContent.elementToRender === 'img' && <img src={dp} alt="image of me" draggable="false" height={25} width={25}/>}
          {hoverContent.elementToRender !== null && hoverContent.elementToRender.includes('link') && <p style={{display: hoverContent.shouldBeDisabled || window.innerWidth < 1440 ? 'none' : 'inline-flex'}} className="minify-hover">Visit {hoverContent.elementToRender === 'minify-link' ? 'OptiMG' : 'shortly'} <TiltedArrow/> </p>}
          {hoverContent.elementToRender === 'resume' && <span className="resume-hover">Download resume <TiltedArrow/></span>}
          {hoverContent.elementToRender !== null && hoverContent.elementToRender.includes('awwwards') && <p className="resume-hover">{hoverContent.elementToRender.includes('vucko') ? 'Vucko' : hoverContent.elementToRender.includes('huy') ? 'Huy Phan' : 'Bright Studios'} awwwards <TiltedArrow/></p>}
        </div>

        <Header setShowNav={setShowNav} showNav={showNav} setFromHeader={setFromHeader} changePalette={changePalette} setChangePalette={setChangePalette} setHoverContent={setHoverContent} hoverContent={hoverContent} fromHeader={fromHeader}/>
          <Suspense fallback={<span aria-hidden="true" className="loading-fallback"><ScaleLoader color="#fff" size={100}/></span>}>
            <Routes>
              <Route index path="/" element={<Homepage loading={loading}/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/works" element={<WorksPage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>

              {/* Works page read more. I didn't nest it because of animation conflicts */}
              <Route path="/works/minify" element={<Minify/>}/>
              <Route path="/works/shortly" element={<Shortly/>}/>

              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </Suspense>
        <Footer/>

        {/* Floating Burger Menu which appears when header is not in view */}
        <div className="burger" id='floating-burger' aria-hidden="true" tabIndex={-1} onMouseEnter={() => setHoverContent({...hoverContent ,shouldBeDisabled: true})} onMouseLeave={() => setHoverContent({...hoverContent, shouldBeDisabled: false})}>
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
