import { useState } from 'react'
import './App.css'
import Aurora from './components/Aurora.jsx';
import TextPressure from './components/TextPresure.jsx';
import FallingText from './components/FallingText.jsx';
import Lanyard from './components/Lanyard.jsx';
import SpotlightCard from './components/SpotlightCard.jsx';
import InfiniteMenu from './components/InfiniteMenu.jsx';


function App() {
  const [count, setCount] = useState(0)
  const items = [
    {
      image: 'https://picsum.photos/300/300?grayscale',
      link: 'https://google.com/',
      title: 'Item 1',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/400/400?grayscale',
      link: 'https://google.com/',
      title: 'Item 2',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/500/500?grayscale',
      link: 'https://google.com/',
      title: 'Item 3',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/600/600?grayscale',
      link: 'https://google.com/',
      title: 'Item 4',
      description: 'This is pretty cool, right?'
    }
  ];

  return (
    <div>
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        speed={1}
        amplitude={1}
      />
      <h1 className="titulo">TITULO</h1>
      <div style={{ position: 'relative', height: '300px' }}>
        <TextPressure
          text="Bienvenido"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>
      <h1 className="titulo">EFECTO FALLING TEXT</h1>
      <FallingText
        text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
        highlightWords={["React", "Bits", "animated", "components", "simplify"]}
        highlightClass="highlighted"
        trigger="hover"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="2rem"
        mouseConstraintStiffness={0.9}
      />
      <h1 className="titulo">EFECTO LANYARD</h1>
      <div className="lanyard-group">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
      <h1 className="titulo">EFECTO CARD SPOTLIGHT</h1>
      <div className="spotlight-card-group">
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 230, 0, 0.33)">
          <h1 className='spotlight-card-text'>Prueba 1</h1>
          <p className="spotlight-card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur repudiandae soluta, quod magnam debitis officia corporis molestiae quaerat vitae numquam. In molestiae, culpa mollitia temporibus dolorum quia excepturi inventore.</p>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 0, 0, 0.33)">
          <h1 className='spotlight-card-text'>Prueba 2</h1>
          <p className="spotlight-card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur repudiandae soluta, quod magnam debitis officia corporis molestiae quaerat vitae numquam. In molestiae, culpa mollitia temporibus dolorum quia excepturi inventore.</p>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(55, 0, 255, 0.33)">
          <h1 className='spotlight-card-text'>Prueba 3</h1>
          <p className="spotlight-card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur repudiandae soluta, quod magnam debitis officia corporis molestiae quaerat vitae numquam. In molestiae, culpa mollitia temporibus dolorum quia excepturi inventore.</p>
        </SpotlightCard>
      </div>
      <h1 className="titulo">EFECTO SCROLL INFINITY</h1>
      <div style={{ height: '600px', position: 'relative' }}>
        <InfiniteMenu items={items} />
      </div>
    </div>

  )
}

export default App
