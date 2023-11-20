import { HashLink as Link } from "react-router-hash-link";
import Logo from "../svg/Logo";
import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import Close from "../svg/Close";
import Burger from "../svg/Burger";
import Download from '../assets/Download.svg'
import resume from '../../public/Resume.pdf'

export default function Header({setShowNav, showNav}){
    const logoAnim = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                ease: [0.45, 0, 0.55, 1],
                duration: 1.6
            }
        }
    }

    const navPagesAnim = {
        initial: {opacity: 0, y: 70},
        animate: {
            opacity: 1, 
            y:0,
            transition: {
                ease: [0.45, 0, 0.55, 1],
                duration: 1.6
            }
        }
    }

    return(
        <header className="header">
            <nav>
                <ul role="list">
                    <motion.li variants={logoAnim} initial={'initial'} animate={'animate'}>
                        <Link to="/" title="Website Logo" className="logo"> <Logo/> </Link>
                    </motion.li>
                    <motion.li className="header__pages" initial="initial" animate="animate" transition={{staggerChildren: .3}}>
                        <motion.span variants={navPagesAnim}><Link to="/about" smooth title="Who am I?">About</Link></motion.span>
                        <motion.span variants={navPagesAnim}><Link to="/works" smooth title="Personal Projects">Works</Link></motion.span>
                        <motion.span variants={navPagesAnim}><Link to="/contact" smooth title="Send me a Message">Contact</Link></motion.span>
                        <motion.span variants={navPagesAnim}><a href={resume} className="btn" download="Manga, Kim Oliver - Resume">Resume <img src={Download} alt="Download Icon" draggable="false" width={30} height={30}/></a></motion.span>
                    </motion.li>

                    <motion.li className="header__mobile-menu" initial="initial" animate="animate" transition={{staggerChildren: .3}}>
                        {
                            showNav ? <motion.span variants={navPagesAnim} className="close" onClick={()=>setShowNav(false)}><Close/></motion.span> : <motion.span variants={navPagesAnim} onClick={()=>{setShowNav(true)}}><Burger/></motion.span>
                        }
                    </motion.li>
                </ul>
            </nav>
        </header>


    )
}

Header.propTypes = {
    setShowNav: PropTypes.func,
    showNav: PropTypes.bool
}