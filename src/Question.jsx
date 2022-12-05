import React from 'react'

function Question(props) {
 
    const styles = {
        backgroundColor: props.type === "multiple" ? "#59E391" : props.type === "boolean" ?  "yellow" : "white"
    }

const incorrectanswers = props.incorrect_answers.map(answer => <p className='answer'>{answer}</p>)
const correctanswer = props.correct_answer

  return (
    <div>
      <p style={styles}>{props.number}. {props.question}</p>
      { props.type === "boolean" ? <div><p>{incorrectanswers}</p><p className='correct-answer'>{correctanswer}</p></div> 
       : <div className='multiple choice'>Multiple choice {incorrectanswers} <p className='correct-answer'>{correctanswer}</p> </div> }
    </div>
  )
}

export default Question
