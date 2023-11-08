import { Link } from "react-router-dom"

export default function ContactPage() {
    return(
        <main className="contact-page">
            <h1>Don&apos;t Hesitate to <span>Reach Out</span></h1>

            <section className="contact-page__container">
                <form action="https://formsubmit.co/khimmanga445@gmail.com" method="POST" className="contact-page__form">
                    
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
                        <label htmlFor="">What&apos;s your question<span>?</span></label>
                        <textarea name="" id="" placeholder="Hello, I'd like to ask about..." required/>
                    </div>

                    <button type="submit">Forward <img src="public/Right.svg" alt="right arrow" draggable="false" width={30} height={30}/></button>
                </form>

                <section className="contact-page__links">
                    <h2>Socials</h2>
                    <div className="contact-page__links--socials">
                        <Link to='https://github.com/rttn-Mango' title="Github Profile">Github</Link>
                        <Link to='www.linkedin.com/in/rttn-mango' title="LinkedIn Profile">LinkedIn</Link>
                        <Link to='https://www.facebook.com/kiolma09' title="Facebook Profile">Facebook</Link>
                        <Link to='https://www.instagram.com/rttn.mango/' title="Instagram Profile">Instagram</Link>
                    </div>

                    <div className="contact-page__links--contacts">
                        <h2>Contacts</h2>
                        <p>+63 945 - 256 - 7613</p>
                        <p>khimmanga445@gmail.com</p>
                    </div>
                </section>
            </section>
        </main>
    )
}