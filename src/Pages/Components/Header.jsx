import { HashLink as Link } from "react-router-hash-link";
import Logo from "../svg/Logo";
import Burger from "../svg/Burger";
import PropTypes from 'prop-types';
import Close from "../svg/Close";

export default function Header({setShowNav, showNav}){
    return(
        <header className="header">
            <nav>
                <ul role="list">
                    <li>
                        <Link to="#" title="Website Logo"> <Logo/> </Link>
                    </li>
                    <div className="group">
                        <li><img src="public/Moon.svg" alt="Dark Mode Logo" draggable="false" /></li>
                        <li className="burger">
                            {
                                showNav ?
                                <Link to='/' title="Back to Page" className="close" onClick={()=>setShowNav(false)}><Close/></Link> : 
                                <Link to='/' title="Click to open Navigation Panel" id="burger" onClick={()=>{setShowNav(true)}}><Burger/></Link>
                            }
                            </li>
                    </div>
                </ul>
            </nav>
        </header>


    )
}

Header.propTypes = {
    setShowNav: PropTypes.func,
    showNav: PropTypes.bool
}