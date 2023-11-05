import { useRef } from "react"
import { motion, useTransform, useScroll } from 'framer-motion'

export default function About(){
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
        <section className="about" id="about">
            <div className="wrapper" ref={ref}> 
                <div id="slider">
                    <motion.div style={{x: horizontalScrollProgress}} className="container">
                        <p className="about__top-text">Kumusta? I&apos;m a young blood from Camarines Sur, Philippines</p>
                        <p className="about__bottom-text">Passionate about <span>discovering, developing, and transforming ideas</span> that will have an influence and inspire others.</p>
                    </motion.div>
                </div>
            </div>

            {/* TODO: Take this out of wrapper and  Make this a component */}
            <div className="about__skills">
                <motion.div variants={textRevealAnim} initial="initial" whileInView="animate" className="about__skills--subheading">
                    <h3>my skill set</h3>
                    <p>These are the technologies I currently know. I&apos;m constantly looking to expand my present skill set by studying new technologies that can broaden my horizons.</p>
                </motion.div>
                    
                <motion.div className="about__skills--list" variants={skillSlideInAnim} initial='initial' whileInView='animate'>
                    <div className="group">
                        <img 
                            src="public/Html.svg" 
                            alt="HTML Icon"
                            draggable="false"
                            width={100}
                            height={100} 
                        />
                        <p>HTML</p>
                    </div>
                    <div className="group">
                        <img 
                            src="public/CSS3.svg" 
                            alt="CSS Icon"
                            draggable="false"
                            width={100}
                            height={100} 
                        />
                        <p>CSS</p>
                    </div>
                    <div className="group">
                        <img 
                            src="public/JavaScript.svg" 
                            alt="JavaScript Icon"
                            draggable="false"
                            width={100}
                            height={100} 
                        />
                        <p>JavaScript</p>
                    </div>
                    <div className="group">
                        <img 
                            src="public/Figma.svg"  
                            alt="Figma Icon"
                            draggable="false"
                            width={100}
                            height={100} 
                        />
                        <p>Figma</p>
                    </div>
                    <div className="group">
                        <img 
                            src="public/Wireframe.svg"  
                            alt="Wireframing Icon"
                            draggable="false"
                            width={100}
                            height={100} 
                        />
                        <p>Wireframing</p>
                    </div>
                    <div className="group">
                        <img 
                            src="public/Sass.svg" 
                            alt="SASS Icon"
                            draggable="false"
                            width={100}
                            height={100} 
                        />
                        <p>SASS/SCSS</p>
                    </div>
                    <div className="group">
                        <img 
                            src="public/React.svg" 
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