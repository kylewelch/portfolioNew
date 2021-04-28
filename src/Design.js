import React, {useState, useEffect} from 'react';
import DesignCard from './DesignCard'
import './App.css';
import arrow1 from './images/arrow1.svg'
import arrow2 from './images/arrow2.svg'
import arrow3 from './images/arrow3.svg'
import arrow4 from './images/arrow4.svg'

function Design() {
  const [color, setColor] = useState(0);
  const [arrows, setArrows] = useState(0);
  useEffect(() => {
    if (color === 0) {
      setTimeout(addColor, 1200)
    }
    if (arrows === 0) {
      setTimeout(addArrows, 1000)
    }
  })
  function addColor() {
    setColor(1)
  }
  function addArrows() {
    setArrows(1)
  }
  const arrowStyle = {
    transform: "scale(" + arrows + ")",
    opacity: arrows
  }
  return (
    <>
      <div className="Design-grid">
        <div className="Design-col">
          <DesignCard index={0} color={color} />
        </div>  
        <div className="Design-col">
          <div className="Design-row">
            <DesignCard index={1} color={color} />
            <DesignCard index={2} color={color} />
            <DesignCard index={3} color={color} />
          </div>
          <div className="Design-row">
            <DesignCard index={4} color={color} />
            <DesignCard index={5} color={color} />
            <DesignCard index={6} color={color} />
          </div>
        </div>
      </div>
      <img className="Design-arrow1" style={arrowStyle} src={arrow1} alt="arrow" />
      <img className="Design-arrow2" style={arrowStyle} src={arrow2} alt="arrow" />
      <img className="Design-arrow3" style={arrowStyle} src={arrow2} alt="arrow" />
      <img className="Design-arrow4" style={arrowStyle} src={arrow3} alt="arrow" />
      <img className="Design-arrow5" style={arrowStyle} src={arrow4} alt="arrow" />
    </>
  );
}

export default Design;