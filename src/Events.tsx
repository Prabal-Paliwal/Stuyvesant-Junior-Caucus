import Hero from "./hero.tsx"
import Footer from './footer.tsx'
import Squiggle from "./squiggle.tsx"
import Heading from "./heading.tsx"
import EventsCard from "./EventsCard.tsx";
import Nav from "./Nav.tsx";
import "./style.css"
import CarouselDemo from "./Carousel.tsx";

function Events(){
    return <>
        <Nav></Nav>
        <Hero title="/hero-events.png" background_image="linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/school_background.png')"></Hero>
    <Squiggle></Squiggle>
    <div className="containers">
    <Heading word="Upcoming"></Heading>
    <div className="upcoming-container">
        <EventsCard date="Sept 19" title="Cornell University x Binghamton University" where=""></EventsCard>
        <EventsCard date="Sept 26" title="Cornell Alumni Workshop" where=""></EventsCard>
        <EventsCard date="Sept 14-15" title="October Double Day Bake Sale" where=""></EventsCard>
        <EventsCard date="~NOV" title="Dr. Ghatan Speaker Event " where=""></EventsCard>
        <EventsCard date="~NOV" title="College Readiness Workshop #1" where=""></EventsCard>
        <EventsCard date="~NOV" title="Summer Program Workshop #1" where=""></EventsCard>
    </div>
    </div>
    <Squiggle></Squiggle>
    {/* <div className="containers checker past-event-container">
    <Heading word="Past Events"></Heading>
    <br></br><br></br><CarouselDemo></CarouselDemo>
    </div>
    <Squiggle></Squiggle> */}
    <Footer></Footer>
    </>;
}

export default Events