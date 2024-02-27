import "./Result.css";
function Result(props) {
  return (
    <li className="card" key={props.id}>
      <img src={props.url} />
      <h2>{props.name}</h2>
      <u>
        <h3>Publish date: {props.date}</h3>
      </u>
    </li>
  );
}
export default Result;
