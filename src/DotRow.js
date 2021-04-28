import './App.css';
const dots = Array(34).fill(1);

function DotRow() {
  return (
    <div className="DotRow">
      {dots.map((dot, i) => <div className="dot" dot={dot} key={i} />)}
    </div>
  );
}

export default DotRow;