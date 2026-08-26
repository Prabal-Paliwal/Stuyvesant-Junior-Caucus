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
            <ResourceCard theme="dark" image="/frame.png" title="month" link="https://google.com"></ResourceCard>
            <ResourceCard theme="dark" image="/frame.png" title="month" link="https://google.com"></ResourceCard>
            <ResourceCard theme="dark" image="/frame.png" title="month" link="https://google.com"></ResourceCard>
            <ResourceCard theme="dark" image="/frame.png" title="month" link="https://google.com"></ResourceCard>
            <ResourceCard theme="dark" image="/frame.png" title="month" link="https://google.com"></ResourceCard>
            <ResourceCard theme="dark" image="/frame.png" title="month" link="https://google.com"></ResourceCard>
            <ResourceCard theme="dark" image="/frame.png" title="month" link="https://google.com"></ResourceCard>
        </div>
        </div>
        <Squiggle></Squiggle>
        <div className="containers checker">
        <Heading word="Guides"></Heading>
        <div className="resource-card-container">
            <ResourceCard theme="light" image="/frame.png" title="SAT Guide" link="https://docs.google.com/document/d/1zVenB09OnC9vzlqypfGG6tfvekDUwuYJOTSIeZg-a-8/edit?tab=t.0#heading=h.w9zjfxd0rlqn"></ResourceCard>
            <ResourceCard theme="light" image="/frame.png" title="name" link="https://google.com"></ResourceCard>
            <ResourceCard theme="light" image="/frame.png" title="name" link="https://google.com"></ResourceCard>
            <ResourceCard theme="light" image="/frame.png" title="name" link="https://google.com"></ResourceCard>
        </div>
        </div>
        <Squiggle></Squiggle>
        <Footer></Footer>
    </>;
}

export default Resources