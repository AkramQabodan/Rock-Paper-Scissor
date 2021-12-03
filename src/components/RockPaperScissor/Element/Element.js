import "./Element.css";

function Element(props) {
  const onClickHandler = () => {
    if (!props.showResult) {
      return;
    }
    props.showResult(true);
    if (!props.selected) {
      return;
    }
    props.selected(props.ele);
    props.pickingFromTheArray();
  };
  return (
    <div
      onClick={onClickHandler}
      className={`Element-Container-${props.ele}`}
    ></div>
  );
}
export default Element;
