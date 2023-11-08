import { HashLink as Link } from "react-router-hash-link";
import Logo from "../svg/Logo";
import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import Close from "../svg/Close";

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
                        <Link to="/" title="Website Logo"> <Logo/> </Link>
                    </motion.li>
                    <motion.li className="header__pages" initial="initial" animate="animate" transition={{staggerChildren: .3}}>
                        <motion.span variants={navPagesAnim}><Link to="/about" smooth title="Who am I?">About</Link></motion.span>
                        <motion.span variants={navPagesAnim}><Link to="/" smooth title="Personal Projects">Works</Link></motion.span>
                        <motion.span variants={navPagesAnim}><Link to="/send" smooth title="Send me a Message">Contact</Link></motion.span>
                    </motion.li>

                    <motion.li className="header__mobile-menu" initial="initial" animate="animate" transition={{staggerChildren: .3}}>
                        {showNav ? 
                            <Link to='/' title="Back to Page" className="close" onClick={()=>setShowNav(false)}><Close/></Link>
                            : <motion.span variants={navPagesAnim}><Link to="/" smooth title="Open Menu" onClick={()=>{setShowNav(true)}}>Menu</Link></motion.span>
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