import { useLoadingContext } from "../hooks/useLoadingContext";
import { useEffect } from "react";
import Contact from "../Components/Contact";
import PageTransitionWrapper from "./PageTransitionWrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Image
import me from '../assets/me.svg'

//Icons
import { MdOutlineDesignServices } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";


export default function AboutPage(){
    const {loading} = useLoadingContext();

    useEffect( () => {
        document.title = "About";

        gsap.registerPlugin(ScrollTrigger);

        //Makes the animation only run when user doesn't disable animations
        gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
            if(!loading){                
                gsap.fromTo('.h1__line1, .h1__last-word', {x: 2000, opacity: 0} ,{
                    opacity: 1,
                    x: 0,
                    delay: 3,
                    duration: 1,
                    ease: 'sine.out'
                })

                gsap.fromTo('.h1__stagger span', {y: 500, opacity: 0}, {
                    y: 0,
                    opacity: 1,
                    stagger: .1,
                    delay: 3.3,
                    duration: .5,
                })
            }

            gsap.to('.about-page__profile .wrapper', {
                y: '-2dvw',
                ease: 'power2',
                opacity: .3,
                scale: .90,
                scrollTrigger: {
                    trigger: '.about-page__profile .wrapper',
                    start: 'top top',
                    end: '130%',
                    pin: true,
                    scrub: 2,
                }
            })

            gsap.fromTo('.about-page__design-style h2, .about-page__design-style--desc', {opacity: 0}, {
                opacity: 1,
                duration: .7,
                scrollTrigger: {
                    trigger: '.about-page__design-style',
                    start: 'top bottom',
                    end: '40% bottom',
                    scrub: 2,
                }
            })

            gsap.fromTo('.about-page__design-style--sample', {opacity: 0, x: 590}, {
                opacity: 1,
                x: 0,
                duration: .7,
                scrollTrigger: {
                    trigger: '.about-page__design-style--sample',
                    start: 'top bottom',
                    end: 'center bottom',
                    scrub: 2,
                }
            })

            gsap.fromTo('.about-page__niche h2', {opacity: 0}, {
                opacity: 1,
                duration: .7,
                stagger: .1,
                scrollTrigger: {
                    trigger: '.about-page__niche',
                    start: 'top bottom',
                    end: '30% bottom',
                    scrub: 2,
                }
            })

            gsap.fromTo('.field__dev, .field__design', {opacity: 0, y: -500}, {
                opacity: 1,
                y: 0,
                duration: .7,
                scrollTrigger: {
                    trigger: '.about-page__niche--field',
                    start: 'top bottom',
                    end: 'center bottom',
                    scrub: 2,
                }
            })
        })
    }, [loading])

    return(
        <PageTransitionWrapper>
            <main className="about-page">
                <h1 aria-label="Crafting seamless, user-friendly sites."><span className="h1__line1">Crafting seamless,</span> <span className="h1__stagger">{'user-friendly'.split('').map((char, index) => <span key={index}>{char}</span>)}</span> <span className="h1__last-word">sites.</span></h1>

                <section className="about-page__profile">
                    <div className="wrapper">
                        <img src={me} alt="An image of me" draggable="false" width={500} height={500}/>
                        <div className="about-page__profile--text-wrapper">
                            <h2>About me</h2>
                            <p>New to the industry, I specialize in <span>Front-End Development.</span></p>
                            <p>I&apos;m also starting to explore the field of UI/UX Design while keeping tabs with the current industry trends. Equipped with a solid foundation, I&apos;m always looking to hone my skills.</p>
                        </div>
                    </div>
                </section>

                <div className="bg-wrapper">
                    <section className="about-page__design-style">
                        <h2>Design Style?</h2>
                        <div className="flex">
                            <section className="about-page__design-style--desc">
                                <p>I&apos;m quite fond of a Clean, more <span>Minimalist</span> design as they&apos;re pleasant to look at.</p>
                                <p>Though for this one, I&apos;ve added quite a few microinteractions to take things up a notch.</p>
                            </section>
                            <section className="about-page__design-style--sample">
                                {/* Serves as the placeholder for the sample images that will be put into the section so that the other images stick to this specific element */}
                                <div className="img-placeholder"></div>
                            </section>
                        </div>
                    </section>
                </div>

                <section className="about-page__niche">
                    <h2>My niche?</h2>
                    <p>I&apos;m currently focusing on <span>React</span>, and will be expanding my horizons once I feel pretty comfortable with it.</p>
                    <p className="about-page__niche--label" aria-label="I might be of help with these">I might be of help with these<span className="dots">.</span><span className="dots">.</span><span className="dots">.</span></p>
                    <section className="about-page__niche--field">
                        <div className="field__dev">
                            <h3 aria-label="Development"><IoCodeSlash/> Development</h3>
                            <p>Passionate about bringing ideas into reality, I bring a solid skill set in creating user-friendly and responsive websites with a focus on delivering impactful digital experiences.</p>
                        </div>

                        <div className="field__design">
                            <h3 aria-label="Design"><MdOutlineDesignServices/> Design</h3>
                            <p>Though it&apos;s not my primary expertise, I&apos;ve been actively upskilling in this area to enhance my skill set and compliment my skills further.</p>
                        </div>
                    </section>
                </section>

                <Contact/>
            </main>
        </PageTransitionWrapper>
    )
}
