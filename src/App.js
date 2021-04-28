import React, {useState, useEffect} from 'react';
import Design from './Design'
import Code from './Code'
import Business from './Business';
import Smile from './Smile'
import DotRow from './DotRow'
import './App.css';
const dotRows = Array(18).fill(1);
const topics = ["Design", "Coding", "Business Growth", "Making your day better"]
function App() {
  const [face, setFace] = useState("design");
  const [back, setBack] = useState(null);
  const [topic, setTopic] = useState(0);
  const [degrees, setDegrees] = useState(0);
  useEffect(() => {
      setTimeout(flipCard, 3500)
      console.log("one")
  })
  function flipCard() {
    const newDegrees = degrees + 180;
    setDegrees(newDegrees);
    changeFace();
  }
  function changeFace() {
    if (topic === 0) {
      setBack("code")
      setTopic(1)
    }
    else if (topic === 1) {
      setFace("business")
      setTopic(2)
    }
    else if (topic === 2) {
      setFace("blank")
      setBack("smile")
      setTopic(3)
    }
    else {
      setFace("design")
      setTopic(0)
    }
  }
  return (
    <div className="App">
      <div className="nav">
        <p className="logo">Kyle Welch</p>
        <div className="nav-items">
          <p className="nav-item">work</p>
          <p className="nav-item">about</p>
        </div>
      </div>
      <h2 className="intro">Hi! I'm all about</h2>
      <h2 className={"topic text-" + topic }>{topics[topic]}</h2>
      <div className="scene">
        <div className="card" style={{transform: "rotateY(-" + degrees + "deg)"}}>
          <div className={face === "design" ? "face design" : "face code"}>
            {face === "design" ? <Design topic={topic} /> : face === "business" ? <Business face={face} /> : null}
          </div>
          <div className={back === "code" ? "face back code" : "face back day"}>
            {back === "code" ? <Code topic={topic} /> : <Smile topic={topic} />}
          </div>
        </div>
      </div>
      <div className="dots" onClick={flipCard}>
        {dotRows.map((row, i) => <DotRow row={row} key={i} />)}
        <div className="dots-overlay"></div>
      </div>
    </div>
  );
}

export default App;