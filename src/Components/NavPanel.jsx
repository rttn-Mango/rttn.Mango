import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import resume from '../../public/Resume.pdf'
import Download from '../assets/Download.svg'

export default function NavPanel({setShowNav}){
    return(
        <>
            <ul role="list">
                <li><Link to='/about' title='About Me' onClick={()=> {setShowNav(false)}}><span>A</span>bout</Link></li>
                <li><Link to='/works' title='Personal Projects' onClick={()=> {setShowNav(false)}}><span>W</span>orks</Link></li>
                <li><Link to='/contact' title='Contact Details' onClick={()=> {setShowNav(false)}}><span>C</span>ontact</Link></li>
                <li><a href={resume} className="btn" download="Manga, Kim Oliver - Resume">Resume <img src={Download} alt="Download Icon" draggable="false" width={30} height={30}/></a></li>
            </ul>
        </>
    )
}

NavPanel.propTypes = {
    setShowNav: PropTypes.func
}