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
                    scrub: 2,
                    pin: true,
                }
            })

            if(!loading){
                gsap.fromTo('.hero h1, .hero .subHeading',{opacity: 0} ,{
                    y: 0,
                    opacity: 1,
                    duration: .3,
                })

                gsap.fromTo('.hero__bottom p', {opacity: 0} ,{
                    opacity: 1,
                    delay: 1,
                    duration: .6
                })

                gsap.fromTo('.hero__bottom--scrollTo', {opacity: 0} ,{
                    opacity: 1,
                    delay: 1,
                    duration: .6
                })
            }
        })

    }, [loading])

    return(
            <section className="hero">
                <div className="wrapper">
                    <h1>Developer</h1>
                    <p className="subHeading">Front-end</p>

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