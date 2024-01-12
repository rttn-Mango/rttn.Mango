import Hero from "./Sections/Hero"
import Intro from "./Sections/Intro"
import Skills from "./Sections/Skills"
import Projects from "./Sections/Projects"
import Contact from "../Components/Contact"

import { useEffect } from "react"

export default function Homepage(){

    //To change document title once the Component mounts
    useEffect( () => {document.title = "Home"}, [])

    return(
        <main id="trigger">
            <Hero/>
            <div className="bg-wrapper">
                <Intro/>
                <Skills/>
            </div>
            <Projects/>
            <Contact/>
        </main>
    )
}