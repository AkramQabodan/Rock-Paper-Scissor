import "./ScoreNumber.css";
function ScoreNumber(props) {
  return (
    <div className="ScoreNumberContainer">
      <span className="title">SCORE</span>
      <p className="score">{props.score}</p>
    </div>
  );
}

export default ScoreNumber;
