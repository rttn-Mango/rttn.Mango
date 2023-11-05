import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';

export default function NavPanel({setShowNav}){
    return(
        <>
            <ul role="list">
                <li><Link smooth to='#about' title='About Me' onClick={()=> {setShowNav(false)}}><span>A</span>bout</Link></li>
                <li><Link smooth to='#projects' title='Personal Projects' onClick={()=> {setShowNav(false)}}><span>P</span>rojects</Link></li>
                <li><Link smooth to='#contacts' title='Contact Details' onClick={()=> {setShowNav(false)}}><span>C</span>ontacts</Link></li>
                <li><a href="public/CV.pdf" className="btn" download="Manga, Kim Oliver - CV">Download CV</a></li>
            </ul>
        </>
    )
}

NavPanel.propTypes = {
    setShowNav: PropTypes.func
}