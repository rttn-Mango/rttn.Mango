import { Link } from "react-router-dom";
import Logo from "../svg/Logo";
import Burger from "../svg/Burger";

export default function Header(){
    return(
        <header className="header">
            <nav>
                <ul role="list">
                    <li>
                        <Link to="/"> <Logo/> </Link>
                    </li>
                    <div className="group">
                        <li><img src="public/Moon.svg" alt="Dark Mode Logo" draggable="false" /></li>
                        <li><Burger/></li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}