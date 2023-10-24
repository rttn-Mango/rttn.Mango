import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header className="header">
            <nav>
                <ul role="list">
                    <li>
                        <a href="public/CV.pdf" download='Manga, Kim Oliver - CV'>
                            <button type='button'>Download CV</button>
                        </a>
                    </li>
                    <li>
                        <Link to="/"><img src="public/Logo.svg" alt="rttn.Mango" width={180} height={50} draggable="false"/></Link>
                    </li>
                    <li>
                        <img src="public/Burger.svg" alt="Hamburger Menu" draggable="false" />
                    </li>
                </ul>
            </nav>
        </header>
    )
}