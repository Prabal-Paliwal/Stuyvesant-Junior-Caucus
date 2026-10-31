import Hero from "./hero.tsx"
import Footer from './footer.tsx'
import Squiggle from "./squiggle.tsx"
import Heading from "./heading.tsx"
import EventsCard from "./EventsCard.tsx";
import Nav from "./Nav.tsx";
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
import "./style.css"

function Events(){
    return <>
        <Nav></Nav>
        <Hero title="/hero-events.png" background_image="linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/school_background.png')"></Hero>
    <Squiggle></Squiggle>
    <div className="containers">
    <Heading word="Upcoming"></Heading>
    <div className="upcoming-container">
        <EventsCard date="~Nov" title="College Prep Workshop #1" where=""></EventsCard>
    </div>
    </div>
    <Squiggle></Squiggle>
    {/* <div className="containers">
    <Heading word="Photo Booth"></Heading>
    <PhotoBooth></PhotoBooth>
    </div>
    <Squiggle></Squiggle> */}
    {/* <div className="containers checker past-event-container">
    <Heading word="Past Events"></Heading>
    <br></br><br></br><CarouselDemo></CarouselDemo>
    </div>
    <Squiggle></Squiggle> */}
    <Footer></Footer>
    </>;
}

// const photoBoothPhotos = [
//     { src: "/cabinet-hero.jpg", alt: "Junior Caucus cabinet on the stairs" },
//     { src: "/shakeshack.jpeg", alt: "Junior Caucus at Shake Shack" },
// ]
//
// function PhotoBooth(){
//     return <Carousel className="mx-auto w-[min(100%,920px)] px-14" opts={{ align: "start" }}>
//         <CarouselContent>
//             {photoBoothPhotos.map((photo) => (
//                 <CarouselItem key={photo.src} className="md:basis-1/2">
//                     <div className="p-1">
//                         <Card className="overflow-hidden py-0">
//                             <CardContent className="p-0">
//                                 <img src={photo.src} alt={photo.alt} className="aspect-square w-full object-cover"></img>
//                             </CardContent>
//                         </Card>
//                     </div>
//                 </CarouselItem>
//             ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//     </Carousel>
// }

export default Events