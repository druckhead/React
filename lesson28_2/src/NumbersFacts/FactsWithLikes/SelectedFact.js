export default function SelectedFact(props) {
  return (
    <>
      <h5>Number {props.number} Fact text:</h5>
      <p>{props.factText}</p>
    </>
  );
}
