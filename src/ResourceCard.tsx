interface CardProps{
    image: string,
    title: string,
    link: string,
    theme: string
}

function ResourceCard({image, title, link, theme} : CardProps){
    return <div className={'resource-card ' + theme}>
        <img src={image} alt={'image related to ' + title}></img>
        <a style={{fontSize:'1.5rem'}} target="_blank" href={link}>{title}</a>
    </div>;
}

export default ResourceCard