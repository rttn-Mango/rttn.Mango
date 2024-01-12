import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import gsap from "gsap";
import { useEffect } from "react";

//Icons
import Burger from "../svg/Burger";
import LightModeIcon from '../assets/LightModeIcon.svg'

export default function Header({setShowNav, showNav, setFromHeader}){
    const path = useLocation().pathname;
    
    useEffect(() => {
        //Animations will only show when prefers-reduced-motion is set to no-preference
        gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
            //This allows the animation to still run even when user is tabbed somewhere else
            gsap.ticker.lagSmoothing(0);

            gsap.fromTo('.logo', {opacity: 0, x: -100} ,{
                delay: 6,
                opacity: 1,
                x: 0
            })
            gsap.fromTo('.header__pages a', {opacity: 0, y: 100} ,{
                delay: 6,
                opacity: 1,
                y: 0,
                stagger: .3
            })
            gsap.fromTo('.header__btns', {opacity: 0, x: 100} ,{
                delay: 6,
                opacity: 1,
                x: 0
            })
        })
    }, [])

    return(
        <header className="header">
            <nav>
                <ul role="list">
                    <li>
                        <Link to="/" title="Logo" className="logo" aria-label="Logo"> KOMA </Link>
                    </li>
                    <li className="header__pages">
                        <Link className={path === '/' ? 'active' : ''} to="/" title="Homepage">Home</Link>
                        <Link className={path === '/about' ? 'active' : ''} to="/about" title="About me">About</Link>
                        <Link className={path === '/works' ? 'active' : ''} to="/works" title="Recent Works">Works</Link>
                        <Link className={path === '/contact' ? 'active' : ''} to="/contact" title="Send me a Message">Contact</Link>
                    </li>
                    <li className="header__btns">
                        <img src={LightModeIcon} alt="Change Background to Light Mode" draggable="false" width={40} height={40}/>
                        <div className="header__btns--mobile-menu">
                            {
                                showNav ? null : <div onClick={()=>{setShowNav(true); setFromHeader(true)}}><Burger/></div>
                            }
                        </div>
                    </li>
                </ul>
            </nav>
        </header>


    )
}

Header.propTypes = {
    setShowNav: PropTypes.func,
    showNav: PropTypes.bool,
    setFromHeader: PropTypes.func,
}