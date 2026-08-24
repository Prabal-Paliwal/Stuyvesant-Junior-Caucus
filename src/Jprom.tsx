import Hero from "./hero.tsx"
import Footer from './footer.tsx'
import Squiggle from "./squiggle.tsx"
import Heading from "./heading.tsx"
import "./style.css"

function Jprom(){
    return <>
        <Hero title="/title_jprom.png" background_image="linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/school_background.png')"></Hero>
        <Squiggle></Squiggle>
        <div className="containers checker"><br></br><br></br><br></br><br></br><br></br><br></br>
            <Heading word="Coming Soon..."></Heading>
            <br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
        <Squiggle></Squiggle>
        <Footer></Footer>
    </>;
}

export default Jprom