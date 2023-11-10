import { useState } from 'react';
import HoverModal from '../../Components/HoverModal';
import ProjectsCard from '../../Components/ProjectsCard';
import {motion} from 'framer-motion'

//Images
import Shortly from '../../assets/Shortly.png'
import Easybank from '../../assets/Easybank.png'

export default function Projects(){
    const [modal, setModal] = useState({active: false, index: 0})
    const PROJECTS_DATA = [
        {
            id: 'link',
            title: 'Shortly',
            src: 'https://sh0rtly.vercel.app/',
            clr: '#02162c',
            img: Shortly
        },
        {
            id: 'bank',
            title: 'Easybank',
            src: 'https://izibank.vercel.app/',
            clr: '#0a313d',
            img: Easybank
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
            <motion.h2 variants={textRevealAnim} initial="initial" whileInView="animate">Recent Works</motion.h2>

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