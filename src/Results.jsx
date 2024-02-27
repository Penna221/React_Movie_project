import Result from "./Result";
import "./Results.css";
function Results(props) {
  return (
    <>
      <ul>
        {props.data.map((e) => {
          return (
            <Result
              name={e.titleNameText}
              date={e.titleReleaseText}
              key={e.id}
              url={e.titlePosterImageModel.url}
            />
          );
        })}
      </ul>
    </>
  );
}
export default Results;
