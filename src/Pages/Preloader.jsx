import PropTypes from 'prop-types';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function Preloader({setLoading, content}){

    useEffect(() =>{
        document.title = "Loading...";

        let tl = gsap.timeline();
    
        gsap.set('.preloader span', {opacity: 0, y: 100});
        //This allows the animation to still run even when user is tabbed somewhere else
        gsap.ticker.lagSmoothing(0);
        tl.to('.preloader span', {
            opacity: 1,
            y: 0,
            stagger: .03,
            ease: 'back.out'
        }).to('.preloader__char, .preloader__dot', {
            stagger: .03,
            y: -100,
            opacity: 0,
            display: 'none',
        }).to('.preloader span', {
            opacity: 0,
            display: 'none',
            delay: .2,
        })

        setTimeout(() => setLoading(false), 2300)
    },[setLoading])

    return(
        <>
            <p aria-label='Kim Oliver Manga'>           
                {content.split('').map((letter, index) => {
                    //I know this thing here is ugly but it works, for now...
                    return(
                        <span key={index} className={letter === 'K' ? 'charK' : letter === 'O' ? 'charO' : index === 11 ? 'charM' : index === 15 ? 'charA' : letter === '.' ? 'preloader__dot' : 'preloader__char'}>
                                {letter}
                        </span>
                    )
                })}
            </p>
        </>
    )
}

Preloader.propTypes = {
    setLoading: PropTypes.func,
    content: PropTypes.string
}