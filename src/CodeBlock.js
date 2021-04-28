import React, {useState, useEffect} from 'react';
import './App.css';
const lengths = [0, 110, 70, 40]
function CodeBlock(props) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setTimeout(writeCode, (500 + (props.rowIndex * 120) + props.index * 10))
  })
  function writeCode() {
    setWidth(lengths[props.item])
  }
  const style = {
    width: width + "px"
  }
  return (
    <div className={"code-block" + props.item} style={style}></div>
  );
}

export default CodeBlock