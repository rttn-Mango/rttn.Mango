import TiltedArrow from '../svg/TiltedArrow';
import PropTypes from 'prop-types';

export default function ProjectsCard({setModal, title, src, index}){
    return(
        <div
            href={src}
            className="projects__contents"
            //Window.innerwidth condition is to disable hover animation on smaller screen sizes
            onMouseEnter={() => {setModal(window.innerWidth > 799 ? {active: true, index: index} : {active: false, index: index})}}
            onMouseLeave={() => {setModal({active: false, index: index})}}
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
    setModal: PropTypes.func,
    title: PropTypes.string,
    src: PropTypes.string,
    index: PropTypes.number
}