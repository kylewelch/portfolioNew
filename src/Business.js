import GraphBar from './GraphBar'
import './App.css';
const bars = [[10, "#3F84F0"], [26, "#458BE7"], [20, "#458BE7"], [36, "#498FE0"], [50, "#4F95D9"], [74, "#589ECC"], [100, "#79BF9E"], [50, "#4F95DA"], [70, "#569CCF"], [106, "#79BF9E"], [160, "#78DB6F"], [220, "#78DB6F 15.1%"]];
function Code() {
  return (
    <>
      <div className="graph-grid">
        <div className="graph-grid-row  graph-gone"></div>
        <div className="graph-grid-row graph-thin"></div>
        <div className="graph-grid-row"></div>
        <div className="graph-grid-row graph-thin"></div>
        <div className="graph-grid-row"></div>
        <div className="graph-grid-row graph-thin"></div>
        <div className="graph-grid-row graph-gone"></div>
      </div>
      <div className="graph-columns">
        <div className="graph-col graph-gone"></div>
        <div className="graph-col graph-thin"></div>
        <div className="graph-col"></div>
        <div className="graph-col graph-thin"></div>
        <div className="graph-col"></div>
        <div className="graph-col graph-thin"></div>
        <div className="graph-col"></div>
        <div className="graph-col graph-thin"></div>
        <div className="graph-col"></div>
        <div className="graph-col graph-gone"></div>
      </div>
      <div className="graph-dots">
        <div className="graph-dot-row">
          <div className="graph-dot graph-gone"></div>
        </div>
        <div className="graph-dot-row">
            <div className="graph-dot graph-gone"></div>
            <div className="graph-dot graph-gone"></div>
            <div className="graph-dot"></div>
            <div className="graph-dot graph-gone"></div>
            <div className="graph-dot"></div>
            <div className="graph-dot graph-gone"></div>
            <div className="graph-dot"></div>
            <div className="graph-dot graph-gone"></div>
            <div className="graph-dot"></div>
            <div className="graph-dot graph-gone"></div>
        </div>
        <div className="graph-dot-row">
            <div className="graph-dot graph-gone"></div>
            <div className="graph-dot graph-gone"></div>
            <div className="graph-dot"></div>
            <div className="graph-dot graph-gone"></div>
            <div className="graph-dot"></div>
            <div className="graph-dot graph-gone"></div>
            <div className="graph-dot"></div>
            <div className="graph-dot graph-gone"></div>
            <div className="graph-dot"></div>
            <div className="graph-dot graph-gone"></div>
        </div>
        <div className="graph-dot-row">
            <div className="graph-dot graph-gone"></div>
            <div className="graph-dot graph-gone"></div>
            <div className="graph-dot graph-thin"></div>
            <div className="graph-dot graph-gone"></div>
            <div className="graph-dot graph-thin"></div>
            <div className="graph-dot graph-gone"></div>
            <div className="graph-dot graph-thin"></div>
            <div className="graph-dot graph-gone"></div>
            <div className="graph-dot graph-thin"></div>
            <div className="graph-dot graph-gone"></div>
        </div>
      </div>
      <div className="Business">
        {bars.map((bar, index) => {
          return <GraphBar
                    bar={bar}
                    index={index}
                  />
        })}
      </div>
    </>
  );
}

export default Code;
