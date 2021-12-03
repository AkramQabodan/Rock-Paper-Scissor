import "./RockPaperScissor.css";
import Element from "./Element/Element";
function RockPaperScissor(props) {
  const showResultHandler = () => {
    props.setEnableShowResult(true);
  };
  return (
    <div onClick={showResultHandler} className="RockPaperScissor-Container">
      <Element
        showResult={props.showResult}
        selected={props.selected}
        ele="Scissor"
        pickingFromTheArray={props.pickingFromTheArray}
      />
      <Element
        showResult={props.showResult}
        selected={props.selected}
        ele="Paper"
        pickingFromTheArray={props.pickingFromTheArray}
      />
      <Element
        showResult={props.showResult}
        selected={props.selected}
        ele="Rock"
        pickingFromTheArray={props.pickingFromTheArray}
      />
    </div>
  );
}
export default RockPaperScissor;
