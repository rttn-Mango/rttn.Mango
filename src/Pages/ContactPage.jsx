import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransitionWrapper from "./PageTransitionWrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLoadingContext } from "../hooks/useLoadingContext";
import useHoverContentContext from "../hooks/useHoverContentContext";

//Icon
import { BiSolidSend } from "react-icons/bi";

export default function ContactPage() {
    const {hoverContent, setHoverContent} = useHoverContentContext();
    const {loading} = useLoadingContext();

    //To change document title once the Component mounts
    useEffect(() => {
        document.title = 'Contact • koma';
        const forwardButton = document.querySelector('.contact-page button')
        window.scrollTo(0, 0);

        //Hover animation for the get in forward button on contact page
        forwardButton.addEventListener('mousemove', e => {
            let rect = e.target.getBoundingClientRect();

            forwardButton.style.setProperty('--_xPos', `${e.clientX - rect.left}px`)
            forwardButton.style.setProperty('--_yPos', `${e.clientY - rect.top}px`)
            forwardButton.style.setProperty('--_visibility', `visible`)
        })

        gsap.registerPlugin(ScrollTrigger);

        //This allows the animation to still run even when user is tabbed somewhere else
        gsap.ticker.lagSmoothing(0);

        //Makes the animation only run when user doesn't disable animations
        gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
            if(!loading){                
                gsap.fromTo('.contact-page h1', {opacity: 0}, {
                    opacity: 1,
                    stagger: .1,
                    delay: 2.7,
                    duration: .7,
                })

                if(window.innerWidth < 1700){
                    gsap.set('.contact-page .contact-page__container .form-group', {opacity: 0})
                    gsap.to('.contact-page .contact-page__container .form-group', {opacity: 1, delay: 3})
                }
                else{
                    gsap.utils.toArray('.form-group').map(form => {
                        gsap.fromTo(form, {opacity: 0, x: -1000}, {
                            opacity: 1,
                            x: 0,
                            stagger: .1,
                            delay: 5,
                            duration: .7,
                            scrollTrigger: {
                                trigger: form,
                                start: '40% bottom',
                                end: 'bottom bottom',
                                scrub: 2,
                            }
                        })
                    })
                }
            }
            
            gsap.fromTo('.contact-page h2', {opacity: 0, y: -200}, {
                opacity: 1,
                y: 0,
                duration: .7,
                scrollTrigger: {
                    trigger: '.contact-page__links',
                    start: '10% bottom',
                    end: '30% bottom',
                    scrub: 2,
                }
            })

            gsap.fromTo('.contact-page__links a, .contact-page__links p', {opacity: 0}, {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: '.contact-page__links',
                    start: '30% bottom',
                    end: 'center bottom',
                    scrub: 2,
                }
            })

        })    
    }, [loading])

    return(
        <PageTransitionWrapper>
            <main className="contact-page">
                <h1 aria-label="Don't Hesitate to Reach out">Don&apos;t Hesitate to <span>Reach out</span></h1>

                <section className="contact-page__container">
                    <form action="https://formsubmit.co/d04bc60964151e048879c5cd4e2a437f" method="POST" className="contact-page__form">
                        
                        {/*To disable captcha when sending message */}
                        <input type="hidden" name="_captcha" value='false'/>

                        <div className="form-group">
                            <label htmlFor="name">What should I call you<span>?</span></label>
                            <input id="name" name="name" type="text" placeholder="Ipsum Dolor" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Your Email Address<span>?</span></label>
                            <input id="email" name="email" type="email" placeholder="Lorem-Ipsum@email.com" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">What&apos;s your question<span>?</span></label>
                            <textarea name="message" id="message" placeholder="Hello, I'd like to ask about..." required/>
                        </div>

                        <button type="submit" onMouseEnter={() => setHoverContent({...hoverContent ,shouldBeDisabled: true})} onMouseLeave={() => setHoverContent({...hoverContent, shouldBeDisabled: false})}>Forward <BiSolidSend/></button>
                    </form>

                    <section className="contact-page__links">
                        <div className="text-wrapper"><h2 >Socials</h2></div>
                        <div className="contact-page__links--socials">
                            <Link onMouseEnter={() => setHoverContent({...hoverContent ,isHovered: true, height: 60, width: 60})} onMouseLeave={() => setHoverContent({...hoverContent, isHovered: false, height: 25, width: 25})} to='www.linkedin.com/in/rttn-mango' title="LinkedIn Profile">LinkedIn</Link>
                            <Link onMouseEnter={() => setHoverContent({...hoverContent ,isHovered: true, height: 60, width: 60})} onMouseLeave={() => setHoverContent({...hoverContent, isHovered: false, height: 25, width: 25})} to='https://github.com/rttn-Mango' title="Github Profile">Github</Link>
                            <Link onMouseEnter={() => setHoverContent({...hoverContent ,isHovered: true, height: 60, width: 60})} onMouseLeave={() => setHoverContent({...hoverContent, isHovered: false, height: 25, width: 25})} to='https://www.instagram.com/rttn.mango/' title="Instagram Profile">Instagram</Link>
                        </div>

                        <div className="text-wrapper"><h2 >Email</h2></div>
                        <p>kim.oliver.manga@gmail.com</p>
                    </section>
                </section>
            </main>
        </PageTransitionWrapper>
    )
}