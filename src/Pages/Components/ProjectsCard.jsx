import PropTypes from 'prop-types';

export default function ProjectsCard({setModal, title, src, index}){
    return(
        <a
            tabIndex={-1}
            href={src}
            className="projects__contents"
            onMouseEnter={() => {setModal({active: true, index: index})}}
            onMouseLeave={() => {setModal({active: false, index: index})}}
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