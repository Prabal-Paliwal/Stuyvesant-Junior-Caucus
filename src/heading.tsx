interface HeadingProps{
    word:string
}

function Heading({word} : HeadingProps){
    return <h2 className="heading">{word}</h2>
}

export default Heading