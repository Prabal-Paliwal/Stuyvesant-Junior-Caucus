import Hero from "./hero.tsx"
import Footer from './footer.tsx'
import Squiggle from "./squiggle.tsx"
import Heading from "./heading.tsx"
import CabinetCard from "./CabinetCard.tsx";
import Nav from "./Nav.tsx";
import "./style.css"

function Cabinet(){
    return <>
    <Nav></Nav>
    <Hero title="/hero-cabinet.png" background_image="linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/school_background.png')"></Hero>
    <Squiggle></Squiggle>
    <div className="containers">
    <Heading word="Presidents"></Heading>
    <div className="cabinet-card-container cabinet-card-container-smaller">
        <CabinetCard photo="/image13.jpg" name="Elly" bio="Hi! I’m Elly, and I’m super excited to serve as your Junior Caucus co-president alongside Olivia. It's been my honor to serve this class since freshman year, and I'm happy to say we're back this year with even more exciting plans for our juniors! I love seeing our dedicated team working hard together for one common goal: to create better school years for the class of '28. Here's to a great junior year together! " theme="dark"></CabinetCard>
        <CabinetCard photo="/image9.png" name="Olivia" bio="Hellooooo juniors! I'm Olivia, and I'm absolutely thrilled to serve you with my co-president Elly and our cabinet. From the day to day operations to planning far ahead, I love collaborating with everyone in caucus, and I'm happiest when I see our efforts become reality. If you're already here, then that means you keep up with your caucus, so continue the good work! Cheers to a fun-filled year, and see you all at J-Prom!" theme="dark"></CabinetCard>
    </div>
    </div>
    <Squiggle></Squiggle>
    <div className="containers checker">
    <Heading word="Chief of Staff"></Heading>
    <div className="cabinet-card-container cabinet-card-container-smaller">
        <CabinetCard photo="/image.png" name="Alvin" bio="Hey guys! I'm Alvin, and I am one of your Chiefs of Staff this year. I am so excited to work with you all and especially my cabinet members. Outside of the Junior Caucus, I also play badminton and debate. I can't wait to make this year even more eventful than the last." theme="light"></CabinetCard>
        <CabinetCard photo="/image15.png" name="Yubin" bio="Yoohoo! I'm Yubin and I am so excited to be a Chief of Staff this year for Junior Caucus! Outside of Caucus, you can probably find me at Model UN, STC, Parliamentary Debate, or Dunkin. I am so hyped!" theme="light"></CabinetCard>
    </div>
    </div>
    <Squiggle></Squiggle>
    <div className="containers">
    <Heading word="Events"></Heading>
    <div className="cabinet-card-container">
        <CabinetCard photo="/image6.jpg" name="Brianna" bio="Hi guys!! I'm Brianna, and I'm so excited to be one of your Event Directors this year! I'm so proud of what we were able to accomplish last year, and I'm even more excited to see what we can do this year! I'm part of Stuy Swim, and I love spending my time in the Robotics Lab, volunteering through StuySPAID as a VP, or writing articles for SciSpec. Outside of Stuy, I absolutely love taking pictures around the city, trying new restaurants with my friends, and teaching kids how to swim. I'm so excited to see what this year will bring us!" theme="dark"></CabinetCard>
        <CabinetCard photo="/image.png" name="Isabel" bio="Hi! I'm Isabel and I will be one of your Events Directors this year! I've been a part of Caucus since Freshman year and I'm so excited to continue to contribute to the Stuy community! At Stuy, I'm also involved in Volleyball, BigSibs, and ARISTA. Outside of Stuy I love to tutor, babysit, and work in the lab. In my free time I love reading, painting, and listening to music. I'm so excited to work with everyone this year and to see what Caucus can accomplish!" theme="dark"></CabinetCard>
        <CabinetCard photo="/image16.jpg" name="Sarah" bio="Hey juniors! I'm Sarah, and I'm excited to be one of your Events Directors for Junior Caucus this year! Alongside student government, I have been a scenic designer as Tech director for SING!, been a Tech member for Stuyvesant Theater Community (STC), and edited for the Writing Center. In my free time, I love seeing Broadway musicals, reading romance novels, and doing The New York Times Strands. Junior Caucus has so many events and opportunities prepared by our amazing team, and I can't wait for you all to see what we have planned!" theme="dark"></CabinetCard>
    </div>
    </div>
    <Squiggle></Squiggle>
    <div className="containers checker">
    <Heading word="Internals"></Heading>
    <div className="cabinet-card-container">
        <CabinetCard photo="/image5.jpg" name="Jinyi" bio="Hii! My name is Jinyi, and I'm one of your Internals Directors for Junior Caucus! I've been a member of Caucus since freshman year, and am excited to continue serving and supporting our grade! Outside of Caucus, I serve as the English Admin of the Metis Project, and am also involved in several departments of The Spectator. In my free time, I enjoy playing the piano, learning about global issues, and trying to read through my to-read list." theme="light"></CabinetCard>
        <CabinetCard photo="/image2.png" name="Bruce" bio="Hi! I'm Bruce, and I am one of Junior Caucus's Internals Directors! I am also a director for Stuyvesant Study Society (SSS), a club to reach out to all students across NYC and offer free tutoring for them through our Stuy network. My interests align with the business world, including being part of Novus, Cortex Consulting, DECA, and even starting my own business. I know that Caucus is planning so many amazing opportunities and events for everyone, and I hope to serve you juniors in order to have a successful year!" theme="light"></CabinetCard>
        <CabinetCard photo="/image11.jpg" name="Mahjabin" bio="Hi! I'm Mahjabin, and I am one of your Internals Directors for Junior Caucus this year! Outside of Caucus, I am the vice-president of Stuyvesant's Environmental Club, a member of ARISTA, and involved in Speech and Debate's Extemp Team. I look forward to working alongside everyone in Junior Caucus in order to bring tons of new resources and opportunities to our grade!" theme="light"></CabinetCard>
    </div>
    </div>
    <Squiggle></Squiggle>
    <div className="containers">
    <Heading word="Outreach"></Heading>
    <div className="cabinet-card-container cabinet-card-container-smaller">
        <CabinetCard photo="/image1.jpg" name="Emer" bio="Hi! I'm Emer, and I'm one of the Outreach Co-Directors for Stuyvesant's Junior Caucus! I'm also the co-president and co-founder of Empower-ED, a student-led nonprofit providing free SHSAT tutoring and high school admissions guidance to underserved NYC middle schoolers, and I play violin in Stuyvesant's Symphonic Orchestra. Outside of student government, I love coding and playing chamber music. I'm excited to keep growing our outreach efforts this year alongside Fiona and the rest of the amazing Junior Caucus team!" theme="dark"></CabinetCard>
        <CabinetCard photo="/image3.jpg" name="Fiona" bio="Hi everyone! I'm Fiona, and I'm one of the co-directors of Outreach for Junior Caucus. I'm also a SHSAT Admin for the Metis Project, copyeditor of the Stuyvesant Political Review, and an ARISTA Operations Committee member. In my free time, I like to listen to music, go on a walk, and play violin. I'm looking forward to a great year together with our amazing caucus team!" theme="dark"></CabinetCard>
    </div>
    </div>
    <Squiggle></Squiggle>
    <div className="containers checker">
    <Heading word="Graphics"></Heading>
    <div className="cabinet-card-container cabinet-card-container-smaller">
        <CabinetCard photo="/image12.jpg" name="Chloe" bio="Hi! I'm Chloe, and I'm one of the graphics co-directors this year. I've been part of Caucus since I was a freshman and I'm excited to continue being part of it. Outside of Caucus, I like to draw, listen to music, and learn astrophysics." theme="light"></CabinetCard>
        <CabinetCard photo="/image7.jpg" name="Ivy" bio="Hellooo everyone! I'm Ivy and I am one of the co-directors of the Junior Caucus Graphics department. I have been a part of caucus since freshman year and I am so so excited to work with the team to make everyone's junior year successful and memorable. On certain days, you might find me rockin' my Big Sib shirt, but most of the time, you can usually find me at the back of the Junior Atrium or at Starbucks, drawing, chatting with my friends, playing volleyball or in a meeting tutoring kids. I can guarantee a promising year ahead and graphics will continue to help keep everyone updated about the great things caucus has planned!" theme="light"></CabinetCard>
    </div>
    </div>
    <Squiggle></Squiggle>
    <div className="containers">
    <Heading word="Media"></Heading>
    <div className="cabinet-card-container">
        <CabinetCard photo="/image14.jpg" name="Amber" bio="Hello! I'm Amber, and I'm the co-director of Media for Stuyvesant's Junior Caucus! I'm part of Stuyvesant's Honor Society and play on my school's varsity fencing and volleyball teams. Outside of sports, I'm a PISTE tutor, and I like volunteering through several club activities, including StuySPAID. I have been working in student government since freshman year and am excited to continue this journey with Elly and Olivia alongside the amazing Junior Caucus team!" theme="dark"></CabinetCard>
        <CabinetCard photo="/image.png" name="Anders" bio="$#?" theme="dark"></CabinetCard>
        <CabinetCard photo="/image10.jpg" name="Lina" bio="Hey Juniors! My name is Lina. I'm so excited to be serving as one of your social media managers for this year's junior caucus, and I hope we can play a role in making this year special and memorable for everybody. In school I am a member of the oratorio choir, a part of the bigsib program, a participant in SING! as a media manager, and, of course, a part of the Junior Caucus cabinet. When I'm not studying or in school, you can probably find me creating content for one of the 16 accounts I have on Instagram and tiktok, doing one of the twenty million hobbies I've picked up throughout my life, or picking up another random hobby that I'll probably end up being aggressively mediocre at." theme="dark"></CabinetCard>
    </div>
    </div>
    <Squiggle></Squiggle>
    <div className="containers checker">
    <Heading word="Finance"></Heading>
    <div className="cabinet-card-container">
        <CabinetCard photo="/image4.jpg" name="Tiffany" bio="Hi, I'm Tiffany, one of your Finance Directors for Junior Caucus this year! Outside of Caucus, I'm involved in Student Union as Deputy CFO, the Stuyvesant Spectator, and Speech and Debate, and in my free time, I enjoy playing cards and experimenting with new recipes. I'm so excited to be working with the team and serving the junior class, and my team and I will do our best to keep JProm ticket prices as low as possible while making sure everyone has an amazing time this year. I can't wait to see all the great things Junior Caucus does this year!" theme="light"></CabinetCard>
        <CabinetCard photo="/image8.jpg" name="Anthony" bio="Hi everyone! I'm Anthony, one of the co-directors of Finance for Junior Caucus this year! Outside of student government, I serve as VP of Red Cross, where I frequently volunteer with local organizations across the city. I'm also a member of the Math Team and the Chess Team. During my free time, you can often find me exploring the city with friends. I am really excited to work with our amazing team to bring the best and affordable events for our junior class, especially JProm. I can't wait to see what Caucus has in store this year!" theme="light"></CabinetCard>
        <CabinetCard photo="/image.png" name="Trevor" bio="$#?" theme="light"></CabinetCard>
    </div>
    </div>
    <Squiggle></Squiggle>
    <div className="containers">
    <Heading word="IT"></Heading>
    <div className="cabinet-card-container">
        <CabinetCard photo="/image17.png" name="Prabal" bio="Hi everyone! I'm Prabal. I am the I.T. director of Junior Caucus this year. I am really excited to work with this cabinet to provide online resources for the whole grade. Outside of Caucus, I am co-CTO of HSConnexus and in Varsity Cricket Team. Outside of coding I love to play sports—badminton, cricket and soccer—or stay home and build random projects." theme="dark"></CabinetCard>
    </div>
    </div>
    <Squiggle></Squiggle>
    <Footer></Footer>
    </>;
}

export default Cabinet
