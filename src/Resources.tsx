import Hero from "./hero.tsx"
import Footer from './footer.tsx'
import Squiggle from "./squiggle.tsx"
import Heading from "./heading.tsx"
import ResourceCard from "./ResourceCard.tsx";
import Nav from "./Nav.tsx";
import "./style.css"

function Resources(){
    return <>
        <Nav></Nav>
        <Hero title="/title_resources.png" background_image="linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/school_background.png')"></Hero>
        <Squiggle></Squiggle>
        <div className="containers">
        <Heading word="The Jrnl"></Heading>
        <div className="resource-card-container">
            <ResourceCard theme="dark" image="/septJrnl.png" title="September" link="http://canva.com/design/DAHTFC8ZWNU/XvR-CWwYgqQ8txaLt74-EQ/edit?utm_content=DAHTFC8ZWNU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"></ResourceCard>
        </div>
        </div>
        <Squiggle></Squiggle>
        <div className="containers checker">
        <Heading word="Guides"></Heading>
        <div className="resource-card-container">
            <ResourceCard theme="light" image="/SATguide.png" title="SAT Guide" link="https://docs.google.com/document/u/6/d/14LGR22-VaqzRaPoVk_SQ0vITS0kESep3dJPFgeVKMVM/edit"></ResourceCard>
            <ResourceCard theme="light" image="/PSATguide.png" title="PSAT Guide" link="https://docs.google.com/document/d/1QHRI5xTgOECExorG5juGvlEWQFNd3qZpTA-EwFTfyIk/edit?tab=t.0#heading=h.ts9ih8939d5z"></ResourceCard>
        </div>
        </div>
        <Squiggle></Squiggle>
        <Footer></Footer>
    </>;
}

export default Resources