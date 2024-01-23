import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

//Icons
import TiltedArrow from '../svg/TiltedArrow';
import ScrollToIcon from '../svg/ScrollTo'

export default function Contact(){

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let getInTouchButton = document.querySelector('.contact__details a')
        
        //Hover animation for the get in touch button on contact section
        getInTouchButton.addEventListener('mousemove', e => {
            let rect = e.target.getBoundingClientRect();

            getInTouchButton.style.setProperty('--_xPos', `${e.clientX - rect.left}px`)
            getInTouchButton.style.setProperty('--_yPos', `${e.clientY - rect.top}px`)
            getInTouchButton.style.setProperty('--_visibility', `visible`)
        })

        //Makes the animation only run when user doesn't disable animations
        gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {

            gsap.fromTo('.contact h2', {opacity: 0, x: -1000}, {
                opacity: 1,
                x: 0,
                duration: .5,
                scrollTrigger: {
                    trigger: '.contact',
                    start: '20% bottom',
                    end: '40% bottom',
                    scrub: 2, 
                }
            })

            gsap.fromTo('.contact__details', {opacity: 0, x: 1000}, {
                opacity: 1,
                x: 0,
                duration: .5,
                scrollTrigger: {
                    trigger: '.contact',
                    start: '20% bottom',
                    end: '40% bottom',
                    scrub: 2, 
                }
            })
        })
    }, [])

    return(
        <section className="contact">
            <p className="contact__sub-heading">got a great idea?</p>

            <div className="flex-wrapper">
                <h2>Let&apos;s talk about it</h2>

                <div className="contact__details">
                    <Link to='/contact'>Get in touch <TiltedArrow/> <span aria-hidden="true"></span> </Link>
                    <p>or</p>
                    <p>kim.oliver.manga@gmail.com</p>
                </div>
            </div>

            <div className="contact__scroll-to" onClick={() => window.scrollTo(0 , 0)}>
                <ScrollToIcon/>
            </div>
        </section>
    )
}

Contact.propTypes = {
    setSendMessage: PropTypes.func,
    showNav: PropTypes.bool,
}