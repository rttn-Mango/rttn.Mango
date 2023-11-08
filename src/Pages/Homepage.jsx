import Hero from "./Sections/Hero"
import Intro from "./Sections/Intro"
import Projects from "./Sections/Projects"
import Contact from "./Sections/Contact"

//Hooks

import { useShowNavProvider } from "../hooks/UseShowNav"

export default function Homepage(){
    const {showNav} = useShowNavProvider()

    return(
        <main>
            <Hero/>
            <Intro/>
            <Projects showNav={showNav}/>
            <Contact/>
        </main>
    )
}