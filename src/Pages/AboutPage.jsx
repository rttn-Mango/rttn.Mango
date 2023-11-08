import { Link } from "react-router-dom"

export default function AboutPage(){
    return(
        <main className="about-page">
            <h1>Crafting seamless, <span>user-friendly</span> interfaces</h1>

            <section className="about-page__profile">
                <img src="public/me.svg" alt="An image of me" draggable="false" width={500} height={500}/>
                <div className="about-page__profile--text-wrapper">
                    <p>New to the industry, I specialize in front-end web development. I&apos;m also starting to explore UI Design while keeping tabs with the current industry trends.</p>
                    <p>Equipped with a solid foundation, I&apos;m always looking to hone my skills.</p>
                </div>

            </section>

            <section className="about-page__services">
                <h2>I can help you with these<span>.</span><span>.</span><span>.</span></h2>
                <section className="about-page__services--info">
                    <img src="public/dev.svg" alt="An illustration of a programmer" draggable="false" width={350} height={300}/>
                    
                    <section className="info-texts">
                        <div className="info-texts__details">
                            <h3>Development</h3>
                            <p>Let&apos;s transform your Ideas into reality. I&apos;ll make you a user-friendly and responsive websites.</p>
                        </div>

                        <div className="info-texts__details">
                            <h3>Design</h3>
                            <p>Though it&apos;s not my strongest suit, I&apos;ve recently started dabbling in UI Design to a good extent.</p>
                        </div>
                    </section>
                </section>
            </section>

            <section className="about-page__contact-me">
                <img src="public/Down Arrow.svg" alt="Down Arrow Icon"  draggable="false" height={160} width={130}/>
                <Link to='/send' title="Send me a Message">Let&apos;s talk about it, Drop me a message</Link>
            </section>
        </main>
    )
}