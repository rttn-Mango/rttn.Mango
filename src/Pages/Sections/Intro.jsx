import hrms from '../../assets/hrms.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';

export default function Intro(){

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
            <p>Kumusta? I&apos;m <span>Kim</span>, a young blood from the Philippines.</p>
            <img src={hrms} alt="Holy Rosary Minor Seminary" draggable="false" height={530} width={530}/>
        </section>
    )
}