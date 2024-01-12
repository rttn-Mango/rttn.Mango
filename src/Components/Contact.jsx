import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Icons
import TiltedArrow from '../svg/TiltedArrow';
import ScrollToIcon from '../svg/ScrollTo'

export default function Contact(){
    return(
        <section className="contact">
            <p className="contact__sub-heading">got a great idea?</p>

            <div className="wrapper">
                <h2>Let&apos;s talk about it</h2>

                <div className="contact__details">
                    <Link to='/contact'>Get in touch <TiltedArrow/> </Link>
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