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
  //
  const choicesfinale = shuffleChoices.map((answer) => (
    <>
      <div >
        <button type="button" id={answer} onClick={ (event) => props.handleClick(answer, choices, event) }
          className={`answer options {${answer === correctanswer ? "correct-answer" : ""
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
         

          {/* <button type="button" id={correctanswer} onClick={ () => props.handleClick(correctanswer) }
          className={`answer options ${correctanswer === correctanswer ? "correct-answer" : ""
            }`}
        >
            {correctanswer}
        </button>

          <button type="button" id={incorrectanswers} onClick={ () => props.handleClick(incorrectanswers) }
          className={`answer options ${incorrectanswers === correctanswer ? "correct-answer" : ""
            }`}
        >
            {incorrectanswers}
        </button> */}
        {choicesfinale}

        </div>
      ) : (
        <div className="multiple_choice">{choicesfinale}</div>
      )}
    </div>
  );
}

export default Question;
