import CodeBlock from './CodeBlock'
import './App.css';

function CodeRow(props) {
  return (
    <div className="CodeRow">
      <div className="code-dot"></div>
      {props.row.map((item, index) => {
        return <CodeBlock item={item} index={index} rowIndex={props.index} />
      })}
    </div>

  );
}

export default CodeRow;