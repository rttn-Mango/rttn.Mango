import PropTypes from 'prop-types';

export default function Projects({showNav}){
    return(
        <section className="projects">
            <h2>Personal Projects</h2>
            <article className="projects__group">
                <img 
                    src="public/Shortly.png" 
                    alt="Shortly website homepage" 
                    draggable="false"
                    width={500}
                    height={220}
                />
                <div className="projects__group--info">
                    <h3>Shortly</h3>
                    <ul role="list">
                        <li>This website is a personal project which offers URL-Shortening Services.</li>
                        <li>This is inspired from the Shortly challenge in <a tabIndex={showNav ? -1 : 1} href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G">Frontendmentor</a> but with heavy modifications added.</li>
                        <li>The main function of the website is to shorten url for the users for their ease of convinience.</li>
                    </ul>
                    <button tabIndex={showNav ? -1 : 1} type="button">Read More</button>
                </div>
            </article>

            <article className="projects__group">
                <img 
                    src="public/Easybank.png" 
                    alt="Easybank website homepage" 
                    draggable="false"
                    width={500}
                    height={240}
                />
                <div className="projects__group--info">
                    <h3>Easybank</h3>
                    <ul role="list">
                        <li>This website is also a personal project which offers digital banking services.</li>
                        <li>This is also inspired from a Similar Challenge in <a tabIndex={showNav ? -1 : 1} href="https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN">Frontendmentor</a> but also with heavy modifications.</li>
                        <li>Main functions of the website includes Online Banking, Budgeting, and such.</li>
                    </ul>
                    <button tabIndex={showNav ? -1 : 1} type="button">Read More</button>
                </div>
                
            </article>
        </section>
    )
}

Projects.propTypes = {
    showNav: PropTypes.bool,
}