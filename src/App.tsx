import Hero from "./hero.tsx"
import Footer from './footer.tsx'
import Squiggle from "./squiggle.tsx"
import Heading from "./heading.tsx"
import { Link } from 'react-router-dom';
import Nav from "./Nav.tsx";
import "./style.css"
function App() {
  let timelineContent = ['Oct 14-15','Open House Double Day Bake Sale', 'Oct 29','Dr. Ghatan Speaker Event', '~Nov','College Prep Workshop #1'];
  return <>
  <Nav></Nav>
  <Hero title="/hero_title.png" background_image="linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/school_background.png')"></Hero>
  <Squiggle></Squiggle>
  <div className="vision-container containers">
  <Heading word="Our Mission"></Heading>
  <div className="mission-card">
  <p>Our mission as the Junior Caucus is to make Junior Year less stressful and more navigable. In order to achieve this, our Presidents and Directors are planning events including workshops, collaborative partnerships, and college tours with external organizations. We also plan to host many fun community-building events throughout the year including many of our most successful events from last year, such as Movie Nights, Slime Making, and Tote Bag Decorating. If you want to show support, please feel free to attend events!</p>
  <p>Our ultimate goal is to plan the best Junior Prom! Our aim is to ensure that tickets remain affordable so that every student can attend Junior Prom. To do this, we will have many fundraising initiatives planned throughout the year, and we would appreciate any support! Check out the platform to see our planned initiatives! We will continue to work hard throughout the year to support Juniors and ensure an exciting, affordable Junior Prom. Thank you, and here's to an amazing Junior Year!</p>
  <p className="mission-sign">— Your Junior Caucus<br></br>Elly x Olivia</p>
  </div>
  </div>
  <Squiggle></Squiggle>
  <div className="checker containers">
  <Heading word="Upcoming"></Heading>
  <div className="upcoming-grid ">
    <div></div>
    <div><img src="/time-line.png" className="time-line"></img></div>
    <div></div>
    <div></div>
    <div></div>
    <div className="upcoming-card"><span className="upcoming-date">{timelineContent[0]}</span><span className="upcoming-title">{timelineContent[1]}</span></div>
    <div className="upcoming-card"><span className="upcoming-date">{timelineContent[2]}</span><span className="upcoming-title">{timelineContent[3]}</span></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div className="upcoming-card"><span className="upcoming-date">{timelineContent[4]}</span><span className="upcoming-title">{timelineContent[5]}</span></div>
  </div>
  </div>
  <Squiggle></Squiggle>
  <div className="achievement-container containers">
  <Heading word="Achievements"></Heading>
  <div className="achievement-card-container">
    <div className="achievement-card"><img src="/moneybag.png" alt=""></img><span>$0 raised</span></div>
    <div className="achievement-card"><img src="/trophy.png" alt=""></img><span>30+ events</span></div>
    <div className="achievement-card achievement-card-photo"><img src="/shakeshack.jpeg" alt="Shake Shack partnership" width="1200" height="1600"></img><span>6 organizational partnerships</span></div>
  </div>
  </div>
  <Squiggle></Squiggle>
  <div className="explore-container checker containers">
  <table className="link-container">
  <tbody>
    <tr>
      <td colSpan={4} style={{textAlign: 'end', color: "#4B637D"}}><Link to="/cabinet">Cabinet</Link></td>
      <td colSpan={5} style={{color: '#6380A1'}}><Link to="/resources">Resources</Link></td>
    </tr>
    <tr>
      <td className="explore-title" colSpan={9} style={{color: '#212C37', textAlign: 'center', fontSize: 'clamp(2.5rem, 8vw, 3.8rem)'}}>Explore More</td>
    </tr>
    <tr>
      <td colSpan={3} style={{textAlign: 'end', color:'#425870'}}>Sponsors</td>
      <td colSpan={3} style={{textAlign: 'center', color: '#5a6978'}}><Link to="/events">Events</Link></td>
      <td colSpan={3} style={{textAlign: 'start', color: '#36485B'}}><Link to="/jprom">JProm</Link></td>
    </tr>
    <tr>
      <td colSpan={9} style={{textAlign: 'center', color:"#6c6e94"}}><Link to="/contacts">Contact Us</Link></td>
    </tr>
  </tbody>
  </table>
  </div>
  <Squiggle></Squiggle>
  <Footer></Footer>
  </>
  ;
}

export default App