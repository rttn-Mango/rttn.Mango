import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Contact(){
    const paragraphRevealAnim = {
        initial: {opacity: 0},
        animate: {
            opacity: 1,
            transition: {
                duration: .3,
                delay: .1
            }
        }
    }

    const headingRevealAnim = {
        initial: {opacity: 0},
        animate: {
            opacity: 1,
            transition: {
                duration: .3,
                delay: .2
            }
        }
    }

    const iconRevealAnim = {
        initial: {y: 50, opacity: 0},
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .5,
            }
        }
    }

    return(
        <section className="contact" id='contacts'>
        <motion.p variants={paragraphRevealAnim} initial="initial" whileInView='animate' className="contact__sub-heading">got a great idea?</motion.p>
            <motion.h2 variants={headingRevealAnim} initial='initial' whileInView='animate'>
                <Link to="/send">
                    Get in touch with me
                </Link>, let&apos;s work together and create something great
            </motion.h2>
            <motion.div variants={iconRevealAnim} initial="initial" whileInView='animate' className="contact__details">
                <p >+63 945 - 256 - 7613</p>
                <p >Camarines Sur, Philippines</p>
            </motion.div>
            <motion.div variants={iconRevealAnim} initial="initial" whileInView='animate' className="contact__socials">
                <a title='Facebook Profile' href="https://www.facebook.com/kiolma09"><AiFillFacebook/></a>
                <a title='Instagram Profile' href="https://www.instagram.com/rttn.mango/"><AiFillInstagram/></a>
                <a title='Linkedin Profile' href="www.linkedin.com/in/rttn-mango"><AiFillLinkedin/></a>
                <a title='Github Profile' href="https://github.com/rttn-Mango"><AiFillGithub/></a>
            </motion.div>
        </section>
    )
}

Contact.propTypes = {
    setSendMessage: PropTypes.func,
    showNav: PropTypes.bool,
}