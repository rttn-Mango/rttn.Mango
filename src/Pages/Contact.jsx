import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
export default function Contact({setSendMessage, showNav}){
    return(
        <section className="contact" id='contacts'>
            <div className="contact__wrapper">
                <p className="contact__sub-heading">got a great idea?</p>
                <h2><Link tabIndex={showNav ? -1 : 1} to="/" onClick={()=>{setSendMessage(true)}}>Get in touch with me</Link>, let&apos;s work together and create something great</h2>
                <div className="contact__details">
                    <p>+63 945 - 256 - 7613</p>
                    <p>Camarines Sur, Philippines</p>
                </div>
                <div className="contact__socials">
                    <a title='Facebook Profile' href="https://www.facebook.com/kiolma09"><AiFillFacebook/></a>
                    <a title='Instagram Profile' href="https://www.instagram.com/rttn.mango/"><AiFillInstagram/></a>
                    <a title='Linkedin Profile' href="www.linkedin.com/in/rttn-mango"><AiFillLinkedin/></a>
                    <a title='Github Profile' href="https://github.com/rttn-Mango"><AiFillGithub/></a>
                </div>
            </div>
        </section>
    )
}

Contact.propTypes = {
    setSendMessage: PropTypes.func,
    showNav: PropTypes.bool,
}