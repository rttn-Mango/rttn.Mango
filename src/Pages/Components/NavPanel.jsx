import { Link } from "react-router-dom";

export default function NavPanel(){
    return(
        <>
            <ul role="list">
                <li><Link to='/about'><span>A</span>bout</Link></li>
                <li><Link to='/projects'><span>P</span>rojects</Link></li>
                <li><Link to='/contacts'><span>C</span>ontacts</Link></li>
                <li><a href="public/CV.pdf" className="btn" download="Manga, Kim Oliver - CV">Download CV</a></li>
            </ul>
        </>
    )
}