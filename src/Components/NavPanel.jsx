import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import resume from '../../public/Kim Oliver Manga - Resume.pdf'

//Icons
import TiltedArrow from '../svg/TiltedArrow';
import Close from "../svg/Close";

export default function NavPanel({setShowNav, fromHeader}){
    return(
        <>  
            {/* TODO: BUGFIX */}
            {fromHeader && <div className="close" onClick={()=>setShowNav(false)}><Close/></div>}
            <ul role="list">
                <li><Link to='/' title='Home' onClick={()=> {setShowNav(false)}}>Home</Link></li>
                <li><Link to='/about' title='About me' onClick={()=> {setShowNav(false)}}>About</Link></li>
                <li><Link to='/works' title='Recent works' onClick={()=> {setShowNav(false)}}>Works</Link></li>
                <li><Link to='/contact' title='Send me a message' onClick={()=> {setShowNav(false)}}>Contact</Link></li>
                <li><a href={resume} title='Download my resume' className="resume" download>Resume <TiltedArrow/></a></li>
            </ul>
        </>
    )
}

NavPanel.propTypes = {
    setShowNav: PropTypes.func,
    fromHeader: PropTypes.bool
}