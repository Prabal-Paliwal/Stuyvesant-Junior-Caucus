interface CardProps{
    date: string,
    title: string,
    where: string,
}

function EventsCard({date, title, where} : CardProps){
    return <div className="events-card">
        <span></span>
        <span style={{fontSize:'2.2rem'}}>{date}</span>
        <span>{title}</span>
        <span style={{fontSize:'0.7rem'}}>where: {where}</span>
    </div>;
}

export default EventsCard