import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

//Image
import me from '../assets/me.svg'
import dev from '../assets/dev.svg'
import down from '../assets/Down Arrow.svg'

export default function AboutPage(){
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

    const imgAnim = {
        initial: {x: -300, opacity: 0},
        animate: {
            x: 0,
            opacity: 1,
            trasition: {
                duration: 1,
                ease: [0.45, 0, 0.55, 1],
                delay: .25
            }
        }
    }

    useEffect( () => {document.title = "About"}, [])

    return(
        <main className="about-page">
            <motion.h1 variants={textAnim} initial="initial" whileInView="animate">Crafting seamless, <span>user-friendly</span> interfaces</motion.h1>

            <section className="about-page__profile">
                <motion.img variants={imgAnim} initial="initial" whileInView="animate" src={me} alt="An image of me" draggable="false" width={500} height={500}/>
                <motion.div variants={textAnim} initial="initial" whileInView="animate" className="about-page__profile--text-wrapper">
                    <p>New to the industry, I specialize in front-end web development. I&apos;m also starting to explore UI Design while keeping tabs with the current industry trends.</p>
                    <p>Equipped with a solid foundation, I&apos;m always looking to hone my skills.</p>
                </motion.div>

            </section>

            <motion.section variants={textAnim} initial="initial" whileInView="animate" className="about-page__services">
                <h2>I can help you with these<span>.</span><span>.</span><span>.</span></h2>
                <section className="about-page__services--info">
                    <img src={dev} alt="An illustration of a programmer" draggable="false" width={350} height={300}/>
                    
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
            </motion.section>
            
            <motion.section variants={textAnim} initial="initial" whileInView="animate" className="about-page__contact-me">
                <img src={down} alt="Down Arrow Icon"  draggable="false" height={160} width={130}/>
                <Link to='/contact' title="Send me a Message">Let&apos;s talk about it, Drop me a message</Link>
            </motion.section>
        </main>
    )
}