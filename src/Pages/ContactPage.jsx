import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransitionWrapper from "./PageTransitionWrapper";

//Image
import right from '../assets/Right.svg'

export default function ContactPage() {

    //To change document title once the Component mounts
    useEffect(() => {
        document.title = 'Contact';
        window.scrollTo(0, 0);
    }, [])

    return(
        <PageTransitionWrapper>
            <main className="contact-page">
                <h1 >Don&apos;t Hesitate to <span>Reach Out</span></h1>

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

                        <button type="submit">Forward <img src={right} alt="right arrow" draggable="false" width={30} height={30}/></button>
                    </form>

                    <section className="contact-page__links">
                        <h2 >Socials</h2>
                        <div className="contact-page__links--socials">
                            <Link to='www.linkedin.com/in/rttn-mango' title="LinkedIn Profile">LinkedIn</Link>
                            <Link to='https://github.com/rttn-Mango' title="Github Profile">Github</Link>
                            <Link to='https://www.instagram.com/rttn.mango/' title="Instagram Profile">Instagram</Link>
                        </div>

                        <div className="contact-page__links--contacts">
                            <h2 >Email</h2>
                            <p>kim.oliver.manga@gmail.com</p>
                        </div>
                    </section>
                </section>
            </main>
        </PageTransitionWrapper>
    )
}