import React from "react";
import shuffle from "./utils";

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
   
    <p onClick={() =>props.handleClick(answer)} className={ `answer ${answer ===  correctanswer ? "correct-answer" : "" }`}>{answer}</p> 
  ));

  const shuffleChoices = shuffle(choices)


  return (
    <div>
      <p style={styles}>
        {props.number}. {props.question}
      </p>
      {props.type === "boolean" ? (
        <div>
          <p>{incorrectanswers}</p>
          <p className="correct-answer">{correctanswer}</p>
        </div>
      ) : (
        <div className="multiple choice">
      
           {shuffleChoices}
        </div>
      )}
    </div>
  );
}

export default Question;
