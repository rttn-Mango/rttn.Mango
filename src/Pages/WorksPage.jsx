import { Link } from "react-router-dom"
import { useEffect } from "react";
import PageTransitionWrapper from "./PageTransitionWrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLoadingContext } from "../hooks/useLoadingContext";
import useHoverContentContext from "../hooks/useHoverContentContext";

//Component
import Contact from "../Components/Contact";

//Images
import minify from '../assets/Minify.png';
import minifyMobile from '../assets/MinifyMobile.png';
import minifyTablet from '../assets/MinifyTablet.png';
import shortly from '../assets/Shortly.png';
import shortlyMobile from '../assets/ShortlyMobile.png'
import shortlyTablet from '../assets/ShortlyTablet.png'

//Icon
import TiltedArrow from "../svg/TiltedArrow";

export default function WorksPage(){
    const {hoverContent, setHoverContent} = useHoverContentContext();
    const {loading} = useLoadingContext();

    //To change document title once the Component mounts
    useEffect( () => {
        document.title = "Works";

        gsap.registerPlugin(ScrollTrigger);

        //This allows the animation to still run even when user is tabbed somewhere else
        gsap.ticker.lagSmoothing(0);

        //Makes the animation only run when user doesn't disable animations
        gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
            if(!loading){                
                gsap.fromTo('.h1__staggered span, .h1__word1 span', {y: 500, opacity: 0}, {
                    y: 0,
                    opacity: 1,
                    stagger: .1,
                    delay: 3.3,
                    duration: .5,
                })

                if(window.innerWidth < 1500){
                    gsap.set('.works-page__card', {opacity: 0})
                    gsap.to('.works-page__card', {opacity: 1, delay: 4})
                }
                else{
                    gsap.fromTo('.works-page__card', {opacity: 0, scale: 0}, {
                        opacity: 1,
                        scale: 1,
                        duration: .7,
                        scrollTrigger: {
                            trigger: '.works-page .flex-wrapper',
                            start: 'top bottom',
                            end: '30% bottom',
                            scrub: 2,
                        }
                    })
                }
            }
        })
    }, [loading])

    return(
        <PageTransitionWrapper>
            <main className="works-page">
                <h1 aria-label="Recent Works"><span className="h1__word1">{'Recent'.split('').map((char, index) => <span key={index}>{char}</span>)}</span> <span className="h1__staggered" >{'Works'.split('').map((char, index) => <span key={index}>{char}</span>)}</span></h1>

                <div className="flex-wrapper">
                    <section className="works-page__card">
                        <a href="https://minifyy.vercel.app/" title="Check out minify"
                            onClick={() => {setHoverContent({...hoverContent, shouldBeDisabled: false, elementToRender: null, height: 25, width: 25})}}
                            onMouseEnter={() => setHoverContent({...hoverContent, isHovered: true, elementToRender: 'minify-link', height: 160, width: 160})}
                            onMouseLeave={() => setHoverContent({...hoverContent, isHovered: false, elementToRender: null, height: 25, width: 25})}
                        >
                            <picture>
                                <source srcSet={minifyMobile} media="(max-width: 700px)"/>
                                <source srcSet={minifyTablet} media="(width > 700px) and (width < 1080px)"/>
                                <img src={minify} alt="Minify Hero Section" draggable='false' width={1430} height={750}/>
                            </picture>

                            <section className="works-page__card--desc">
                                <div className="desc__row">
                                    <h2>minify</h2>
                                    <Link to='/works/minify' title="read more about minify" 
                                        onClick={() => {setHoverContent({...hoverContent, shouldBeDisabled: false, elementToRender: null, height: 25, width: 25})}} 
                                        onMouseEnter={() => setHoverContent({...hoverContent ,shouldBeDisabled: true})} 
                                        onMouseLeave={() => setHoverContent({...hoverContent, shouldBeDisabled: false})}
                                    >
                                        read more <TiltedArrow/> </Link>
                                </div>
                                <div className="desc__row">
                                    <p>Designer & Developer</p>

                                    <div className="desc__row--stack">
                                        <p>React</p>
                                        <p>SASS</p>
                                        <p>Figma</p>
                                    </div>
                                </div>
                            </section>
                        </a>
                    </section>

                    <section className="works-page__card">
                        <a href="https://sh0rtly.vercel.app/" title="Check out shortly"
                            onClick={() => {setHoverContent({...hoverContent, shouldBeDisabled: false, elementToRender: null, height: 25, width: 25})}}
                            onMouseEnter={() => setHoverContent({...hoverContent, isHovered: true, elementToRender: 'shortly-link', height: 160, width: 160})}
                            onMouseLeave={() => setHoverContent({...hoverContent, isHovered: false, elementToRender: null, height: 25, width: 25})}
                        >
                            <picture>
                                <source srcSet={shortlyMobile} media="(max-width: 700px)"/>
                                <source srcSet={shortlyTablet} media="(width > 700px) and (width < 1080px)"/>
                                <img src={shortly} alt="Minify Hero Section" draggable='false' width={1430} height={750}/>
                            </picture>

                            <section className="works-page__card--desc">
                                <div className="desc__row">
                                    <h2>Shortly</h2>
                                    <Link to='/works/shortly' title="read more about Shortly"
                                        onClick={() => {setHoverContent({...hoverContent, shouldBeDisabled: false, elementToRender: null, height: 25, width: 25})}} 
                                        onMouseEnter={() => setHoverContent({...hoverContent ,shouldBeDisabled: true})} 
                                        onMouseLeave={() => setHoverContent({...hoverContent, shouldBeDisabled: false})}
                                    >
                                        read more <TiltedArrow/> </Link>
                                </div>
                                <div className="desc__row">
                                    <p>Developer</p>

                                    <div className="desc__row--stack">
                                        <p>React</p>
                                        <p>SASS</p>
                                    </div>
                                </div>
                            </section>
                        </a>
                    </section>
                </div>

                <Contact/>
            </main>
        </PageTransitionWrapper>
    )
}