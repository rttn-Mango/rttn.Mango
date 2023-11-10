import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

//Image
import right from '../assets/Right.svg'

export default function ContactPage() {
    const textAnim = {
        initial: {opacity: 0},
        animate: {
            opacity: 1,
            transition: {
                duration: .5,
                ease: [0.45, 0, 0.55, 1]
            }
        }
    }

    const subHeadingAnim = {
        initial: {y: 70, opacity: 0},
        animate: {
            y: 0,
            opacity: 1,

        }
    }

    useEffect(() => {
        document.title = 'Contact';
        window.scrollTo(0, 0);
    }, [])

    return(
        
        <main className="contact-page">
            <motion.h1 variants={textAnim} initial="initial" whileInView='animate'>Don&apos;t Hesitate to <span>Reach Out</span></motion.h1>

            <section className="contact-page__container">
                <form action="https://formsubmit.co/d04bc60964151e048879c5cd4e2a437f" method="POST" className="contact-page__form">
                    
                    {/*To disable captcha when sending message */}
                    <input type="hidden" name="_captcha" value='false'/>

                    <motion.div variants={textAnim} initial="initial" whileInView='animate' className="form-group">
                        <label htmlFor="name">What should I call you<span>?</span></label>
                        <input id="name" name="name" type="text" placeholder="Ipsum Dolor" required/>
                    </motion.div>

                    <motion.div variants={textAnim} initial="initial" whileInView='animate' className="form-group">
                        <label htmlFor="email">Your Email Address<span>?</span></label>
                        <input id="email" name="email" type="email" placeholder="Lorem-Ipsum@email.com" required/>
                    </motion.div>

                    <motion.div variants={textAnim} initial="initial" whileInView='animate' className="form-group">
                        <label htmlFor="message">What&apos;s your question<span>?</span></label>
                        <textarea name="message" id="message" placeholder="Hello, I'd like to ask about..." required/>
                    </motion.div>

                    <motion.button variants={textAnim} initial="initial" whileInView='animate' type="submit">Forward <img src={right} alt="right arrow" draggable="false" width={30} height={30}/></motion.button>
                </form>

                <section className="contact-page__links">
                    <motion.h2 variants={subHeadingAnim} initial="initial" whileInView='animate'>Socials</motion.h2>
                    <motion.div variants={textAnim} initial="initial" whileInView='animate' className="contact-page__links--socials">
                        <Link to='https://github.com/rttn-Mango' title="Github Profile">Github</Link>
                        <Link to='www.linkedin.com/in/rttn-mango' title="LinkedIn Profile">LinkedIn</Link>
                        <Link to='https://www.facebook.com/kiolma09' title="Facebook Profile">Facebook</Link>
                        <Link to='https://www.instagram.com/rttn.mango/' title="Instagram Profile">Instagram</Link>
                    </motion.div>

                    <div className="contact-page__links--contacts">
                        <motion.h2 variants={subHeadingAnim} initial="initial" whileInView='animate'>Contacts</motion.h2>
                        <motion.p variants={textAnim} initial="initial" whileInView='animate'>+63 945 - 256 - 7613</motion.p>
                        <motion.p variants={textAnim} initial="initial" whileInView='animate'>khimmanga445@gmail.com</motion.p>
                    </div>
                </section>
            </section>
        </main>
    )
}