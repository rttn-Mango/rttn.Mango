import { IoArrowDownOutline } from "react-icons/io5";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLoadingContext } from "../../hooks/useLoadingContext";
import useHoverContentContext from "../../hooks/useHoverContentContext";

export default function Hero(){
    const {loading} = useLoadingContext();
    const {hoverContent, setHoverContent} = useHoverContentContext();

    useEffect(() =>{

        gsap.registerPlugin(ScrollTrigger);

        //Makes the animation only run when user doesn't disable animations
        gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
            //This allows the animation to still run even when user is tabbed somewhere else
            gsap.ticker.lagSmoothing(0);

            gsap.to('.hero .wrapper', {
                y: '-2dvw',
                ease: 'power2',
                opacity: .3,
                scale: .90,
                scrollTrigger: {
                    trigger: '.hero .wrapper',
                    start: 'top top',
                    end: '130%',
                    scrub: 3,
                    pin: true,
                }
            })

            if(!loading){
                gsap.set('.hero h1 span, .hero .subHeading span', {y: 300, opacity: 0})

                gsap.to('.hero h1 span, .hero .subHeading span', {
                    y: 0,
                    opacity: 1,
                    duration: .7,
                    stagger: .1,
                })

                gsap.fromTo('.hero__bottom p', {x: -100, opacity: 0} ,{
                    x: 0,
                    opacity: 1,
                    delay: 1.5,
                    duration: .6
                })

                gsap.fromTo('.hero__bottom--scrollTo', {x: 100, opacity: 0} ,{
                    x: 0,
                    opacity: 1,
                    delay: 1.5,
                    duration: .6
                })
            }
        })

    }, [loading])

    return(
            <section className="hero">
                <div className="wrapper">
                    <h1 aria-label='Developer'>
                        {
                            'Developer'.split('').map((char, index) => <span key={index} >{char}</span> )
                        }
                    </h1>
                    <p className="subHeading" aria-label="Front-end">
                        {
                            'Front-end'.split('').map((char, index) => <span key={index} >{char}</span> )
                        }
                    </p>

                    <div className="hero__bottom">
                        <p aria-label="Hit me up for offers or collaborations">Hit me up for — <br/> offers or collabs</p>
                        <div className="hero__bottom--scrollTo" onClick={() => window.scrollTo(window.innerHeight, window.innerHeight)} onMouseEnter={() => setHoverContent({...hoverContent ,shouldBeDisabled: true})} onMouseLeave={() => setHoverContent({...hoverContent, shouldBeDisabled: false})}>
                            <IoArrowDownOutline/>
                        </div>
                    </div>
                </div>
            </section>
    )
}