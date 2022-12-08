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
      <div>
        <button type="button" id={answer} onClick={ () => props.handleClick(answer) }
          className={`answer options ${answer === correctanswer ? "correct-answer" : ""
            }`}
        >
          {answer}
        </button>
      </div>

    </>
  ));

  return (
    <div>
      <p style={styles}>
        {props.number}. {props.question}
      </p>
      {props.type === "boolean" ? (
        <div>
          <label className="correct-answer">
            <input
              type="radio"
              value={correctanswer}
              name={props.question}
              onClick={props.handleClick}
            />

            {correctanswer}
          </label>
          <label>
            <input
              type="radio"
              value={incorrectanswers}
              name={props.question}
              onClick={props.handleClick}
            />

            {incorrectanswers}
          </label>
        </div>
      ) : (
        <div className="multiple choice">{choicesfinale}</div>
      )}
    </div>
  );
}

export default Question;
