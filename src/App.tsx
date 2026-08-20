import Hero from "./hero.tsx"
import Footer from './footer.tsx'
import Squiggle from "./squiggle.tsx"
import Heading from "./heading.tsx"
import "./style.css"
export function App() {
  let timelineContent = ['Closest Event', 'Closer Event', 'Close Event'];
  return <>
  <Hero title="/hero_title.png" background_image="linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/school_background.png')"></Hero>
  <Squiggle></Squiggle>
  <div className="vision-container containers">
  <Heading word="Our Vision"></Heading>
  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis ac lectus ac facilisis. Proin euismod molestie urna, ut dapibus orci. Aenean bibendum tortor eu lorem interdum, vitae accumsan dui volutpat. Suspendisse lobortis nulla et massa vehicula, consectetur egestas nulla dapibus. Donec vitae molestie risus. Etiam iaculis molestie neque sed tempor. Suspendisse sagittis elit quis varius semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin fringilla ullamcorper risus sit amet pulvinar.</p>
  </div>
  <Squiggle></Squiggle>
  <div className="upcoming-container containers">
  <Heading word="Upcoming"></Heading>
  <div className="upcoming-grid ">
    <div></div>
    <div><img src="/time-line.png" className="time-line"></img></div>
    <div></div>
    <div></div>
    <div></div>
    <div className="upcoming-card">{timelineContent[0]}</div>
    <div className="upcoming-card">{timelineContent[1]}</div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div className="upcoming-card">{timelineContent[2]}</div>
  </div>
  </div>
  <Squiggle></Squiggle>
  <div className="achievement-container containers">
  <Heading word="Achievements"></Heading>
  <div className="achievement-card-container">
    <div className="achievement-card"><img src="/trophy.png"></img><span>100h+ Screen Time</span></div>
    <div className="achievement-card"><img src="/trophy.png"></img><span>Another Stat</span></div>
    <div className="achievement-card"><img src="/trophy.png"></img><span>Stat Another</span></div>
  </div>
  </div>
  <Squiggle></Squiggle>
  <div className="explore-container containers">
  <table className="link-container">
  <tbody>
    <tr>
      <td colSpan={4} style={{textAlign: 'end', color: "#4B637D"}}>Cabinet</td>
      <td colSpan={5} style={{color: '#6380A1'}}>Resources</td>
    </tr>
    <tr>
      <td className="explore-title" colSpan={6} style={{color: '#212C37', textAlign: 'end', fontSize: '3rem'}}>Explore More</td>
      <td colSpan={3} style={{textAlign: 'center', paddingTop:'5px', color: '#5a6978'}}>The Jrnl</td>
    </tr>
    <tr>
      <td colSpan={5} style={{textAlign: 'end', color:'#425870'}}>Sponsor</td>
      <td colSpan={4} style={{color: '#36485B'}}>Events</td>
    </tr>
    <tr>
      <td colSpan={9} style={{textAlign: 'center', color:"#6c6e94"}}>Jprom</td>
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