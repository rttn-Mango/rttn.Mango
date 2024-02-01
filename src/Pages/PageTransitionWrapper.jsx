import PropTypes from 'prop-types';
import gsap from 'gsap'
import { useEffect } from 'react';
import { useLoadingContext } from '../hooks/useLoadingContext';

export default function PageTransitionWrapper({children}){
    const {loading} = useLoadingContext();

    useEffect(() => {
        let tl = gsap.timeline();

        //This allows the animation to still run even when user is tabbed somewhere else
        gsap.ticker.lagSmoothing(0);

        if(!loading){
            tl.fromTo('.col', {scaleX: 0} ,{
                scaleX: 1,
                duration: 1,
                stagger: .2,
                onStart: () => {
                    document.querySelector('main').classList.add('hide')
                    setTimeout(() => document.querySelector('main').classList.remove('hide'), 2000)
                }
            })
            .to('.col', {
                scaleX: 0,
                duration: 2,
                stagger: .2,
            })
            .to('.page-transition-wrapper', {zIndex: -1})
        }


        
    },[loading])

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