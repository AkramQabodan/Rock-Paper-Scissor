import { useState, useEffect } from "react";
import "./App.css";
import ScoreBox from "./components/ScoreBox";
import RockPaperScissor from "./components/RockPaperScissor/RockPaperScissor";
import RulesButton from "./components/Rules/RulesButton";
import Rules from "./components/Rules/Rules";
import Result from "./components/Result/Result";
function App() {
  const [rulesVisible, setRulesVisible] = useState(false);
  const [selected, setSelected] = useState();
  const [showResult, setShowResult] = useState(false);
  const [enableShowResult, setEnableShowResult] = useState(false);
  const randomArray = ["Rock", "Paper", "Scissor"];
  const [randomPick, setRandomPick] = useState();
  const [score, setScore] = useState(0);

  const pickingFromTheArray = () => {
    setRandomPick(randomArray[Math.floor(Math.random() * randomArray.length)]);
  };

  return (
    <div className="App">
      <ScoreBox score={score} />
      {showResult && enableShowResult ? (
        <Result
          showResult={setShowResult}
          setEnableShowResult={setEnableShowResult}
          selected={selected}
          randomPick={randomPick}
          setScore={setScore}
          score={score}
        />
      ) : (
        <RockPaperScissor
          setEnableShowResult={setEnableShowResult}
          selected={setSelected}
          showResult={setShowResult}
          setRandomPick={setRandomPick}
          pickingFromTheArray={pickingFromTheArray}
        />
      )}
      <RulesButton setVisible={setRulesVisible} />
      {rulesVisible && <Rules setVisible={setRulesVisible} />}
    </div>
  );
}

export default App;
