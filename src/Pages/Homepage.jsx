import Hero from "./Sections/Hero"
import Intro from "./Sections/Intro"
import Projects from "./Sections/Projects"
import Contact from "./Sections/Contact"

import { useEffect } from "react"

export default function Homepage(){

    useEffect( () => {document.title = "Home"}, [])

    return(
        <main>
            <Hero/>
            <Intro/>
            <Projects/>
            <Contact/>
        </main>
    )
}