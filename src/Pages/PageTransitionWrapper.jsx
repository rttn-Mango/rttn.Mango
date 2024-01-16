import PropTypes from 'prop-types';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoadingContext } from '../hooks/useLoadingContext';

export default function PageTransitionWrapper({children}){
    const page = useLocation()
    const {loading} = useLoadingContext();

    const homepageAnim = () => {
        gsap.registerPlugin(ScrollTrigger);
        
        //Makes the animation only run when user doesn't disable animations
        gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
            gsap.to('div.wrapper', {
                y: '-2dvw',
                ease: 'power2',
                opacity: .3,
                scale: .90,
                scrollTrigger: {
                    trigger: 'div.wrapper',
                    start: 'top top',
                    end: '130%',
                    scrub: true,
                    pin: true,
                }
            })
        })
    }

    const aboutpageAnim = () => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.registerPlugin(ScrollTrigger);

            gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
                gsap.to('div.wrapper', {
                    y: '-2dvw',
                    ease: 'power2',
                    opacity: .3,
                    scale: .93,
                    scrollTrigger: {
                        trigger: 'div.wrapper',
                        start: 'top top',
                        end: 'bottom',
                        pin: true,
                        scrub: true,
                    }
                })
            })
    }

    useEffect(() => {
        let tl = gsap.timeline();

        if(!loading){
            //Bandaid soution to stop this part of page transition from happening when user has just visited the site
            page.key !== 'default' && tl.fromTo('.col', {scaleX: 0} ,{
                scaleX: 1,
                duration: 1,
                stagger: .2,
            })
            tl.to('.col', {
                scaleX: 0,
                duration: 2,
                stagger: .2,
            })
            .to('.page-transition-wrapper', {
                zIndex: -1,
                onComplete: () => {
                    switch (page.pathname){
                        case '/': homepageAnim(); break;
                        case '/about': aboutpageAnim(); break;
                        default: break;
                    }
                }
            })
        }
    },[page.pathname, page.key, loading])

    return(
        <>
            <div className="page-transition-wrapper">
                {
                    [...Array(5)].map((_, i) => {
                        return <div key={i} className={i % 2 === 0 ? 'col left' : 'col right'}/>
                    })
                }
            </div>

            {children}
        </>
    )
}

PageTransitionWrapper.propTypes = {children: PropTypes.node}