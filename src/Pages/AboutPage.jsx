import { useEffect } from "react";
import Contact from "../Components/Contact";
import PageTransitionWrapper from "./PageTransitionWrapper";

//Image
import me from '../assets/me.svg'

//Icons
import Code from '../assets/code.svg';
import Design from '../assets/design.svg'


export default function AboutPage(){
    useEffect( () => {document.title = "About"}, [])

    return(
        <PageTransitionWrapper>
            <main className="about-page">
                <h1 >Crafting seamless, <span>user-friendly</span> sites.</h1>

                <section className="about-page__profile">
                    <div className="wrapper">
                        <h2>About me</h2>
                            <img src={me} alt="An image of me" draggable="false" width={500} height={500}/>
                            <div className="about-page__profile--text-wrapper">
                                <p>New to the industry, I specialize in Front-End Development.</p>
                                <p>I&apos;m also starting to explore the field of UI/UX Design while keeping tabs with the current industry trends. Equipped with a solid foundation, I&apos;m always looking to hone my skills.</p>
                            </div>
                    </div>
                </section>

                <div className="bg-wrapper">
                    <section className="about-page__design-style">
                        <h2>Design Style?</h2>
                        <div className="flex">
                            <section className="about-page__design-style--desc">
                                <p>I&apos;m quite fond of a Clean, more <span>Minimalist</span> design as they&apos;re pleasant to look at.</p>
                                <p>Though for this one, I&apos;ve added quite a few microinteractions to take things up a notch.</p>
                            </section>
                            <section className="about-page__design-style--sample">
                                {/* Serves as the placeholder for the sample images that will be put into the section so that the other images stick to this specific element */}
                                <div className="img-placeholder"></div>
                            </section>
                        </div>
                    </section>
                </div>

                <section className="about-page__niche">
                    <h2>My niche?</h2>
                    <p>I&apos;m currently focusing on <span>React</span>, and will be expanding my horizons once I feel pretty comfortable with it.</p>
                    <p className="about-page__niche--label" aria-label="I might be of help with these">I might be of help with these<span className="dots">.</span><span className="dots">.</span><span className="dots">.</span></p>
                    <section className="about-page__niche--field">
                        <div className="field__dev">
                            <h3 aria-label="Development"><img src={Code} alt="Dev Icon" draggable="false" height={50} width={50} aria-hidden="true"/> Development</h3>
                            <p>Passionate about bringing ideas into reality, I bring a solid skill set in creating user-friendly and responsive websites with a focus on delivering impactful digital experiences.</p>
                        </div>

                        <div className="field__design">
                            <h3 aria-label="Design"><img src={Design} alt="Design Icon" draggable="false" height={50} width={50} aria-hidden="true"/> Design</h3>
                            <p>Though it&apos;s not my primary expertise, I&apos;ve been actively upskilling in this area to enhance my skill set and compliment my skills further.</p>
                        </div>
                    </section>
                </section>

                <Contact/>
            </main>
        </PageTransitionWrapper>
    )
}
