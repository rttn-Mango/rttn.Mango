import { useRef } from "react"
import { motion, useTransform, useScroll } from 'framer-motion';

//Icons
import Html from '../../assets/Html.svg'
import Css from '../../assets/CSS3.svg'
import JS from '../../assets/JavaScript.svg'
import Figma from '../../assets/Figma.svg'
import Wireframe from '../../assets/Wireframe.svg'
import sass from '../../assets/Sass.svg'
import React from '../../assets/React.svg'

export default function Intro(){
    const ref = useRef(null);
    const { scrollYProgress } =  useScroll({target: ref})

    const textRevealAnim = {
        initial: {opacity: 0},
        animate: {
            opacity: 1,
            transition: {
                duration: 1,
            }
        }
    }

    const skillSlideInAnim = {
        initial: {opacity: 0},
        animate: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.45, 0, 0.55, 1],
                delay: .25
            }
        }
    }

    const horizontalScrollProgress = useTransform(scrollYProgress, [0, 1], ['1', '-100%'])
    return(
        <section className="intro" id="intro">
            <div className="wrapper" ref={ref}> 
                <div id="slider">
                    <motion.div style={{x: horizontalScrollProgress}} className="container">
                        <p className="intro__top-text"><span>Kumusta?</span> I&apos;m a young blood from Camarines Sur, Philippines</p>
                        <p className="intro__bottom-text">Passionate about <span>discovering, developing, and transforming ideas</span> that will have an influence and inspire others.</p>
                    </motion.div>
                </div>
            </div>

            {/* TODO: Take this out of wrapper and  Make this a component */}
            <div className="intro__skills">
                <motion.div variants={textRevealAnim} initial="initial" whileInView="animate" className="intro__skills--subheading">
                    <h3>my skill set</h3>
                    <p>These are the technologies I currently know. I&apos;m constantly looking to expand my present skill set by studying new technologies that can broaden my horizons.</p>
                </motion.div>
                    
                <motion.div className="intro__skills--list" variants={skillSlideInAnim} initial='initial' whileInView='animate'>
                    <div className="group">
                        <img 
                            src={Html}
                            alt="HTML Icon"
                            draggable="false"
                            width={100}
                            height={100} 
                        />
                        <p>HTML</p>
                    </div>
                    <div className="group">
                        <img 
                            src={Css}
                            alt="CSS Icon"
                            draggable="false"
                            width={100}
                            height={100} 
                        />
                        <p>CSS</p>
                    </div>
                    <div className="group">
                        <img 
                            src={JS}
                            alt="JavaScript Icon"
                            draggable="false"
                            width={100}
                            height={100} 
                        />
                        <p>JavaScript</p>
                    </div>
                    <div className="group">
                        <img 
                            src={Figma}
                            alt="Figma Icon"
                            draggable="false"
                            width={100}
                            height={100} 
                        />
                        <p>Figma</p>
                    </div>
                    <div className="group">
                        <img 
                            src={Wireframe}
                            alt="Wireframing Icon"
                            draggable="false"
                            width={100}
                            height={100} 
                        />
                        <p>Wireframing</p>
                    </div>
                    <div className="group">
                        <img 
                            src={sass}
                            alt="SASS Icon"
                            draggable="false"
                            width={100}
                            height={100} 
                        />
                        <p>SASS/SCSS</p>
                    </div>
                    <div className="group">
                        <img 
                            src={React}
                            alt="ReactJS Icon"
                            draggable="false"
                            width={100}
                            height={100} 
                        />
                        <p>ReactJS</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}