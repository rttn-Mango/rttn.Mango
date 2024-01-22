import { Link } from "react-router-dom";
import { useEffect } from "react";

//Icon
import TiltedArrow from '../../svg/TiltedArrow'

export default function Shortly() {
    useEffect(() => {document.title = 'Read more about Shortly'} ,[])

    return(
        <main className="shortly">
            <h1>Shortly</h1>
            <section className="minify__links">
                <Link to=''>Check out shortly</Link>
                <Link to="">Visit Github Repo <TiltedArrow/></Link>
            </section>

            <section className="shortly__tldr">
                <h2>tl;dr</h2>
                <p>Shortly is a simple URL - Shortening website which was based from <Link to="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G">this challenge</Link> on frontendmentor. The original challenge was just a simple landing page which is why I made some changes and additions to the layout in order to make it a little more challenging. I also replaced the original API with a different one from bit.ly as the first one stopped working so I had to find a replacement.</p>
                <p>Before minify, this was my biggest project, which I know, isn&apos;t really that much. One of the differences tho is that I didn&apos;t use Figma for this project when I was doing the layout for the other pages as I didn&apos;t know about it at that time.</p>
            </section>

            <section className="shortly__overview">
                <h2>Overview</h2>
                <p>Before minify, this was my most significant project. I know, isn&apos;t really that much but it served as a good reminder for me that I was doing a great job in terms of improving. One thing, tho, is that I did not use Figma to make the designs for the other pages which is why I unfortunately  won&apos;t be adding any snippets here.</p>
                
                <section className="shortly__overview--feature">
                    <h3>URL - Shortening</h3>
                    <p>The functionality itself is pretty self explanatory. Tho, for this one, you can only shorten a link one at a time. The previous response will also change if you were to shorten another link.</p>
                </section>
            </section>

            <section className="shortly__technical">
                <h2>Technial Details</h2>

                <section className="shortly__technical--designing">
                    <h3>Designing</h3>
                    <p>As I&apos;ve mentioned. this project was adopted from the URL - Shortener challenge from frontendmentor. The problem, though, was that the original challenge only has landing page and since I wanted to add this to my portfolio, I decided to make some additions and changes that I think suited the project well.</p>
                    <p>One of the minor changes are layout-related ones where I decided to change certain colors to improve the contrast or removed some unecessary design on the Cards on the Statistics section.  The main changes are the pages that I added such as About us, Features, Pricing, as well as the dialogs for the Login and the Sign up Button.</p>
                    <p>The layouts are quite simple. I only added the contents that are related to the page itself as well as a get in touch section on the About us section.  Other than that, I also added illustrations from undraw to make the layout better. </p>
                </section>

                <section className="shorly__technical--development">
                    <h3>Development</h3>
                    <p>Just like minify, I also used React as well as SASS for the front-end. For this project, I originally tried to add a backend using express but I eventually removed it because I didn&apos;t know about hosting the backend on render at that time.</p>
                    <div className="development__mid">
                        <p>Looking at the layout of the project, I already knew that the <code>Form</code> where the user can put the links that they can shorten will have <code>position: relative</code> to it and the response will be positioned relative to the parent which is why I didn&apos;t worry much about the layout.</p>
                        <p>I started with making sure that the API works first as this was my first time, aside from my weather forecast project, where I had to utilize an API.</p>
                    </div>
                    <p>Bit.ly API was the one that I used for this project. I tried other ones but I eventually went with this as the documentation on their site is pretty good.</p>
                </section>
            </section>

            <section className="shortly__difficulties">
                <h2>Difficulties</h2>
                <p>The first major hurdle was the illustration on the hero section of the landing page. I originally thought that the one I was doing was too different from the original design but I realized that I was limiting the width of the entire container to add spacing on both right and left so it was bound to look like that.</p>
                <p>Other than that, finding a good replacement for the original API was also quite a headache. What happened was the site of the original API that I was using went down for some reason and didn&apos;t came back so I had to find a good replacement for it. There were some candidates but most of them were lackluster which is why I eventually settled with bit.ly.</p>
                <p>The Login and Sign up dialogs were also quite the problem mainly because I wasn&apos;t that familiar with using dialogs but I eventually managed to do it once I got the hang of it.</p>
            </section>

            <section className="shortly__overall">
                <h2>Overall</h2>
                <p>Honestly, this project was relatively easy. Aside from some minor layout conflicts and the api changes, it was pretty much smooth sailing.</p>
                <p>As for my plans, I don&apos;t really see myself coming back into this project mainly because I think this is too generic for me to even put my time on it. I might do some updates when I feel like it but other than that this is pretty much it for this project. Thanks for dropping by ٩(◕‿◕｡)۶.</p>
            </section>
        </main>
    )
}