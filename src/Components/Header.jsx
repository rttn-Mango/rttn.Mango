import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import gsap from "gsap";
import { useEffect } from "react";
import { useLoadingContext } from "../hooks/useLoadingContext";
import useHoverContentContext from "../hooks/useHoverContentContext";

//Icons
import Burger from "../svg/Burger";
import Close from '../svg/Close';
import LightModeIcon from '../assets/LightModeIcon.svg'
import DarkModeIcon from '../assets/DarkModeIcon.svg'

export default function Header({setShowNav, showNav, setFromHeader, changePalette ,setChangePalette, fromHeader}){
    const path = useLocation().pathname;
    const {loading} = useLoadingContext()
    const {hoverContent, setHoverContent} = useHoverContentContext();

    useEffect(() => {
        if(!loading){
            //Animations will only show when prefers-reduced-motion is set to no-preference
            gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
                //This allows the animation to still run even when user is tabbed somewhere else
                gsap.ticker.lagSmoothing(0);

                gsap.fromTo('.logo', {opacity: 0, x: -100} ,{
                    opacity: 1,
                    x: 0
                })
                gsap.fromTo('.header__pages a', {opacity: 0, y: 100} ,{
                    opacity: 1,
                    y: 0,
                    stagger: .3,
                    delay: .5
                })
                gsap.fromTo('.header__btns', {opacity: 0, x: 100} ,{
                    opacity: 1,
                    x: 0,
                    delay: .5
                })
            })
        }
    }, [loading])

    return(
        <header className="header">
            <nav>
                <ul role="list">
                    <li>
                        <Link to="/" title="Logo" className="logo" aria-label="Logo" onMouseEnter={() => setHoverContent({...hoverContent ,shouldBeDisabled: true})} onMouseLeave={() => setHoverContent({...hoverContent, shouldBeDisabled: false})}> KOMA </Link>
                    </li>
                    <li className="header__pages">
                        <Link onMouseEnter={() => setHoverContent({...hoverContent ,isHovered: true, height: 100, width: 100})} onMouseLeave={() => setHoverContent({...hoverContent, isHovered: false, height: 25, width: 25})} className={path === '/' ? 'active' : 'page'} to="/" title="Homepage">Home</Link>
                        <Link onMouseEnter={() => setHoverContent({...hoverContent ,isHovered: true, height: 100, width: 100})} onMouseLeave={() => setHoverContent({...hoverContent, isHovered: false, height: 25, width: 25})} className={path === '/about' ? 'active' : 'page'} to="/about" title="About me">About</Link>
                        <Link onMouseEnter={() => setHoverContent({...hoverContent ,isHovered: true, height: 100, width: 100})} onMouseLeave={() => setHoverContent({...hoverContent, isHovered: false, height: 25, width: 25})} className={path.includes('/works') ? 'active' : 'page'} to="/works" title="Recent Works">Works</Link>
                        <Link onMouseEnter={() => setHoverContent({...hoverContent ,isHovered: true, height: 100, width: 100})} onMouseLeave={() => setHoverContent({...hoverContent, isHovered: false, height: 25, width: 25})} className={path === '/contact' ? 'active' : 'page'} to="/contact" title="Send me a Message">Contact</Link>
                    </li>
                    <li className="header__btns">                       
                        {
                            changePalette ? 
                            <img 
                                src={DarkModeIcon} 
                                onMouseEnter={() => setHoverContent({...hoverContent ,shouldBeDisabled: true})} 
                                onMouseLeave={() => setHoverContent({...hoverContent, shouldBeDisabled: false})} 
                                onClick={() => setChangePalette(false)} 
                                alt="Change Background to Dark Mode" 
                                draggable="false" 
                                width={40} height={40}
                            /> 
                            : 
                            <img 
                                src={LightModeIcon} 
                                onMouseEnter={() => setHoverContent({...hoverContent ,shouldBeDisabled: true})} 
                                onMouseLeave={() => setHoverContent({...hoverContent, shouldBeDisabled: false})}
                                onClick={() => setChangePalette(true)} 
                                alt="Change Background to Light Mode" 
                                draggable="false" 
                                width={40} height={40}
                            />
                        }
                        <div className={fromHeader ? "header__btns--mobile-menu | active" : "header__btns--mobile-menu"}>
                            {
                                showNav ? <span onClick={()=>{setShowNav(false); setFromHeader(false)}}><Close/></span> : <span onClick={()=>{setShowNav(true); setFromHeader(true)}}><Burger/></span>
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
    setChangePalette: PropTypes.func,
    changePalette: PropTypes.bool,
    fromHeader: PropTypes.bool,
}