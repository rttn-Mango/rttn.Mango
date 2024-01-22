import TiltedArrow from '../svg/TiltedArrow';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ProjectsCard({title, src, index}){
    return(
        <section
            href={src}
            className="projects__contents"
            title={index === 0 ? 'Minify Website' : 'Shortly Website'}
            key={index}
        >
            <h3>{title}</h3>
            <p>{index === 0 ? 'Designer & Developer' : 'Developer'}</p>
            <Link to={index === 0 ? '/works/minify' : '/works/shortly'}>read more <TiltedArrow/></Link>
        </section>
    )
}

ProjectsCard.propTypes = {
    title: PropTypes.string,
    src: PropTypes.string,
    index: PropTypes.number
}