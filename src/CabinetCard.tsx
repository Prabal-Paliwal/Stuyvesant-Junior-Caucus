import { useState } from 'react'
import ReactCardFlipImport from 'react-card-flip'
import "./style.css"

// react-card-flip ships as UMD/CJS and sets __esModule at runtime, so bundlers
// expose it as { default: Component }. Unwrap to the actual component (falls back
// if a bundler already resolved it correctly).
const ReactCardFlip =
    (ReactCardFlipImport as unknown as { default?: typeof ReactCardFlipImport }).default
    ?? ReactCardFlipImport

interface CardProps{
    photo: string,
    name: string,
    bio: string,
    theme: string,
}

function CabinetCard({photo, name, bio, theme} : CardProps){
    const [isFlipped, setIsFlipped] = useState(false)
    return <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className={'front-card cabinet-card ' + theme}>
          <img src={photo} alt={"photo of " + name} />
            <div style={{display:'grid', width:'100%',gridTemplateColumns:'5fr 1fr'}}>
                <span>{name}</span>
                            <button style={{placeSelf:"end"}} onClick={() => setIsFlipped(true)}><span style={{position:"relative", top: '-6.5px'}}>→</span></button>
            </div>
        </div>

        <div className={'back-card cabinet-card ' + theme}>
            <div style={{display:'grid', width:"100%", gridTemplateColumns:'1fr', gridTemplateRows:'210px 50px'}}>
            <p style={{fontSize: '1.1rem'}}>{bio}</p>
            <button style={{placeSelf:"end"}} onClick={() => setIsFlipped(false)}><span style={{position:"relative", top: '-6.5px'}}>→</span></button>
            </div>
        </div>
      </ReactCardFlip>;
}

export default CabinetCard
