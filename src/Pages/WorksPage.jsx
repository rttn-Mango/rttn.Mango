import { useNavigate } from "react-router-dom"
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
    const navigate = useNavigate();

    //To change document title once the Component mounts
    useEffect( () => {
        document.title = "Works • koma";

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
                    delay: 2.5,
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
                    <section className="works-page__minify">
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
                                        <div role="link" title="read more about minify" 
                                            onClick={e => {e.preventDefault(); navigate('/works/minify'); setHoverContent({...hoverContent, shouldBeDisabled: false, elementToRender: null, height: 25, width: 25})}} 
                                            onMouseEnter={() => setHoverContent({...hoverContent ,shouldBeDisabled: true})} 
                                            onMouseLeave={() => setHoverContent({...hoverContent, shouldBeDisabled: false})}
                                        >
                                            read more <TiltedArrow/> </div>
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

                        <section className="works-page__minify--tldr">
                            <h3>tl;dr</h3>
                            <p>Minify is a site which offers two features: image <span>compression</span> as well as image <span>format conversion</span>. The image compression utilizes the Tinify API. On the other hand, the format conversion uses the Cloudmersive API. However, I have limited the supported formats for conversion to just JPEG, PNG, and WebP to simplify the process.</p>
                            <p>I decided to create this project mainly because I felt like I need those functionalities to be easily accessible. While there are numerous sites offering similar if not same services, they&apos;re commonly convoluted and some are even difficult to navigate, if not behind a paywall which is why I decided to make a site which I can easily use.</p>
                        </section>
                    </section>

                    <section className="works-page__shortly">
                        <section className="works-page__card">
                            <a href="https://sh0rtly.vercel.app/" title="Check out shortly"
                                onClick={() => {navigate('/works/minify');setHoverContent({...hoverContent, shouldBeDisabled: false, elementToRender: null, height: 25, width: 25})}}
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
                                        <div role="link" title="read more about Shortly"
                                            onClick={() => {navigate('/works/shortly'); setHoverContent({...hoverContent, shouldBeDisabled: false, elementToRender: null, height: 25, width: 25})}} 
                                            onMouseEnter={() => setHoverContent({...hoverContent ,shouldBeDisabled: true})} 
                                            onMouseLeave={() => setHoverContent({...hoverContent, shouldBeDisabled: false})}
                                        >
                                            read more <TiltedArrow/> </div>
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

                        <section className="works-page__shortly--tldr">
                            <h3>tl;dr</h3>
                            <p>Shortly is a simple URL - Shortening website which was based from <a href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G">this challenge</a> on frontendmentor. The original challenge was just a simple landing page which is why I made some changes and additions to the layout in order to make it a little more challenging. I also replaced the original API with a different one from bit.ly as the first one stopped working so I had to find a replacement.</p>
                            <p>Before minify, this was my biggest project, which I know, isn&apos;t really that much. One of the differences tho is that I didn&apos;t use Figma for this project when I was doing the layout for the other pages as I didn&apos;t know about it at that time.</p>
                        </section>
                    </section>
                </div>

                <Contact/>
            </main>
        </PageTransitionWrapper>
    )
}