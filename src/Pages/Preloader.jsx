import {easeIn, motion} from 'framer-motion';
import PropTypes from 'prop-types'
import { useEffect } from 'react';

export default function Preloader({setLoading, content}){

    //Letter staggering animation
    const stagger = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0},
        exit: {y: -90}
    }

    //Delay for the preloader to fade out
    useEffect(() =>{
        const timer = setTimeout(() =>{
            setLoading(false);
            document.title = "Home"
        },3500);
        document.title = "Loading..."
        return () => clearTimeout(timer);
    })

    return(
        <motion.div 
            className="preloader"
            initial={{opacity: 1}}
            animate={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 1, delay: 2, ease: 'easeOut'}}>

            <motion.h1
                initial={"hidden"}
                animate={"visible"}
                transition={{staggerChildren: .1, ease: easeIn}}>
                {content.split('').map((letter, index) => {
                    return(
                        <motion.span
                            key={index} 
                            variants={stagger}
                        >
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