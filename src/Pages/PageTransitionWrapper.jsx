import PropTypes from 'prop-types';
import gsap from 'gsap'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoadingContext } from '../hooks/useLoadingContext';

export default function PageTransitionWrapper({children}){
    const page = useLocation()
    const {loading} = useLoadingContext();

    // const aboutpageAnim = () => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     gsap.registerPlugin(ScrollTrigger);

    //         gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
    //             gsap.to('div.wrapper', {
    //                 y: '-2dvw',
    //                 ease: 'power2',
    //                 opacity: .3,
    //                 scale: .93,
    //                 scrollTrigger: {
    //                     trigger: 'div.wrapper',
    //                     start: 'top top',
    //                     end: 'bottom',
    //                     pin: true,
    //                     scrub: true,
    //                 }
    //             })
    //         })
    // }

    useEffect(() => {
        let tl = gsap.timeline();

        if(!loading){
            tl.fromTo('.col', {scaleX: 0} ,{
                scaleX: 1,
                duration: 1,
                stagger: .2,
            })
            .to('.col', {
                scaleX: 0,
                duration: 2,
                stagger: .2,
            })
            .to('.page-transition-wrapper', {
                zIndex: -1,
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