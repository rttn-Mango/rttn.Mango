import {motion} from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export default function Preloader({setLoading, content}){

    //Letter staggering animation
    const letterStagger = {
        initial: {opacity: 0, y: 50},
        animate: {opacity: 1, y: 0, delay: 0.5}
    }
    
    const animatePreloader = {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 1,
            transition: {
                ease: [0.36, 0, 0.66, -0.56],
                duration: 2
            }
        },
        exit: {opacity: 0}

    }

    useEffect(() =>{document.title = "Loading..."},[])

    return(
        <motion.div
            className="preloader"
            variants={animatePreloader}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            onAnimationComplete={()=> {
                setLoading(false);
                document.title = "Home"
            }}
        >

            <motion.h1
                initial='initial'
                animate='animate'
                transition={{staggerChildren: .1, ease: [0.45, 0, 0.55, 1]}}>
                {content.split('').map((letter, index) => {
                    return(
                        <motion.span
                            key={index} 
                            variants={letterStagger}>
                                {letter}
                        </motion.span>
                    )
                })}
            </motion.h1>

        </motion.div>
    )
}

Preloader.propTypes = {
    setLoading: PropTypes.func,
    content: PropTypes.string
}