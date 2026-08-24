import Hero from "./hero.tsx"
import Footer from './footer.tsx'
import Squiggle from "./squiggle.tsx"
import Heading from "./heading.tsx"
import EventsCard from "./EventsCard.tsx";
import "./style.css"

function Events(){
    return <>
        <Hero title="/hero-events.png" background_image="linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/school_background.png')"></Hero>
    <Squiggle></Squiggle>
    <div className="containers">
    <Heading word="Upcoming"></Heading>
    <div className="upcoming-container">
        <EventsCard date="Sept 10" title="You're not ready for this" where="school 🥀"></EventsCard>
        <EventsCard date="Sept 10" title="You're not ready for this" where="school 🥀"></EventsCard>
        <EventsCard date="Sept 10" title="You're not ready for this" where="school 🥀"></EventsCard>
        <EventsCard date="Sept 10" title="You're not ready for this" where="school 🥀"></EventsCard>
        <EventsCard date="Sept 10" title="You're not ready for this" where="school 🥀"></EventsCard>
    </div>
    </div>
    <Squiggle></Squiggle>
    <div className="containers checker">
    <Heading word="Past Events"></Heading>
    </div>
    <Squiggle></Squiggle>
    <Footer></Footer>
    </>;
}

export default Events