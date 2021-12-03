import "./Rules.css";
import RulesImg from "../../material/image-rules.svg";
import ExistButton from "../../material/icon-close.svg";
function Rules(props) {
  const existHandler = () => {
    props.setVisible(false);
  };
  return (
    <div onClick={existHandler} className="Dark-Background">
      <div className="Rules-Container">
        <div className="Header">
          <h1>RULES</h1>
          <img
            src={ExistButton}
            className="Exist-Button"
            onClick={existHandler}
          />
        </div>
        <img src={RulesImg} className="Rules-Img" />
      </div>
    </div>
  );
}
export default Rules;
