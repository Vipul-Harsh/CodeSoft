import React from "react";
import Confeti from "./Confeti";

import "./Quiz.css";
function QuizResult(props) {
  return (
    <>
<Confeti />
      <div className="show-score">
        Your Score:  {props.score}
        <br />
        Total Score:  {props.totalScore}<br></br>
        You need {props.totalScore-props.score} more!
      </div>
      <button id="next-button" onClick={props.tryAgain}>
        Try Again
      </button>
    </>
  );
}

export default QuizResult;
