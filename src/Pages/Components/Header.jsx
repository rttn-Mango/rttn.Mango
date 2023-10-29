import { Link } from "react-router-dom";
import Logo from "../svg/Logo";
import Burger from "../svg/Burger";
import PropTypes from 'prop-types'

export default function Header({setShowNav}){
    return(
        <header className="header">
            <nav>
                <ul role="list">
                    <li>
                        <Link to="/"> <Logo/> </Link>
                    </li>
                    <div className="group">
                        <li><img src="public/Moon.svg" alt="Dark Mode Logo" draggable="false" /></li>
                        <li className="burger"><Link to='/'  onClick={()=>{setShowNav(true)}}><Burger/></Link></li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

Header.propTypes = {
    setShowNav: PropTypes.func
}