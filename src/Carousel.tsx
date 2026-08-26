import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

let past_events = [['event 1', '/frame.png'],['event 2', '/frame.png'],['event 3', '/frame.png'],['event 4', '/frame.png'],['event 5', '/frame.png']]

export function CarouselDemo() {
  return (
    <Carousel style={{ width: 'min(calc(90% - 100px), 500px)', margin: '0 20px 0 20px'}}>
      <CarouselContent>
        {Array.from({ length: past_events.length }).map((_, index) => (
          <CarouselItem key={index}>
              <Card className="past-event-card">
                <CardContent>
                  <h3 className="past-event-titles"><div style={{background: 'white',color: '#b4d5ee',boxShadow: '5px 5px, 10px 10px #b4d5ee7b',borderRadius: '20px',padding: '0 20px 5px 20px'}}>{past_events[index][0]}</div></h3>
                  <img className='past-event-image' src={past_events[index][1]} style={{width:'100%'}}></img>
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}


export default CarouselDemo