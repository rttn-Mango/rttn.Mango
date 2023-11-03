import { HashLink as Link } from "react-router-hash-link";
import Logo from "../svg/Logo";
import { useState, useEffect } from "react";

export default function Footer(){

    const [toTop, setToTop] = useState(false)

    useEffect(() =>{
        if(toTop){
            window.scrollTo(0, 0);
            setToTop(!toTop);
        }
    },[toTop])

    return(
        <footer className="footer">
            <ul role="list">
                    <li>
                        <Link tabIndex={-1} title="Website Logo" smooth to="#"><Logo/></Link>
                    </li>
                    <li>
                        <Link smooth to='#' tabIndex={-1} title="Back to Top">
                            <img 
                                src="public/Arrowheads.svg" 
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