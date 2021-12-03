import "./ScoreBox.css";
import logo from "../material/logo.svg";
import ScoreNumber from "./Score Number/ScoreNumber";
function ScoreBox(props) {
  return (
    <div className="ScoreBoxContainer">
      <div className="logoContainer">
        <img className="logo" src={logo} alt="Logo picture" />
      </div>
      <ScoreNumber score={props.score} />
    </div>
  );
}

export default ScoreBox;
