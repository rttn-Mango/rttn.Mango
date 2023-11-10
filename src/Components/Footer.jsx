import { HashLink as Link } from "react-router-hash-link";
import Logo from "../svg/Logo";
import Arrowheads from '../assets/Arrowheads.svg'

export default function Footer(){

    return(
        <footer className="footer">
            <ul role="list">
                    <li>
                        <Link tabIndex={-1} title="Website Logo" smooth to="#"><Logo/></Link>
                    </li>
                    <li>
                        <Link smooth to='#' tabIndex={-1} title="Back to Top">
                            <img 
                                src={Arrowheads} 
                                alt="Scroll to top icon"
                                draggable="false"
                                id="arrowhead"
                                width={45}
                                height={40}
                            />
                        </Link>
                    </li>
                </ul>
        </footer>
    )
}