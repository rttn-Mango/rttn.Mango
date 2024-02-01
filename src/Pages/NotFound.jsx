import error from '../assets/404.svg'

export default function NotFound() {
    return(
        <main className="not-found" >
            <div className="not-found__texts">
                <h1>Monsters have taken over this page!</h1>
                <p>The page that you&apos;re looking for was taken by the sea monsters.</p>
            </div>
            <img src={error} alt="404 Page Not Found" draggable="false" height={700} width={700}/>
        </main>
    )
}