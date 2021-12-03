import "./RulesButton.css";
function RulesButton(props) {
  const RulesHandler = () => {
    props.setVisible(true);
  };
  return (
    <button onClick={RulesHandler} className="Rules-Button">
      RULES
    </button>
  );
}
export default RulesButton;
