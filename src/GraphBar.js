import React, {useState, useEffect} from 'react';
import './App.css';

function GraphBar(props) {
  const [height, setHeight] = useState(0)
  useEffect(() => {
    setTimeout(growBar, (500 + props.index * 30))
  })
  function growBar() {
    setHeight(props.bar[0])
  }
  const style = {
    height: height + "px", 
    backgroundImage: "linear-gradient(" + props.bar[1] + ", " + "#1781FD)"
  }
  return (
    <div className="GraphBar" style={style}>
    </div>

  );
}

export default GraphBar;
