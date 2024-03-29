import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Skills(){
    const isInitialMount = useLocation().key === 'default' && true;
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let heading3 = gsap.utils.toArray('.skills__list h3')

        //Makes the animation only run when user doesn't disable animations
        gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
            if(isInitialMount){
                gsap.fromTo('.skills__desc', {opacity: 0}, {
                    opacity: 1,
                    duration: .7,
                    scrollTrigger: {
                        trigger: '.skills',
                        start: 'top bottom',
                        end: '20% bottom',
                    }
                })
    
                heading3.map(heading3 => {
                    gsap.fromTo(heading3, {x: 700}, {
                        x: 0,
                        duration: .7,
                        stagger: .2,
                        scrollTrigger: {
                            trigger: heading3,
                            start: 'top bottom',
                            end: '70% bottom',
                        }
                    })
                })
            }
        })
    }, [isInitialMount])

    return(
        <section className="skills">
            <div className="skills__desc">
                <h2>Skill Set</h2>
                <p>These are the tools and technologies I currently know. </p>
                <p>I&apos;m constantly looking to expand my present skill set by studying new technologies that can broaden my horizons.</p>
            </div>

            <section className="skills__list">
                <h3>React</h3>
                <h3>SCSS</h3>
                <h3>UI Design</h3>
                <h3>Figma</h3>
                <h3>JavaScript</h3>
                <h3>HTML5</h3>
                <h3>CSS3</h3>
                <h3>GSAP</h3>
            </section>
        </section>
    )
}