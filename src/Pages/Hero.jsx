import Mouse from "../svg/Mouse";
import { motion } from "framer-motion";

export default function Hero(){
    const nameAnim = {
        initial: {x: -300, opacity: 0},
        animate: {
            x: 0,
            opacity: 1, 
            transition: {
                ease: [0.34, 1.56, 0.64, 1],
                duration: 1,
                delay: 1.2
            }
        }
    }

    const scrollAnim = {
        initial: {y: 300},
        animate: {
            y: 0,
            transition: {
                ease: [0.12, 0, 0.39, 0],
                duration: 1,
                delay: 1.5
            }
        }
    }

    const slideYAnim = {
        initial: {y: -500, opacity: 0},
        animate: {
            y: 0, 
            opacity: 1,
            transition: {
                ease: [0.34, 1.56, 0.64, 1],
                duration: 1,
                delay: .5
            }
        }
    }

    const imgAnim = {
        initial: {y: 500},
        animate: {
            y: 0,
            transition: {
                ease: [0.76, 0, 0.24, 1],
                duration: 1.5
            }
        }
    }

    return(
        //id is left empty so there's no unecessary hastag on ur when used later to go back to top
            <section className="hero" id="">
                <motion.h1
                    variants={slideYAnim}
                    initial={"initial"}
                    animate={"animate"}
                >
                    Developer
                </motion.h1>

                <motion.p className="subHeading" variants={slideYAnim} initial={"initial"} animate={"animate"}>Front-end</motion.p>
                <div className="hero__creator">
                    <motion.img
                        variants={imgAnim}
                        initial={'initial'}
                        animate={"animate"}
                        src="public/growth.png" 
                        alt="Illustration by Pablo Stanley" 
                        draggable="false"
                        width={330}
                        height={350}
                    />
                    <motion.p
                        variants={nameAnim}
                        initial={'initial'}
                        animate={"animate"}
                        aria-label="Kim Oliver Manga"
                    >
                        Kim<br/>Oliver<br/>Manga
                    </motion.p>
                </div>

                <motion.div 
                    className="hero__bottom"
                    variants={scrollAnim}
                    initial={'initial'}
                    animate={"animate"}
                >
                    <p aria-label="Hit me up for offers or collaborations">Hit me up for — <br/> offers or collabs</p>
                    <Mouse/>
                </motion.div>
            </section>
    )
}