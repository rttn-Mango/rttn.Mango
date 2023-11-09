import Hero from "./Sections/Hero"
import Intro from "./Sections/Intro"
import Projects from "./Sections/Projects"
import Contact from "./Sections/Contact"

//Hooks

export default function Homepage(){

    return(
        <main>
            <Hero/>
            <Intro/>
            <Projects/>
            <Contact/>
        </main>
    )
}