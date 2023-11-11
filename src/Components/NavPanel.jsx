import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CV from '../../public/CV.pdf'

export default function NavPanel({setShowNav}){
    return(
        <>
            <ul role="list">
                <li><Link to='/about' title='About Me' onClick={()=> {setShowNav(false)}}><span>A</span>bout</Link></li>
                <li><Link to='/works' title='Personal Projects' onClick={()=> {setShowNav(false)}}><span>P</span>rojects</Link></li>
                <li><Link to='/contact' title='Contact Details' onClick={()=> {setShowNav(false)}}><span>C</span>ontacts</Link></li>
                <li><a href={CV} className="btn" download="Manga, Kim Oliver - CV">Download CV</a></li>
            </ul>
        </>
    )
}

NavPanel.propTypes = {
    setShowNav: PropTypes.func
}