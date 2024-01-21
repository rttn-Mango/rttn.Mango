import { IoArrowDownOutline } from "react-icons/io5";

export default function Hero(){

    return(
            <section className="hero">
                <div className="wrapper">
                    <h1 aria-label='Developer'>Devel<div className='img'>o</div>per</h1>
                    <p className="subHeading">Front-end</p>

                    <div className="hero__bottom">
                        <p aria-label="Hit me up for offers or collaborations">Hit me up for — <br/> offers or collabs</p>
                        <div className="hero__bottom--scrollTo" >
                            <IoArrowDownOutline/>
                        </div>
                    </div>
                </div>
            </section>
    )
}