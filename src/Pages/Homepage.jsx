import PropTypes from 'prop-types'

//Sections
import Hero from "./Sections/Hero"
import Intro from "./Sections/Intro"
import Skills from "./Sections/Skills"
import Projects from "./Sections/Projects"
import Contact from "../Components/Contact"
import PageTransitionWrapper from "./PageTransitionWrapper"

import { useEffect } from "react"

export default function Homepage({loading}){

    //To change document title once the Component mounts
    useEffect( () => { 
        if(!loading)document.title = "koma • Front-End Developer"
    }, [loading])

    return(
        <PageTransitionWrapper>
            <main>
                <Hero/>
                <div className="bg-wrapper">
                    <Intro/>
                    <Skills/>
                </div>
                <Projects/>
                <Contact/>
            </main>
        </PageTransitionWrapper>
        
    )
}

Homepage.propTypes = {
    loading: PropTypes.bool
}