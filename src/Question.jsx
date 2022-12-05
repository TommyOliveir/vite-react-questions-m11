import React from 'react'

function Question(props) {
 
    const styles = {
        backgroundColor: props.type === "multiple" ? "#59E391" : props.type === "boolean" ?  "yellow" : "white"
    }

const incorrectanswers = props.incorrect_answers.map(answer => <p className='answer'>{answer}</p>)
  return (
    <div>
      <p style={styles}>{props.number}. {props.question}</p>
      { props.type === "boolean" ? <div><p>true</p><p>false</p></div>  : <p>Multiple choice {incorrectanswers}</p> }
    </div>
  )
}

export default Question
