import { HashLink as Link } from "react-router-hash-link";
import Logo from "../svg/Logo";
import Burger from "../svg/Burger";
import PropTypes from 'prop-types';
import Close from "../svg/Close";
import { motion } from "framer-motion";

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

    const burgerAnim = {
        initial: {scale: 0},
        animate: {
            scale: 1,
            transition: {
                ease: [0.45, 0, 0.55, 1],
                duration: .8
            }
        }
    }

    return(
        <header className="header">
            <nav>
                <ul role="list">
                    <motion.li variants={logoAnim} initial={'initial'} animate={'animate'}>
                        <Link to="#" title="Website Logo"> <Logo/> </Link>
                    </motion.li>
                    <motion.li variants={burgerAnim} initial={'initial'} animate={'animate'} className="burger">
                        {
                            showNav ?
                            <Link to='/' title="Back to Page" className="close" onClick={()=>setShowNav(false)}><Close/></Link> : 
                            <Link to='/' title="Click to open Navigation Panel" id="burger" onClick={()=>{setShowNav(true)}}><Burger/></Link>
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