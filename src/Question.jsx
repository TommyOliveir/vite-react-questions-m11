import React from "react";
// import { shuffle, noduplicates } from "./utils.js";

function Question(props) {
  const styles = {
    backgroundColor:
      props.type === "multiple"
        ? "#59E391"
        : props.type === "boolean"
        ? "yellow"
        : "white",
  };

  const correctanswer = props.correct_answer;

  const incorrectanswers = props.incorrect_answers.map((answer) => answer);

  const choices = props.choices.map((answer) => answer);

  const shuffleChoices = choices;
  const choicesfinale = shuffleChoices.map((answer) => (
    <>
      <div className="radio">
        <label
          className={`answer ${
            answer === correctanswer ? "correct-answer" : ""
          }`}
        >
          <input
            id={answer}
            type="radio"
            value={answer}
            name={props.question}
            onClick={props.handleClick}
          />

          {answer}
        </label>
      </div>
      {/* <p type="radio" onClick={() =>props.handleClick(answer)} className={ `answer ${answer ===  correctanswer ? "correct-answer" : "" }`}>{answer} </p> */}
    </>
  ));

  return (
    <div>
      <p style={styles}>
        {props.number}. {props.question}
      </p>
      {props.type === "boolean" ? (
        <div>true or false</div>
      ) : (
        <div className="multiple choice">{choicesfinale}</div>
      )}
    </div>
  );
}

export default Question;
