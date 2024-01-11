import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

//Component
import ProjectsCard from '../../Components/ProjectsCard';

//Images
import Minify from '../../assets/Minify.png'
import Shortly from '../../assets/Shortly.png'

export default function Projects(){
    const wrapper = useRef(null)

    const PROJECTS_DATA = [
        {
            title: 'minify',
            src: 'https://minifyy.vercel.app/',
            img: Minify
        },
        {
            title: 'Shortly',
            src: 'https://sh0rtly.vercel.app/',
            img: Shortly
        },
    ]

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
            gsap.to(wrapper.current, {
                y: '-2dvw',
                ease: 'power2',
                opacity: .3,
                scrollTrigger: {
                    trigger: wrapper.current,
                    start: 'top top',
                    end: 'center',
                    pin: true,
                    scrub: true,
                }
            })
        })
    }, [])

    return(
        <section className="projects" id='projects'>
            <div className="wrapper" ref={wrapper}>
                <h2>Works</h2>

                {
                    PROJECTS_DATA.map((project, i) => {
                        return (
                            <ProjectsCard
                                key={project.id}
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