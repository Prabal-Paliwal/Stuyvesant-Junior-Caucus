interface HeroProps {
    background_image: string;
    title: string
}

function Hero({background_image, title}: HeroProps){
    return <div className="hero" style={{background: background_image}}>
        <img src={title} className="hero_title"></img>
    </div>
}

export default Hero