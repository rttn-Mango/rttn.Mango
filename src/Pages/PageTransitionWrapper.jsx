import PropTypes from 'prop-types';
import gsap from 'gsap'
import { useEffect } from 'react';
import { useLoadingContext } from '../hooks/useLoadingContext';
import { useLocation } from 'react-router-dom';

export default function PageTransitionWrapper({children}){
    const {loading} = useLoadingContext();
    const path = useLocation();

    useEffect(() => {
        let tl = gsap.timeline();
        //This allows the animation to still run even when user is tabbed somewhere else
        gsap.ticker.lagSmoothing(0);

        if(!loading){
            {path.key !== 'default' &&  tl.fromTo('.col', {scaleX: 0} ,{
                scaleX: 1,
                duration: .5,
                stagger: .1,
                onStart: () => {
                    document.querySelector('main').classList.add('hide')
                    setTimeout(() => document.querySelector('main').classList.remove('hide'), 1400)
                }
            })}
            tl.to('.col', {
                scaleX: 0,
                duration: 1,
                stagger: .1,
            })
            .to('.page-transition-wrapper', {zIndex: -1})
        }


        
    },[loading, path])

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