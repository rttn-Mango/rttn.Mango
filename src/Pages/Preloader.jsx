import PropTypes from 'prop-types';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function Preloader({setLoading, content}){

    useEffect(() =>{
        document.title = "Loading...";

        let tl = gsap.timeline();
    
        gsap.set('.preloader span', {opacity: 0, y: 100});
        
        tl.to('.preloader span', {
            opacity: 1,
            y: 0,
            stagger: .1,
            ease: 'back.out'
        }).to('.preloader__char, .preloader__dot', {
            delay: .1,
            stagger: .1,
            y: -100,
            opacity: 0,
            display: 'none',
            duration: .5
        }).to('.preloader span', {
            opacity: 0,
            display: 'none',
            delay: 1
        }).to('.preloader__bg', {
            delay: .5,
            scaleY: 0,
            stagger: .2,
        })

        setTimeout(() => setLoading(false), 5200)
    },[setLoading])

    return(
        <>
            
            {/* Empty divs which fade out once preloader is */}
            <div className="preloader__bg"></div>
            <div className="preloader__bg"></div>

            <h1 aria-label='Kim Oliver Manga'>           
                {content.split('').map((letter, index) => {
                    //I know this thing here is ugly but it works, for now...
                    return(
                        <span key={index} className={letter === 'K' ? 'charK' : letter === 'O' ? 'charO' : index === 11 ? 'charM' : index === 15 ? 'charA' : letter === '.' ? 'preloader__dot' : 'preloader__char'}>
                                {letter}
                        </span>
                    )
                })}
            </h1>
        </>
    )
}

Preloader.propTypes = {
    setLoading: PropTypes.func,
    content: PropTypes.string
}