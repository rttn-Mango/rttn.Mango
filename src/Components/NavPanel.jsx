import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import resume from '../../public/Resume.pdf'

export default function NavPanel({setShowNav}){
    return(
        <>
            <ul role="list">
                <li><Link to='/about' title='About Me' onClick={()=> {setShowNav(false)}}><span>A</span>bout</Link></li>
                <li><Link to='/works' title='Personal Projects' onClick={()=> {setShowNav(false)}}><span>P</span>rojects</Link></li>
                <li><Link to='/contact' title='Contact Details' onClick={()=> {setShowNav(false)}}><span>C</span>ontacts</Link></li>
                <li><a href={resume} className="btn" download="Manga, Kim Oliver - Resume">Download Resume</a></li>
            </ul>
        </>
    )
}

NavPanel.propTypes = {
    setShowNav: PropTypes.func
}