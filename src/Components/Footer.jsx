import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
export default function Footer(){

    return(
        <footer className="footer">
            <nav>
                <ul role="list">
                    <li>
                        <Link to="/" title="Logo" className="logo" aria-label="Logo"> KOMA </Link>
                        <p>Vol — 2 © 2023</p>
                    </li>
                </ul>
                <ul role="list" className="footer__links">
                    <li><a href="">Linkedin</a></li>
                    <li><a href="">Github</a></li>
                    <li><a href="">Instagram</a></li>
                </ul>
                <ul role="list" className="footer__links">
                    <li><Link to = '/about'>About</Link></li>
                    <li><Link to = '/works'>Works</Link></li>
                    <li><Link to = '/contact'>Contact</Link></li>
                </ul>
                <ul role="list" className="footer__mark">
                    <li><CiLocationOn/> Philippines</li>
                    <li>rttn.Mango</li>
                </ul>
            </nav>
        </footer>
    )
}