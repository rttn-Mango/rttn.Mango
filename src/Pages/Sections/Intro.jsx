import hrms from '../../assets/hrms.webp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';
import useHoverContentContext from '../../hooks/useHoverContentContext';

export default function Intro(){
    const {hoverContent, setHoverContent} = useHoverContentContext();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        //Makes the animation only run when user doesn't disable animations
        gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
            gsap.fromTo('.intro p', {opacity: 0}, {
                opacity: 1,
                duration: .7,
                scrollTrigger: {
                    trigger: '.intro',
                    start: '30% bottom',
                    end: '60% bottom',
                    scrub: 2,
                }
            })

            gsap.fromTo('.intro img', {scale: 0}, {
                scale: 1,
                duration: .7,
                scrollTrigger: {
                    trigger: '.intro',
                    start: '30% bottom',
                    end: '70% bottom',
                    scrub: 2,
                }
            })
        })
        
    }, [])

    return(
        <section className="intro">
            <p>Kumusta? I&apos;m <span onMouseEnter={() => setHoverContent({...hoverContent, isHovered: true, elementToRender: 'img', height: 160, width: 160})} onMouseLeave={() => setHoverContent({...hoverContent, isHovered: false, elementToRender: null, height: 25, width: 25})} >Kim</span>, a young blood from the Philippines.</p>
            <img src={hrms} alt="Holy Rosary Minor Seminary" draggable="false" height={500} width={530}/>
        </section>
    )
}