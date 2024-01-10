import { useState, useEffect } from 'react'
import ScrollToIcon from '../../svg/ScrollTo'

export default function Hero(){
    const [shouldScroll, setShouldScroll] = useState(false);

    //Scrolls down when Scroll To Button is clicked
    useEffect(() => {
        if(shouldScroll){
            window.scrollTo(0, window.innerHeight)
        }
    }, [shouldScroll])

    return(
            <section className="hero">
                <h1 aria-label='Developer'>Devel<div className='img'>o</div>per</h1>
                <p className="subHeading">Front-end</p>

                <div className="hero__bottom">
                    <p aria-label="Hit me up for offers or collaborations">Hit me up for — <br/> offers or collabs</p>
                    <div className="hero__bottom--scrollTo" onClick={() => setShouldScroll(!shouldScroll)}>
                        <ScrollToIcon/>
                    </div>
                </div>
            </section>
    )
}