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

  const incorrectanswers = props.incorrect_answers.map((answer) => (
    <p className="answer">{answer}</p>
  ));

  const choices = props.choices.map((answer) => (
      answer
  ));

  const shuffleChoices = choices
  const choicesfinale = shuffleChoices.map((answer) => (
   
    <p onClick={() =>props.handleClick(answer)} className={ `answer ${answer ===  correctanswer ? "correct-answer" : "" }`}>{answer}</p> 
  ));


  return (
    <div>
      <p style={styles}>
        {props.number}. {props.question}
      </p>
      {props.type === "boolean" ? (
        <div>
          <p  onClick={() =>props.handleClick(incorrectanswers)}>{incorrectanswers}</p>
          <p  onClick={() =>props.handleClick(correctanswer)}className="correct-answer">{correctanswer}</p>
        </div>
      ) : (
        <div className="multiple choice">
      
           {choicesfinale}
        </div>
      )}
    </div>
  );
}

export default Question;
