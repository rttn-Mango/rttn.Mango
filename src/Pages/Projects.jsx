import { useState } from 'react';
import HoverModal from './Components/HoverModal';
import ProjectsCard from './Components/ProjectsCard';

export default function Projects(){
    const [modal, setModal] = useState({active: false, index: 0})
    const PROJECTS_DATA = [
        {
            title: 'Shortly',
            src: 'https://sh0rtly.vercel.app/',
            clr: '#02162c',
            img: 'public/Shortly.png'
        },
        {
            title: 'Easybank',
            src: 'https://izibank.vercel.app/',
            clr: '#0a313d',
            img: 'public/Easybank.png'
        }
    ]

    return(
        <section className="projects" id='projects'>
            <h2>Personal Projects</h2>

            {
                PROJECTS_DATA.map((project, index) => {
                    return (
                        <ProjectsCard
                            key={index}
                            setModal={setModal}
                            title={project.title}
                            src={project.src}
                            index={index}
                        />
                    )
                })
            }
            <HoverModal modal={modal} PROJECTS_DATA={PROJECTS_DATA}/>
        </section>
    )
}