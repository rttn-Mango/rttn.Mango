import { Link } from "react-router-dom";
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
                        <Link tabIndex={-1} to="/"><Logo/></Link>
                    </li>
                    <li>
                        <img 
                            src="public/Arrowheads.svg" 
                            alt="Scroll down icon"
                            draggable="false"
                            onClick={()=>{setToTop(!toTop)}}
                            width={45}
                            height={40}
                        />
                    </li>
                </ul>
        </footer>
    )
}