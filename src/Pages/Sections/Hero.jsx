import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ScrollToIcon from '../../svg/ScrollTo'

export default function Hero(){
    const wrapper = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        //Makes the animation only run when user doesn't disable animations
        gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
            gsap.to(wrapper.current, {
                y: '-2dvw',
                ease: 'power2',
                opacity: .3,
                scrollTrigger: {
                    trigger: wrapper.current,
                    start: 'top top',
                    end: '130%',
                    scrub: true,
                    pin: true,
                }
            })
        })  
    }, [])

    return(
            <section className="hero">
                <div className="wrapper" ref={wrapper}>
                    <h1 aria-label='Developer'>Devel<div className='img'>o</div>per</h1>
                    <p className="subHeading">Front-end</p>

                    <div className="hero__bottom">
                        <p aria-label="Hit me up for offers or collaborations">Hit me up for — <br/> offers or collabs</p>
                        <div className="hero__bottom--scrollTo" >
                            <ScrollToIcon/>
                        </div>
                    </div>
                </div>
            </section>
    )
}