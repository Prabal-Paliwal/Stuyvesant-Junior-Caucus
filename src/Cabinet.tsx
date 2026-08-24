import Hero from "./hero.tsx"
import Footer from './footer.tsx'
import Squiggle from "./squiggle.tsx"
import Heading from "./heading.tsx"
import CabinetCard from "./CabinetCard.tsx";
import "./style.css"

function Cabinet(){
    return <>
    <Hero title="/hero-cabinet.png" background_image="linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/school_background.png')"></Hero>
    <Squiggle></Squiggle>
    <div className="containers">
    <Heading word="Presidents"></Heading>
    <div className="cabinet-card-container cabinet-card-container-smaller">
        <CabinetCard photo="/frame.png" name="Elly" bio="descripSON" theme="dark"></CabinetCard>
        <CabinetCard photo="/frame.png" name="Olivia" bio="descripSON" theme="dark"></CabinetCard>
    </div>
    </div>
    <Squiggle></Squiggle>
    <div className="containers checker">
    <Heading word="Chief of Staff"></Heading>
    <div className="cabinet-card-container cabinet-card-container-smaller">
        <CabinetCard photo="/frame.png" name="Alvin" bio="descripSON" theme="light"></CabinetCard>
        <CabinetCard photo="/frame.png" name="Yubin" bio="descripSON" theme="light"></CabinetCard>
    </div>
    </div>
    <Squiggle></Squiggle>
    <div className="containers">
    <Heading word="Events"></Heading>
    <div className="cabinet-card-container">
        <CabinetCard photo="/frame.png" name="Brianna" bio="descripSON" theme="dark"></CabinetCard>
        <CabinetCard photo="/frame.png" name="Isabel" bio="descripSON" theme="dark"></CabinetCard>
        <CabinetCard photo="/frame.png" name="Sarah" bio="descripSON" theme="dark"></CabinetCard>
    </div>
    </div>
    <Squiggle></Squiggle>
    <div className="containers checker">
    <Heading word="Internals"></Heading>
    <div className="cabinet-card-container">
        <CabinetCard photo="/frame.png" name="Jinyi" bio="descripSON" theme="light"></CabinetCard>
        <CabinetCard photo="/frame.png" name="Bruce" bio="descripSON" theme="light"></CabinetCard>
        <CabinetCard photo="/frame.png" name="Mahjabin" bio="descripSON" theme="light"></CabinetCard>
    </div>
    </div>
    <Squiggle></Squiggle>
    <div className="containers">
    <Heading word="Outreach"></Heading>
    <div className="cabinet-card-container cabinet-card-container-smaller">
        <CabinetCard photo="/frame.png" name="Emer" bio="descripSON" theme="dark"></CabinetCard>
        <CabinetCard photo="/frame.png" name="Fiona" bio="descripSON" theme="dark"></CabinetCard>
    </div>
    </div>
    <Squiggle></Squiggle>
    <div className="containers checker">
    <Heading word="Graphics"></Heading>
    <div className="cabinet-card-container cabinet-card-container-smaller">
        <CabinetCard photo="/frame.png" name="Chloe" bio="descripSON" theme="light"></CabinetCard>
        <CabinetCard photo="/frame.png" name="Ivy" bio="descripSON" theme="light"></CabinetCard>
    </div>
    </div>
    <Squiggle></Squiggle>
    <div className="containers">
    <Heading word="Media"></Heading>
    <div className="cabinet-card-container">
        <CabinetCard photo="/frame.png" name="Amber" bio="descripSON" theme="dark"></CabinetCard>
        <CabinetCard photo="/frame.png" name="Anders" bio="descripSON" theme="dark"></CabinetCard>
        <CabinetCard photo="/frame.png" name="Lina" bio="descripSON" theme="dark"></CabinetCard>
    </div>
    </div>
    <Squiggle></Squiggle>
    <div className="containers checker">
    <Heading word="Finance"></Heading>
    <div className="cabinet-card-container">
        <CabinetCard photo="/frame.png" name="Tiffany" bio="descripSON" theme="light"></CabinetCard>
        <CabinetCard photo="/frame.png" name="Anthony" bio="descripSON" theme="light"></CabinetCard>
        <CabinetCard photo="/frame.png" name="Trevor" bio="descripSON" theme="light"></CabinetCard>
    </div>
    </div>
    <Squiggle></Squiggle>
    <div className="containers">
    <Heading word="IT"></Heading>
    <div className="cabinet-card-container">
        <CabinetCard photo="/frame.png" name="Prabal" bio="descripSON" theme="dark"></CabinetCard>
    </div>
    </div>
    <Squiggle></Squiggle>
    <Footer></Footer>
    </>;
}

export default Cabinet