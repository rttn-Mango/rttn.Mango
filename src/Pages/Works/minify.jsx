import { Link } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLoadingContext } from "../../hooks/useLoadingContext";
import useHoverContentContext from "../../hooks/useHoverContentContext";
import PageTransitionWrapper from "../PageTransitionWrapper";

//Images
import wireframe from '../../assets/minify-wireframe.png'
import logo from '../../assets/minify-logo.webp'

//Components
import ColorsCard from "../../Components/ColorsCard";
import Contact from "../../Components/Contact";

//Icon
import TiltedArrow from '../../svg/TiltedArrow'
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Minify(){
    const {hoverContent, setHoverContent} = useHoverContentContext();
    const {loading} = useLoadingContext();
    const COLORS_CARD_DATA = [
        {
            name: 'Seashell | Text',
            hex: '#F9F4ED',
            rgb: 'rgb(249, 244, 237)',
            hsl: 'hsl(35, 50, 95)'
        },
        {
            name: 'Vampire Black | BG',
            hex: '#0A0E0F',
            rgb: 'rgb(10, 14, 15)',
            hsl: 'hsl(192, 20, 5)'
        },
        {
            name: 'Gold(Crayola) | Primary',
            hex: '#F0C991',
            rgb: 'rgb(240, 201, 145)',
            hsl: 'hsl(35, 76, 75)'
        },
        {
            name: 'Blue Eyes | Secondary',
            hex: '#A4CBEE',
            rgb: 'rgb(164, 203, 238)',
            hsl: 'hsl(208, 69, 79)'
        },
        {
            name: 'Pewter Blue | Accent',
            hex: '#8AAFBC',
            rgb: 'rgb(138, 175, 188)',
            hsl: 'hsl(196, 27, 64)'
        }
    ]

    useEffect(() => {
        document.title = 'Read more about minify';
        const checkOutBtn = document.querySelector('.check-btn');

        gsap.registerPlugin(ScrollTrigger);

        //This allows the animation to still run even when user is tabbed somewhere else
        gsap.ticker.lagSmoothing(0);
        
        //Hover animation for the get in touch button on contact section
        checkOutBtn.addEventListener('mousemove', e => {
            let rect = e.target.getBoundingClientRect();

            checkOutBtn.style.setProperty('--_xPos', `${e.clientX - rect.left}px`)
            checkOutBtn.style.setProperty('--_yPos', `${e.clientY - rect.top}px`)
            checkOutBtn.style.setProperty('--_visibility', `visible`)
        })

        gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
            if(!loading){
                gsap.fromTo('.minify h1 span', {y: 500, opacity: 0}, {
                    y: 0,
                    opacity: 1,
                    stagger: .1,
                    duration: .5,
                    delay: 2,
                })

                gsap.fromTo('.minify .back', {opacity: 0}, {
                    opacity: 1,
                    stagger: .1,
                    duration: .5,
                    delay: 2,
                })

                gsap.fromTo('.minify__links a', {y: 500, opacity: 0}, {
                    y: 0,
                    opacity: 1,
                    duration: .7,
                    delay: 2,
                })

                gsap.fromTo('.minify__tldr h2, .minify__tldr p', {opacity: 0}, {
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: '.minify__tldr h2',
                        start: '30% bottom',
                        end: 'bottom bottom',
                    }
                })

                gsap.fromTo('.minify__overview h2', {opacity: 0}, {
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: '.minify__overview h2',
                        start: '20% bottom',
                        end: 'bottom bottom',
                    }
                })

                gsap.fromTo('.features__compress, .features__convert', {opacity: 0, y: -500}, {
                    opacity: 1,
                    y: 0,
                    duration: .6,
                    scrollTrigger: {
                        trigger: '.minify__overview--features',
                        start: 'top bottom',
                        end: '40% bottom',
                    }
                })

                gsap.fromTo('.minify__style-guide h2', {opacity: 0}, {
                    opacity: 1,
                    duration: .6,
                    scrollTrigger: {
                        trigger: '.minify__style-guide h2',
                        start: '20% bottom',
                        end: 'bottom bottom',
                    }
                })

                gsap.fromTo('.minify__style-guide--typeface', {opacity: 0, x: -500}, {
                    opacity: 1,
                    x: 0,
                    duration: .6,
                    scrollTrigger: {
                        trigger: '.minify__style-guide--typeface',
                        start: 'top bottom',
                        end: '30% bottom',
                    }
                })

                gsap.fromTo('.minify__style-guide--colors', {opacity: 0, x: 1300}, {
                    opacity: 1,
                    x: 0,
                    duration: .6,
                    scrollTrigger: {
                        trigger: '.minify__style-guide--colors',
                        start: 'top bottom',
                        end: '30% bottom',
                    }
                })

                gsap.fromTo('.minify__technical h2', {opacity: 0}, {
                    opacity: 1,
                    duration: .6,
                    scrollTrigger: {
                        trigger: '.minify__technical h2',
                        start: 'top bottom',
                        end: 'bottom bottom',
                    }
                })

                gsap.fromTo('.minify__technical--development h3', {opacity: 0}, {
                    opacity: 1,
                    duration: .6,
                    scrollTrigger: {
                        trigger: '.minify__technical--development h3',
                        start: 'top bottom',
                        end: 'bottom bottom',
                    }
                })

                gsap.fromTo('.designing__mid--text', {opacity: 0, x: -700}, {
                    opacity: 1,
                    x: 0,
                    duration: .6,
                    scrollTrigger: {
                        trigger: '.designing__mid--text',
                        start: 'top bottom',
                        end: '20% bottom',
                    }
                })

                gsap.fromTo('.designing__mid img', {opacity: 0, x: 700}, {
                    opacity: 1,
                    x: 0,
                    duration: .6,
                    scrollTrigger: {
                        trigger: '.designing__mid img',
                        start: 'top bottom',
                        end: '20% bottom',
                    }
                })

                gsap.fromTo('.designing__last p', {opacity: 0, y: -700}, {
                    opacity: 1,
                    y: 0,
                    duration: .6,
                    scrollTrigger: {
                        trigger: '.designing__last',
                        start: 'top bottom',
                        end: 'center bottom',
                    }
                })

                gsap.fromTo('.designing__last + p', {opacity: 0}, {
                    opacity: 1,
                    duration: .6,
                    scrollTrigger: {
                        trigger: '.designing__last + p',
                        start: 'center bottom',
                        end: 'bottom bottom',
                    }
                })

                gsap.fromTo('.development__mid--left', {opacity: 0, x: -700}, {
                    opacity: 1,
                    x: 0,
                    duration: .6,
                    scrollTrigger: {
                        trigger: '.development__mid--left',
                        start: 'top bottom',
                        end: '20% bottom',
                    }
                })

                gsap.fromTo('.development__mid--right', {opacity: 0, x: 700}, {
                    opacity: 1,
                    x: 0,
                    duration: .6,
                    scrollTrigger: {
                        trigger: '.development__mid--right',
                        start: 'top bottom',
                        end: '20% bottom',
                    }
                })

                gsap.fromTo('.development__mid + p', {opacity: 0}, {
                    opacity: 1,
                    duration: .6,
                    scrollTrigger: {
                        trigger: '.designing__last + p',
                        start: 'center bottom',
                        end: 'bottom bottom',
                    }
                })

                gsap.fromTo('.minify__difficulties h2', {opacity: 0}, {
                    opacity: 1,
                    duration: .6,
                    scrollTrigger: {
                        trigger: '.minify__difficulties h2',
                        start: '20% bottom',
                        end: 'bottom bottom',
                    }
                })

                gsap.fromTo('.minify__difficulties h2', {opacity: 0}, {
                    opacity: 1,
                    duration: .6,
                    scrollTrigger: {
                        trigger: '.minify__difficulties h2',
                        start: '20% bottom',
                        end: 'bottom bottom',
                    }
                })

                gsap.fromTo('.minify__difficulties--logo > *', {opacity: 0, y: -700}, {
                    opacity: 1,
                    y: 0,
                    duration: .6,
                    scrollTrigger: {
                        trigger: '.minify__difficulties--logo',
                        start: '20% bottom',
                        end: 'center bottom',
                    }
                })

                gsap.fromTo('.last__left, .last__right', {opacity: 0}, {
                    opacity: 1,
                    duration: .6,
                    scrollTrigger: {
                        trigger: '.last__left',
                        start: 'top bottom',
                        end: 'center bottom',
                    }
                })

                gsap.fromTo('.minify__overall h2', {opacity: 0}, {
                    opacity: 1,
                    duration: .6,
                    scrollTrigger: {
                        trigger: '.minify__overall h2',
                        start: 'top bottom',
                        end: 'center bottom',
                    }
                })

                gsap.fromTo('.minify__overall p', {opacity: 0}, {
                    opacity: 1,
                    duration: .6,
                    scrollTrigger: {
                        trigger: '.minify__overall p',
                        start: 'top bottom',
                        end: 'bottom bottom',
                    }
                })
            }
        })
    } ,[loading])

    return(
        <PageTransitionWrapper>
            <main className="minify">
                <Link to='/works' tabIndex={-1} className="back" onClick={() => setHoverContent({...hoverContent, shouldBeDisabled: false})} onMouseEnter={() => setHoverContent({...hoverContent ,shouldBeDisabled: true})} onMouseLeave={() => setHoverContent({...hoverContent, shouldBeDisabled: false})}> <IoMdArrowRoundBack/> </Link>
                <h1 aria-label="minify">{'OptiMG'.split('').map((char, index) => <span key={index}>{char}</span>)}</h1>
                <section className="minify__links">
                    <Link to='https://optimg.vercel.app/' className="check-btn" title="Visit OptiMG" onMouseEnter={() => setHoverContent({...hoverContent ,shouldBeDisabled: true})} onMouseLeave={() => setHoverContent({...hoverContent, shouldBeDisabled: false})}>Check out OptiMG</Link>
                    <Link to='https://github.com/rttn-Mango/minify' title="Go to github repository" aria-label="Visit Github Repository"
                        onMouseEnter={() => setHoverContent({...hoverContent ,isHovered: true, height: 100, width: 100})} 
                        onMouseLeave={() => setHoverContent({...hoverContent, isHovered: false, height: 25, width: 25})}
                    >
                        Visit Github Repo <TiltedArrow/></Link>
                </section>

                <section className="minify__overview">
                    <h2>Overview</h2>
                    <p>As I&apos;ve mentioned above, this project is mainly for personal use which is why I neither shared nor advertised it directly because the number of compression and conversion that can be done per month is extremely limited. Aside from that, I was also in time constraints which is why I didn&apos;t want to complicate this by adding more features that are not needed.</p>
                    <section className="minify__overview--features">

                        <div className="features__compress">
                            <h3>Compress</h3>
                            <p>Size compression is one of the easiest way you can do to optimize your site which is why this was the main focus of the project as I do this quite often after finishing a project.</p>
                            <p>I also limited the max file size per image to 5mb as anything higher will also be more slower to compress.</p>
                        </div>

                        <div className="features__convert">
                            <h3>Convert</h3>
                            <p>The reason why I added format conversion to this project is because oftentimes, I find myself wanting to convert assets in other formats for the sake of minor optimization.</p>
                            <p>Which is why I included this feature so that I don&apos;t have to look for other sites which offers the same service unless necessary.</p>
                        </div>

                    </section>
                </section>

                <section className="minify__style-guide">
                    <h2>Style Guide</h2>

                    <div className="flex-wrapper">
                        <section className="minify__style-guide--typeface">
                            <p>Typeface</p>
                            <p>Aa</p>
                            <p>Supreme</p>
                        </section>

                        <section className="minify__style-guide--colors">     
                            <div className="colors__container">
                                {
                                    COLORS_CARD_DATA.map((data, index) => {
                                        return <ColorsCard key={index} name={data.name} hex={data.hex} rgb={data.rgb} hsl={data.hsl}/>
                                    })
                                }
                            </div> 
                        </section>
                    </div>
                    <p>This are some parts of the style guide of this project. <Link to="https://www.fontshare.com/fonts/supreme">Supreme</Link> was the typeface that I went with as it&apos;s quite versatile. You can find the Typeface at Fontshare which you can also download for free.</p>
                    <p>As for the colors, I decided to go with dark theme which is easier in the eyes compared to lighter theme websites. The primary was chosen based on which suited with the background well. The secondary was selected based on which compliments the primary color better and this one was the one I went with. The colors were all generated with the help of <Link to="https://realtimecolors.com">Realtimecolors</Link> so check it out.</p> 
                </section>

                <section className="minify__technical">
                    <h2>Technical Details</h2>

                    <section className="minify__technical--designing">
                        <h3>Designing</h3>
                        <p>Designing was the phase that took time the most. I wanted this project to be different, something that I can confidently say that I made everything which is why I started from the scratch when making the final design. I even went through several Iterations before coming up a final design.</p>
                        <p>Everything was made using Figma because I don&apos;t neither have Photoshop nor illustrator. Before I went with the actual designing, I started gathering the Context of what I want the site to be, like the user flow, the pages, the end game, and the likes. I wanted to experience UI/UX design so I added a Persona, User Journey, as well as User Flow which helped to some extent in defining the details of the site.</p>
                        <section className="designing__mid">
                            <div className="designing__mid--text">
                                <p>Wireframing was relatively easy because I didn&apos;t want it to be overly detailed, I only wanted to gain a general idea on where should I place the components and what would it look like.</p>
                                <p>Initially, I wanted to add a primary heading right beside the drag and drop box but I discarded the Idea on the second version in favor of a cleaner and less convoluted design.</p>
                                <p>I also changed the layout in respect of the user flow that I originally came up with which is why the old about page was replaced by the homepage in the second version.</p>
                            </div>
                            <img src={wireframe} alt="Wireframes of minify" draggable="false" height={700} width={500}/>
                        </section>

                        <section className="designing__last">
                            <p>For the typeface, I went with Supreme as for one, It&apos;s one of the available typefaces that I had that time, and two, not only is it versatile, it&apos;s also nicely spaced and looks great which is why I went with it.</p>
                            <p>As for the color palette, I wanted this project to be dark themed because personally, I think dark theme is less straining in the eyes. I also wanted to start focusing on darker themes which is why I made my first big project with this palette</p>
                        </section>
                        <p>I aimed for simplicity and minimalism in designing the site, prioritizing ease of use. Placing the drag-and-drop box at the hero section and a &apos;How to&apos; guide below. Additionally, a call-to-action section at the bottom redirects the visitors to the API owners&apos; page for further exploration. The homepage features a simple hero section with primary and secondary buttons. The rest are for offering a clear overview without overwhelming the user with unnecessary details.</p>
                    </section>

                    <section className="minify__technical--development">
                        <h3>Development</h3>
                        <p>React and SASS are utilized on the front end while express was for the backend. The process was simple, first is to make sure that both compression and conversion works, then add the barebones, and lastly is to finish the design. This makes it sure that the designing flows smoothly without any interruptions because of the response from fetching.</p>
                        
                        <section className="development__mid">
                            <div className="development__mid--left">
                                <p>Tinify or tinypng as you might know, is probably one of the most used site for image compression which is why it&apos;s the first thing that came into my mind when looking for a suitable API.</p>
                                <p>Initially, it was difficult making it work but I eventually managed to do it after some trial and error.</p>
                            </div>
                            <div className="development__mid--right">
                                <p>Looking for a suitable API for format conversion was quite hard because most have either a paywall or a relatively short documentation which was a great problem.</p>
                                <p>Eventually, I stumbled upon the Cloudmersive API, though their website is insanely slow, it was worth it.</p>
                            </div>
                        </section>

                        <p>I went with these specific technologies because they are the ones that I wanted to focus on, like React as well as SASS. Express was just used to put the fetching on the backend in order to not expose the API Keys so I didn&apos;t focus on it that much. For hosting, I used Render on the backend and Vercel for the site.</p>
                    </section>
                </section>

                <section className="minify__difficulties">
                    <h2>Difficulties</h2>
                    <section className="minify__difficulties--logo">
                        <img src={logo} alt="Logo of minify" draggable="false" height={200} width={350}/>
                        <div className="logo__desc">
                            <p>The first major hurdle was the <span>Logo</span>, and it was also the most memorable one for me. I originally made a simple on which is just ‘P’ which stands for Pixify which was the original name of the project. But midway, I realized that if I wanted this to be different, I might as well change the logo to something better.</p>
                            <p>It took me around a week to complete the new logo. I had to make a good amount of research, and a countless sketches in my notebook before I came up with the current one. The lack of proper applications only made it harder as I only have Figma to use but everything ended up being worth it.</p>
                        </div>
                    </section>

                    <section className="minify__difficulties--last">
                        <div className="last__left">
                            <p>Another one as making the Tinify API work. The problem was the docs, it was too short and too abstract for me to understand properly. </p>
                            <p>Eventually, after tons of searching, I ended up using the npm package for it which made the process easier.</p>
                        </div>

                        <div className="last__right">
                            <p>Last one was the Cloudmersive API, it wasn&apos;t the docs itself but the response that made it hard. The response was in a form of String of bytes which was foreign to me that time.</p>
                            <p>After multiple attempts of converting it to base64, none of it worked so I just changed the fetch to convert the response into Buffer—as I was using Axios for it—before converting it to base 64.</p>
                        </div>
                    </section>
                </section>

                <section className="minify__overall">
                    <h2>Overall</h2>
                    <p>This might&apos;ve been a difficult project to finish, it was also a great ride and I learned a lot from the start &apos;till I finished it. I wanted this to be different and I think I might&apos;ve achieved that at least to a good extent and I&apos;m happy with the outcome.</p>
                    <p>As for my plans, while I don&apos;t see myself sustaining this project for long, I&apos;ll still try to come back for some changes. There are already a few improvements that I can think of but that will be for later when I have some time to spare. Other than that, it was nice doing this project and I&apos;m looking forward to what I might do in the future. Thanks for dropping by ٩(◕‿◕｡)۶.</p>
                </section>

                <Contact/>
            </main>
        </PageTransitionWrapper>
    )
}