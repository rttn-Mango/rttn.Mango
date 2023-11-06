import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { motion } from 'framer-motion'
import gsap from 'gsap';

export default function HoverModal({modal, PROJECTS_DATA}){
    const {active, index} = modal;

    const hoverScaleAnimation = {
        initial: {scale: 0, x: '-50%', y: '-50%'},
        open: {scale: 1, x: '-50%', y: '-50%', transition: {duration: .4, ease: [0.76, 0, 0.24, 1]}},
        close: {scale: 0, x: '-50%', y: '-50%', transition: {duration: .4, ease: [0.76, 0, 0.24, 1]}}
    }

    useEffect(() => {
        //gsap variables to make the wrapper follow the mouse
        let mouseContainerX = gsap.quickTo('#carousel', 'left', {duration: .8, ease: 'power1'})
        let mouseContainerY = gsap.quickTo('#carousel', 'top', {duration: .8, ease: 'power1'})

        window.addEventListener('mousemove', e => {
            //Varialbes to get the mouse position
            const clientMouseX = e.clientX;
            const clientMouseY = e.offsetY + e.clientY;

            //Sends mouse position to gsap
            mouseContainerX(clientMouseX)
            mouseContainerY(clientMouseY)
        })  
    }, [])

    return(
        <>
            <motion.div 
                variants={hoverScaleAnimation} 
                initial='initial'
                animate={active ? 'open' : 'close'}    
                className="projects__hover-wrapper"
                id="carousel"
            >
                <div style={{top: index * -100 + '%'}} className="projects__hover-container">
                        {
                            PROJECTS_DATA.map((project, index) =>  {
                                return(
                                    <div style={{backgroundColor: project.clr}} className="projects__hover-content" key={`${project.id}${index}`}>
                                        <img 
                                            src={project.img} 
                                            alt="Site Image" 
                                            draggable="false"
                                            width={350}
                                            height={0}
                                        />
                                    </div>
                                )
                            })
                        }
                </div>
            </motion.div>
        </>

    )
}

HoverModal.propTypes = {
    modal: PropTypes.object,
    PROJECTS_DATA: PropTypes.array,
}

