//Component
import ProjectsCard from '../../Components/ProjectsCard';

//Images
import Minify from '../../assets/Minify.webp'
import Shortly from '../../assets/Shortly.png'

export default function Projects(){
    
    const PROJECTS_DATA = [
        {
            title: 'OptiMG',
            src: 'https://optimg.vercel.app/',
            img: Minify
        },
        {
            title: 'Shortly',
            src: 'https://sh0rtly.vercel.app/',
            img: Shortly
        },
    ]

    return(
        <section className="projects" id='projects'>
            <h2>Works</h2>

            <div className="projects__container">
            {
                PROJECTS_DATA.map((project, i) => {
                    return (
                        <ProjectsCard
                            key={i}
                            title={project.title}
                            src={project.src}
                            index={i}
                        />
                    )
                })
            }
            </div>
        </section>
    )
}