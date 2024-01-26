import TiltedArrow from '../svg/TiltedArrow';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import useHoverContentContext from '../hooks/useHoverContentContext';

export default function ProjectsCard({title, src, index}){
    const {hoverContent, setHoverContent} = useHoverContentContext();
    const navigate = useNavigate();

    return(
        <Link
            to={src}
            className={index === 0 ? "projects__contents | minify" : "projects__contents | shortly"}
            title={index === 0 ? 'Minify Website' : 'Shortly Website'}
            key={index}
            onMouseEnter={() => index === 0 ? setHoverContent({...hoverContent, isHovered: true, elementToRender: 'minify-link', height: 160, width: 160}) : setHoverContent({...hoverContent, isHovered: true, elementToRender: 'shortly-link', height: 160, width: 160})} 
            onMouseLeave={() => setHoverContent({...hoverContent, isHovered: false, elementToRender: null, scale: 4})}
        >
            <h3>{title}</h3>
            <p>{index === 0 ? 'Designer & Developer' : 'Developer'}</p>
            <p className='read-more' onClick={e => {index === 0 ? navigate('/works/minify') : navigate('/works/shortly'); e.preventDefault()}} onMouseEnter={() => setHoverContent({...hoverContent ,shouldBeDisabled: true})} onMouseLeave={() => setHoverContent({...hoverContent, shouldBeDisabled: false})}>read more <TiltedArrow/></p>
        </Link>
    )
}

ProjectsCard.propTypes = {
    title: PropTypes.string,
    src: PropTypes.string,
    index: PropTypes.number
}