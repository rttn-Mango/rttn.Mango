import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
export default function Contact({setSendMessage}){
    return(
        <section className="contact">
            <p className="contact__sub-heading">got a great idea?</p>
            <h2><Link to="/" onClick={()=>{setSendMessage(true)}}>Get in touch with me</Link>, let&apos;s work together and create something great</h2>
            <div className="contact__details">
                <p>+63 945 - 256 - 7613</p>
                <p>Camarines Sur, Philippines</p>
            </div>
            <div className="contact__socials">
                <AiFillFacebook/>
                <AiFillInstagram/>
                <AiFillLinkedin/>
                <AiFillGithub/>
            </div>
        </section>
    )
}

Contact.propTypes = {
    setSendMessage: PropTypes.func
}