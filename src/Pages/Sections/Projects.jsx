import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';

//Component
import ProjectsCard from '../../Components/ProjectsCard';

//Images
import Minify from '../../assets/Minify.png'
import Shortly from '../../assets/Shortly.png'

export default function Projects(){

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
        gsap.registerPlugin(ScrollTrigger);

        //Makes the animation only run when user doesn't disable animations
        gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
            gsap.fromTo('.projects h2 span', {opacity: 0, y: 400}, {
                opacity: 1,
                y: 0,
                duration: .7,
                stagger: .1,
                scrollTrigger: {
                    trigger: '.projects h2 span',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: 2,
                }
            })

            gsap.fromTo('.projects__container .minify', {opacity: 0, x: -1000}, {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: '.projects__container .minify',
                    start: 'top bottom',
                    end: '70% bottom',
                    scrub: 3,
                }
            })

            gsap.fromTo('.projects__container .shortly', {opacity: 0, x: 1000}, {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: '.projects__container .shortly',
                    start: 'top bottom',
                    end: '70% bottom',
                    scrub: 3,
                }
            })
        })
    }, [])

    return(
        <section className="projects" id='projects'>
            <h2 aria-label='Works'>
                {
                    'Works'.split('').map((char, index) => <span key={index}>{char}</span> )
                }
            </h2>

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