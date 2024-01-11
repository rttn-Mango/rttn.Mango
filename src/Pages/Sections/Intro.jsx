import hrms from '../../assets/hrms.png'

export default function Intro(){
    return(
        <section className="intro">
            <p>Kumusta? I&apos;m <span>Kim</span>, a young blood from the Philippines.</p>
            <img src={hrms} alt="Holy Rosary Minor Seminary" draggable="false" height={530} width={530}/>
        </section>
    )
}