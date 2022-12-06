import React from "react";

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
   
    <p className={ `answer ${answer ===  correctanswer ? "correct-answer" : "" }`}>{answer}</p> 
  ));

  const shuffleChoices = shuffle(choices)

  function shuffle(array) {
    // const array = ["a", "b" , "c"]
    let i = array.length, j, temp;
    while(--i > 0) {
      j = Math.floor(Math.random() * (i+1));
      temp = array[j]
      array[j] = array[i]
      array[i] = temp
      console.log("shuffle",array)
    }
    return array
  
  }



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
      
          <p> {shuffleChoices}</p>
        </div>
      )}
    </div>
  );
}

export default Question;
