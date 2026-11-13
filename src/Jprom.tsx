import Hero from "./hero.tsx"
import Footer from './footer.tsx'
import Squiggle from "./squiggle.tsx"
import Heading from "./heading.tsx"
import Nav from "./Nav.tsx"
import { JPROM_INFO_DOC_URL, JPROM_RESULTS_DATE } from "./jpromConfig"
import "./style.css"

function Jprom(){
    return <>
        <Nav></Nav>
        <Hero title="/title_jprom.png" background_image="linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/school_background.png')"></Hero>
        <Squiggle></Squiggle>
        <div className="containers checker">
            <Heading word="JProm Committee"></Heading>
            <div className="jprom-status">
                <span className="jprom-status-badge">Applications Closed</span>
                <p>Thank you to everyone who applied! First-round results will be released on <strong>{JPROM_RESULTS_DATE}</strong>.</p>
                <a className="jprom-status-link" target="_blank" href={JPROM_INFO_DOC_URL}>Committee Info Doc →</a>
            </div>
        </div>
        <Squiggle></Squiggle>
        <Footer></Footer>
    </>;
}

export default Jprom
