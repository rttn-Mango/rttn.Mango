import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { motion } from 'framer-motion'

//Image
import Shortly from '../assets/Shrtly.webp'
import Easybank from '../assets/Eas.webp'
import down from '../assets/Down Arrow.svg'

export default function WorksPage(){
    const [workIndex, setWorkIndex] = useState(0);
    let windowWidth = window.innerWidth;

    const workHoverAnim = {
        initial: {backgroundColor: 'transparent'},
        hovered: {backgroundColor: 'black'},
    }

    const imageHoverAnim = {
        initial: {top: 0},
        hovered: {
            top :  workIndex * -100 + '%',
            transition: {
                ease: [0.65, 0, 0.35, 1]
            }
        }
    }

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

    useEffect( () => {document.title = "Works"}, [])

    return(
        <main className="works-page">
            <motion.h1 variants={textAnim} initial="initial" whileInView="animate">Intuitive and <span>Smooth</span> User Experience</motion.h1>

            <section className="works-page__details">
                <motion.h2 variants={textAnim} initial='initial' whileInView='animate'>My recent <span>works</span></motion.h2>
                
                <div className="works-page__details--wrapper">

                    <section className="works-page__details--hover">
                        <motion.div 
                            className="hover-anim"
                            variants={imageHoverAnim}
                            initial="initial"
                            animate="hovered"
                        >
                            <p {...windowWidth < 800 ? {style: {display: "none"}} : {style: {display: "block"}}}>Try hovering on project name</p>
                            <motion.img variants={textAnim} initial="initial" whileInView='animate' className="desktop-img" src={Shortly} alt="Shortly Website full image" draggable="false" width={550} height={750}/>
                            <motion.img variants={textAnim} initial="initial" whileInView='animate' className="desktop-img" src={Easybank} alt="Easybank Website full image" draggable="false" width={550} height={750}/>
                        </motion.div>
                    </section>

                    <motion.div className="works-page__details--info" variants={textAnim} initial='initial' whileInView='animate'>
                        <a href="https://sh0rtly.vercel.app/" className="work-link" title="Go to Shortly Website">
                            <motion.section 
                                className="info-data" 
                                onMouseEnter={() => setWorkIndex(1)} 
                                onMouseLeave={() => setWorkIndex(1)}
                                variants={workHoverAnim}
                                initial="initial"
                                animate={windowWidth > 800 && workIndex === 1 ? 'hovered' : 'initial'}
                            >
                                <img className="mobile-img" src={Shortly} alt="Shortly Website full image" draggable="false" width={400} height={350}/>
                                <h3>Shortly</h3>
                                <div className="info-data__paragraphs">
                                    <p>Designer & Dev</p>
                                    <p>React, SASS</p>
                                </div>
                            </motion.section>
                        </a>

                        <a href="https://izibank.vercel.app/" className="work-link" title="Go to Easybank Website">
                            <motion.section 
                                className="info-data" 
                                onMouseEnter={() => setWorkIndex(2)} 
                                onMouseLeave={() => setWorkIndex(1)}
                                variants={workHoverAnim}
                                initial="initial"
                                animate={windowWidth > 800 && workIndex === 2 ? 'hovered' : 'initial'}
                            >
                                <img className="mobile-img" src={Easybank} alt="Shortly Website full image" draggable="false" width={400} height={350}/>
                                <h3>Easybank</h3>
                                <div className="info-data__paragraphs">
                                    <p>Designer & Dev</p>
                                    <p>React, SASS</p>
                                </div>
                            </motion.section>
                        </a>
                        
                    </motion.div>
                </div>
            </section>
            
            <motion.section variants={textAnim} initial="initial" whileInView='animate' className="works-page__contact-me">
                <img src={down} alt="Down Arrow Icon"  draggable="false" height={160} width={130}/>
                <Link to='/contact' title="Send me a Message">Let&apos;s talk about it, Drop me a message</Link>
            </motion.section>
        </main>
    )
}