import './App.css';

function DesignCard(props) {
  return (
    <>
      <div className="DesignCard">
        {props.index === 0 
          ? <div className="DesignCard-content">
              <div className="DesignCard-grayBg-1">
                <div className="DesignCard-input"></div>
                <div className="DesignCard-input"></div>
              </div>
              <div className="DesignCard-blue">
                <div className={props.color ? "DesignCard-blue-fill" : "DesignCard-blue-empty"}></div>
              </div>
            </div> 
          : props.index === 1
          ? <div className="DesignCard-content">
              <div className="DesignCard-graph">
                <div className="DesignCard-graph-bg">
                  <div className={props.color ? "DesignCard-purple-fill" : "DesignCard-purple-empty"} style={{height: (props.color ? "30px" : 0)}}></div>
                </div>
                <div className="DesignCard-graph-bg">
                  <div className={props.color ? "DesignCard-purple-fill" : "DesignCard-purple-empty"} style={{height: (props.color ? "40px" : 0)}}></div>
                </div>
                <div className="DesignCard-graph-bg">
                  <div className={props.color ? "DesignCard-purple-fill" : "DesignCard-purple-empty"} style={{height: (props.color ? "30px" : 0)}}></div>
                </div>
                <div className="DesignCard-graph-bg">
                  <div className={props.color ? "DesignCard-purple-fill" : "DesignCard-purple-empty"} style={{height: (props.color ? "50px" : 0)}}></div>
                </div>
                <div className="DesignCard-graph-bg">
                  <div className={props.color ? "DesignCard-purple-fill" : "DesignCard-purple-empty"} style={{height: (props.color ? "20px" : 0)}}></div>
                </div>
              </div>
              <div className="DesignCard-gray-btn"></div>
            </div> 
          : props.index === 2
          ? <div className="DesignCard-content">
              <div className="DesignCard-img DesignCard-red">
                <div className={props.color ? "DesignCard-red-fill" : "DesignCard-red-empty"}></div>
              </div>
              <div className="DesignCard-grid">
                <div className="DesignCard-col">
                  <div className="DesignCard-col-img"></div>
                  <div className="DesignCard-col-h1"></div>
                  <div className="DesignCard-col-h2"></div>
                </div>
                <div className="DesignCard-col">
                  <div className="DesignCard-col-img"></div>
                  <div className="DesignCard-col-h1"></div>
                  <div className="DesignCard-col-h2"></div>
                </div>
                <div className="DesignCard-col">
                  <div className="DesignCard-col-img"></div>
                  <div className="DesignCard-col-h1"></div>
                  <div className="DesignCard-col-h2"></div>
                </div>
              </div>
            </div> 
          : props.index === 3
          ? <div className="DesignCard-content-full">
              <div className="DesignCard-carousel">
                <div className="DesignCard-carousel-item1"></div>
                <div className="DesignCard-carousel-item2 DesignCard-yellow">
                  <div className={props.color ? "DesignCard-yellow-fill" : "DesignCard-yellow-empty"}></div>
                </div>
                <div className="DesignCard-carousel-item3"></div>
              </div>
              <div className="DesignCard-text">
                <div className="DesignCard-text-h1"></div>
                <div className="DesignCard-text-h2"></div>
              </div>
            </div> 
          : props.index === 4
          ? <div className="DesignCard-content-full">
              <div className="DesignCard-gray-full"></div>
              <div className="DesignCard-text">
                <div className="DesignCard-text-h3"></div>
                <div className="DesignCard-text-h4"></div>
              </div>
                <div className="DesignCard-blue2 DesignCard-red">
                <div className={props.color ? "DesignCard-red-fill" : "DesignCard-red-empty"}></div>
                </div>
            </div> 
          : props.index === 5
          ? <div className="DesignCard-content-full">
              <div className="DesignCard-img DesignCard-green">
                <div className={props.color ? "DesignCard-green-fill" : "DesignCard-green-empty"}></div>
              </div>
              <div className="DesignCard-grayCard"></div>
              <div className="DesignCard-grayCard"></div>
              <div className="DesignCard-grayCard-half"></div>
            </div>
          : <div className="DesignCard-content">
              <div className="DesignCard-img DesignCard-gray"></div>
              <div className="DesignCard-bullets">
                <div className="DesignCard-bullet">
                  <div className="DesignCard-bullet-point"></div>
                  <div className="DesignCard-text-h5"></div>
                </div>
                <div className="DesignCard-bullet DesignCard-bullet-mid">
                  <div className="DesignCard-bullet-point"></div>
                  <div className="DesignCard-text-h6"></div>
                </div>
                <div className="DesignCard-bullet">
                  <div className="DesignCard-bullet-point"></div>
                  <div className="DesignCard-text-h7"></div>
                </div>
              </div>
              <div className="DesignCard-blue">
                <div className={props.color ? "DesignCard-blue-fill" : "DesignCard-blue-empty"}></div>
              </div>
            </div>
        }
      </div>
    </>
  );
}

export default DesignCard;