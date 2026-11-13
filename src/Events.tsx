import Hero from "./hero.tsx"
import Footer from './footer.tsx'
import Squiggle from "./squiggle.tsx"
import Heading from "./heading.tsx"
import Nav from "./Nav.tsx";
import "./style.css"

// Past events gallery. Add a real photo by dropping it in /public and
// setting `image` to its path (e.g. "/cornellxbing.jpg"). Leave `image`
// empty to show the "photos coming soon" placeholder.
const pastEvents = [
    { title: "Cornell x Bing", image: "" },
    { title: "Outsiders", image: "" },
    { title: "Dr. Ghatan", image: "/drghatan.jpg" },
];

function Events(){
    return <>
        <Nav></Nav>
        <Hero title="/hero-events.png" background_image="linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/school_background.png')"></Hero>
    <Squiggle></Squiggle>
    <div className="containers">
    <Heading word="Past Events"></Heading>
    <div className="gallery-container">
        {pastEvents.map((event) => (
            <div className="gallery-card" key={event.title}>
                {event.image
                    ? <img className="gallery-photo" src={event.image} alt={event.title}></img>
                    : <div className="gallery-placeholder">Photos coming soon</div>}
                <span className="gallery-caption">{event.title}</span>
            </div>
        ))}
    </div>
    </div>
    <Squiggle></Squiggle>
    <Footer></Footer>
    </>;
}

export default Events
