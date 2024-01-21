import TiltedArrow from '../svg/TiltedArrow';
import PropTypes from 'prop-types';

export default function ProjectsCard({title, src, index}){
    return(
        <div
            href={src}
            className="projects__contents"
            title={index === 0 ? 'Minify Website' : 'Shortly Website'}
            key={index}
        >
            <h3>{title}</h3>
            <p>{index === 0 ? 'Designer & Developer' : 'Developer'}</p>
            <a href="">read more <TiltedArrow/></a>
        </div>
    )
}

ProjectsCard.propTypes = {
    title: PropTypes.string,
    src: PropTypes.string,
    index: PropTypes.number
}