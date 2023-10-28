import { Link } from "react-router-dom";
import Logo from "../svg/Logo";

export default function Footer(){
    return(
        <footer className="footer">
            <ul role="list">
                    <li>
                        <Link to="/"><Logo/></Link>
                    </li>
                    <li>
                        <img 
                            src="public/Arrowheads.svg" 
                            alt="Scroll down icon"
                            draggable="false"
                            width={45}
                            height={40}
                        />
                    </li>
                </ul>
        </footer>
    )
}