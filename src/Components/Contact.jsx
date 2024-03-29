import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useHoverContentContext from '../hooks/useHoverContentContext';

//Icons
import TiltedArrow from '../svg/TiltedArrow';
import ScrollToIcon from '../svg/ScrollTo'

export default function Contact(){
    const {hoverContent, setHoverContent} = useHoverContentContext();

    useEffect(() => {
        let getInTouchButton = document.querySelector('.contact__details a')
        
        //Hover animation for the get in touch button on contact section
        getInTouchButton.addEventListener('mousemove', e => {
            let rect = e.target.getBoundingClientRect();

            getInTouchButton.style.setProperty('--_xPos', `${e.clientX - rect.left}px`)
            getInTouchButton.style.setProperty('--_yPos', `${e.clientY - rect.top}px`)
            getInTouchButton.style.setProperty('--_visibility', `visible`)
        })
    }, [])

    return(
        <section className="contact">
            <p className="contact__sub-heading">got a great idea?</p>

            <div className="flex-wrapper">
                <h2>Let&apos;s talk about it</h2>

                <div className="contact__details">
                    <Link to='/contact' onMouseEnter={() => setHoverContent({...hoverContent ,shouldBeDisabled: true})} onMouseLeave={() => setHoverContent({...hoverContent, shouldBeDisabled: false})}>Get in touch <TiltedArrow/> <span aria-hidden="true"></span> </Link>
                    <p>or</p>
                    <p>kim.oliver.manga@gmail.com</p>
                </div>
            </div>

            <div className="contact__scroll-to" onClick={() => window.scrollTo(0 , 0)} onMouseEnter={() => setHoverContent({...hoverContent ,shouldBeDisabled: true})} onMouseLeave={() => setHoverContent({...hoverContent, shouldBeDisabled: false})}>
                <ScrollToIcon/>
            </div>
        </section>
    )
}

Contact.propTypes = {
    setSendMessage: PropTypes.func,
    showNav: PropTypes.bool,
}