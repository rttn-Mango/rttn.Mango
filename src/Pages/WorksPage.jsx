import { Link } from "react-router-dom"
import { useEffect } from "react";
import PageTransitionWrapper from "./PageTransitionWrapper";

//Component
import Contact from "../Components/Contact";

//Images
import minify from '../assets/Minify.png';
import minifyMobile from '../assets/MinifyMobile.png';
import minifyTablet from '../assets/MinifyTablet.png';
import shortly from '../assets/Shortly.png';
import shortlyMobile from '../assets/ShortlyMobile.png'
import shortlyTablet from '../assets/ShortlyTablet.png'

//Icon
import TiltedArrow from "../svg/TiltedArrow";

export default function WorksPage(){
    //To change document title once the Component mounts
    useEffect( () => {document.title = "Works"}, [])

    return(
        <PageTransitionWrapper>
            <main className="works-page">
                <h1>My Recent <span>Works</span></h1>

                <div className="flex-wrapper">
                    <section className="works-page__card">
                        <picture>
                            <source srcSet={minifyMobile} media="(max-width: 700px)"/>
                            <source srcSet={minifyTablet} media="(width > 700px) and (width < 1080px)"/>
                            <img src={minify} alt="Minify Hero Section" draggable='false' width={1430} height={750}/>
                        </picture>

                        <section className="works-page__card--desc">
                            <div className="desc__row">
                                <h2>minify</h2>
                                <Link to='/works/minify' title="read more about minify">read more <TiltedArrow/> </Link>
                            </div>
                            <div className="desc__row">
                                <p>Designer & Developer</p>

                                <div className="desc__row--stack">
                                    <p>React</p>
                                    <p>SASS</p>
                                    <p>Figma</p>
                                </div>
                            </div>
                        </section>
                    </section>

                    <section className="works-page__card">
                        <picture>
                            <source srcSet={shortlyMobile} media="(max-width: 700px)"/>
                            <source srcSet={shortlyTablet} media="(width > 700px) and (width < 1080px)"/>
                            <img src={shortly} alt="Minify Hero Section" draggable='false' width={1430} height={750}/>
                        </picture>

                        <section className="works-page__card--desc">
                            <div className="desc__row">
                                <h2>Shortly</h2>
                                <Link to='/works/shortly' title="read more about Shortly">read more <TiltedArrow/> </Link>
                            </div>
                            <div className="desc__row">
                                <p>Developer</p>

                                <div className="desc__row--stack">
                                    <p>React</p>
                                    <p>SASS</p>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>

                <Contact/>
            </main>
        </PageTransitionWrapper>
    )
}