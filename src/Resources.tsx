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
            <ResourceCard theme="dark" image="/octJrnl.png" title="October" link="https://drive.google.com/file/d/1k_qWQmwPFEjE2GCyqnA34UKyl3o_o844/view"></ResourceCard>
            <ResourceCard theme="dark" image="/novJrnl.png" title="November" link="https://drive.google.com/file/d/1HQH_4oSY-JO37jBl9gDGa4ttG82Fgrg0/view"></ResourceCard>
        </div>
        </div>
        <Squiggle></Squiggle>
        <div className="containers checker">
        <Heading word="Guides"></Heading>
        <div className="resource-card-container">
            <ResourceCard theme="light" image="/SATguide.png" title="SAT Guide" link="https://docs.google.com/document/u/6/d/14LGR22-VaqzRaPoVk_SQ0vITS0kESep3dJPFgeVKMVM/edit"></ResourceCard>
            <ResourceCard theme="light" image="/PSATguide.png" title="PSAT Guide" link="https://docs.google.com/document/d/1QHRI5xTgOECExorG5juGvlEWQFNd3qZpTA-EwFTfyIk/edit?tab=t.0#heading=h.ts9ih8939d5z"></ResourceCard>
            <ResourceCard theme="light" image="/naviance.png" title="Naviance Guide" link="https://docs.google.com/document/d/18LJA-zGjdbjmK-X3Hbc2tLvKz3hqEm1V03JJOFmbADU/edit"></ResourceCard>
        </div>
        </div>
        <Squiggle></Squiggle>
        <Footer></Footer>
    </>;
}

export default Resources