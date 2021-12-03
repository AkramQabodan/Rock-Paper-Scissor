import { useState, useEffect } from "react";
import "./Result.css";
import Element from "../RockPaperScissor/Element/Element";
function Rules(props) {
  const [winDrawLose, setWinDrawLose] = useState();
  const [animation, setAnimation] = useState("Start");

  useEffect(() => {
    if (props.selected === "Scissor" && props.randomPick === "Paper") {
      setWinDrawLose("WIN");
    } else if (props.selected === "Paper" && props.randomPick === "Rock") {
      setWinDrawLose("WIN");
    } else if (props.selected === "Rock" && props.randomPick === "Scissor") {
      setWinDrawLose("WIN");
    } else if (props.selected === props.randomPick) {
      setWinDrawLose("DRAW");
    } else {
      setWinDrawLose("LOSE");
    }
  }, [winDrawLose]);

  useEffect(() => {
    setAnimation("End");
    if (props.selected === "Scissor" && props.randomPick === "Paper") {
      props.setScore((previous) => previous + 1);
    } else if (props.selected === "Paper" && props.randomPick === "Rock") {
      props.setScore((previous) => previous + 1);
    } else if (props.selected === "Rock" && props.randomPick === "Scissor") {
      props.setScore((previous) => previous + 1);
    } else if (props.selected === props.randomPick) {
      return;
    } else if (props.score === 0) {
      return;
    } else {
      props.setScore((previous) => previous - 1);
    }
  }, []);

  const playAgainHandler = () => {
    props.setEnableShowResult(false);
    props.showResult(false);
  };

  let Text = "Draw";

  if (winDrawLose === "WIN") {
    Text = "YOU WIN";
  } else if (winDrawLose === "LOSE") {
    Text = "YOU LOSE";
  }
  return (
    <div className="Results">
      <div className="You-Picked-Container">
        <span className="You-Picked-Span">YOU PICKED</span>
        <Element
          ele={`Picked-${props.selected} ${
            winDrawLose === "WIN" ? `WIN-${props.selected}` : ""
          }`}
        />
      </div>
      <div className={`${animation}-Lose-Win-Draw`}>
        <span className={`Title-Win-Draw-Lose`}>{Text}</span>
        <button
          onClick={playAgainHandler}
          className={`Play-Again-${winDrawLose} `}
        >
          PLAY AGAIN
        </button>
      </div>
      <div className="The-House-Picked-Container">
        <span className="Computer-Picked-Span">THE HOUSE PICKED</span>
        <Element
          ele={`Picked-${props.randomPick} ${
            winDrawLose === "LOSE" ? `WIN-${props.randomPick}` : ""
          }`}
        />
      </div>
    </div>
  );
}
export default Rules;
