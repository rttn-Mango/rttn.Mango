import PropTypes from 'prop-types';

export default function ProjectsCard({setModal, title, src, index}){
    return(
        <a
            tabIndex={-1}
            href={src}
            className="projects__contents"
            //Window.innerwidth condition is to disable hover animation on smaller screen sizes
            onMouseEnter={() => {setModal(window.innerWidth > 799 ? {active: true, index: index} : {active: false, index: index})}}
            onMouseLeave={() => {setModal({active: false, index: index})}}
            title={index === 0 ? 'Shortly Website' : 'Easybank Website'}
        >
            <h3>{title}</h3>
            <p>Design & Development</p>
        </a>
    )
}

ProjectsCard.propTypes = {
    setModal: PropTypes.func,
    title: PropTypes.string,
    src: PropTypes.string,
    index: PropTypes.number
}