import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import resume from '../../public/Kim Oliver Manga - Resume.pdf'

//Icons
import TiltedArrow from '../svg/TiltedArrow';
import Close from "../svg/Close";

export default function NavPanel({setShowNav, fromHeader, setFromHeader}){
    const path = useLocation().pathname;

    console.log(fromHeader)

    return(
        <>  
            {fromHeader && <div tabIndex={-1} className="close" onClick={()=>{setShowNav(false); setFromHeader(false)}}><Close/></div>}
            <ul role="list">
                <li><Link className={path === '/' ? 'active' : 'page'} to='/' title='Home' onClick={()=> {setShowNav(false)}}>Home</Link></li>
                <li><Link className={path === '/about' ? 'active' : 'page'} to='/about' title='About me' onClick={()=> {setShowNav(false)}}>About</Link></li>
                <li><Link className={path === '/works' ? 'active' : 'page'} to='/works' title='Recent works' onClick={()=> {setShowNav(false)}}>Works</Link></li>
                <li><Link className={path === '/contact' ? 'active' : 'page'} to='/contact' title='Send me a message' onClick={()=> {setShowNav(false)}}>Contact</Link></li>
                <li><a href={resume} title='Download my resume' className="resume" download>Resume <TiltedArrow/></a></li>
            </ul>
        </>
    )
}

NavPanel.propTypes = {
    setShowNav: PropTypes.func,
    fromHeader: PropTypes.bool,
    setFromHeader: PropTypes.func,
}   