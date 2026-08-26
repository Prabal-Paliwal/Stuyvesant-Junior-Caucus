import Hero from "./hero.tsx"
import Squiggle from "./squiggle.tsx"
import Nav from "./Nav.tsx"
import "./style.css"

function Contacts(){
    return <>
        <Nav></Nav>
        <Hero title="/title_contacts.png" background_image="linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/school_background.png')"></Hero>
        <Squiggle></Squiggle>
    </>;
}

export default Contacts