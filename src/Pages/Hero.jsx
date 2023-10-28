import Mouse from "./svg/Mouse"

export default function Hero(){
    return(
        <section className="hero">
            <h1>Developer</h1>
            <p className="subHeading">Front-end</p>
            <div className="hero__creator">
                <img 
                    src="public/me.jpg" 
                    alt="Portrait image of me." 
                    draggable="false"
                    width={330}
                    height={300}
                />
                <p>Kim<br/>Oliver<br/>Manga</p>
            </div>

            <div className="hero__bottom">
                <p>Hit me up for — <br/> offers or collabs</p>
                <Mouse/>
            </div>
        </section>
    )
}