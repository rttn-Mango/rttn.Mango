import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default function Contact(){
    return(
        <section className="contact">
            <p className="contact__sub-heading">got a great idea?</p>
            <h2><a href="/">Get in touch with me</a>, let&apos;s work together and create something great</h2>
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