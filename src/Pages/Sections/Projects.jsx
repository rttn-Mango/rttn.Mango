import { useState } from 'react';
import HoverModal from '../../Components/HoverModal';
import ProjectsCard from '../../Components/ProjectsCard';

import {motion} from 'framer-motion'

export default function Projects(){
    const [modal, setModal] = useState({active: false, index: 0})
    const PROJECTS_DATA = [
        {
            id: 'link',
            title: 'Shortly',
            src: 'https://sh0rtly.vercel.app/',
            clr: '#02162c',
            img: 'public/Shortly.png'
        },
        {
            id: 'bank',
            title: 'Easybank',
            src: 'https://izibank.vercel.app/',
            clr: '#0a313d',
            img: 'public/Easybank.png'
        }
    ]

    const textRevealAnim = {
        initial: {opacity: 0},
        animate: {
            opacity: 1,
            transition: {
                duration: .75,
                delay: .25
            }
        }
    }

    return(
        <section className="projects" id='projects'>
            <motion.h2 variants={textRevealAnim} initial="initial" whileInView="animate">Personal Projects</motion.h2>

            {
                PROJECTS_DATA.map((project, i) => {
                    return (
                        <ProjectsCard
                            key={project.id}
                            setModal={setModal}
                            title={project.title}
                            src={project.src}
                            index={i}
                        />
                    )
                })
            }
            <HoverModal modal={modal} PROJECTS_DATA={PROJECTS_DATA}/>
        </section>
    )
}