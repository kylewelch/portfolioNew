import CodeRow from './CodeRow'
import './App.css';
const codeRows = [[1, 3], [0, 2, 1], [0, 1, 3, 2], [3, 2], [1, 3], [0, 3, 2, 1], [0, 2, 3, 2], [1]];
function Business() {
  return (
    <>
      <div className="code-menu">
        <div className="code-dot menu-dot1"></div>
        <div className="code-dot menu-dot2"></div>
        <div className="code-dot menu-dot3"></div>
      </div>
      <div className="code-grid">
        {codeRows.map((row, index) => {
          return <CodeRow
                    row={row}
                    index={index}
                  />
        })}
      </div>
      <div className="code-overlay"></div>
    </>
  );
}

export default Business;
