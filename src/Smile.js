import React, {useState, useEffect} from 'react';
import './App.css';
import smile from './images/smile.svg'

function Smile() {
  const [blink, setBlink] = useState(false);
  function blinkEye() {
    setBlink(true);
  }
  useEffect(() => {
    setTimeout(blinkEye, 1500);
  });
  return (
    <>
      <div className="smile">
        <div className="eyes">
          <div className={blink ? "eye eye-left" : "eye"}></div>
          <div className="eye"></div>
        </div>
        <div className="mouth"><img src={smile} /></div>
      </div>
    </>
  );
}

export default Smile;