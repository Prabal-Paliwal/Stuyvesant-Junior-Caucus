import Hero from "./hero.tsx"
import Squiggle from "./squiggle.tsx"
import Nav from "./Nav.tsx"
import "./style.css"
import Heading from "./heading.tsx"
import Footer from "./footer.tsx"

function Contacts(){
    return <>
        <Nav></Nav>
        <Hero title="/title_contacts.png" background_image="linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/school_background.png')"></Hero>
        <Squiggle></Squiggle>
        <div className="containers">
        <Heading word="Contact Information"></Heading>
        <div className="contact-container">
            <div className="contact-card light">
                <h3>Email</h3>
                <div><img className="contact-logo" src="/email.png"></img><a style={{fontSize:'1rem'}} href="mailto:elly.wu.feng@stuysu.org">elly.wu.feng@stuysu.org</a></div>
                <div><img className="contact-logo" src="/email.png"></img><a style={{fontSize:'1rem'}} href="mailto:olivia.liu@stuysu.org">olivia.liu@stuysu.org</a></div>
                <div><img className="contact-logo" src="/email.png"></img><a style={{fontSize:'0.95rem'}} href="mailto:juniorcaucus2627@stuysu.org">juniorcaucus2627@stuysu.org</a></div>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr'}}>
                <div className="contact-card light">
                    <h3>Instagram</h3>
                    <div><img className="contact-logo" src="/insta.png"></img><a href='https://www.instagram.com/stuyjuniorcaucus/' target="_black">@stuyjuniorcaucus</a></div>
                </div>
                <div className="contact-card light">
                    <h3>Linktree</h3>
                    <div><img className="contact-logo" src="/linktree.png"></img><a href="https://linktr.ee/juniorcaucus2627?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAad7fJuZtVlHOvSobeWzInc1NUdzmz7T0ndstx9toMF_9-FUpfBB1dTFsCN_nw_aem_pWjyy-acopt8XzoK1oB9jA" target="_black">juniorcaucus2627</a></div>
                </div>
            </div>
        </div>
        </div>
        <Squiggle></Squiggle>
        <div className="containers checker">
        <Heading word='Suggestions'></Heading>
        <div className="suggestion-form-container">
            <iframe
                className="suggestion-form"
                src="https://docs.google.com/forms/d/e/1FAIpQLSfG92WJrWzKuB1j6r26CMoOdveaUs2tAPn2_ATZavC6UX7E5Q/viewform?embedded=true"
                title="Suggestion Form"
            >Loading…</iframe>
        </div>
        </div>
        <Squiggle></Squiggle>
        <Footer></Footer>
    </>;
}

export default Contacts