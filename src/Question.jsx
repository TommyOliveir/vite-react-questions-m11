import React from 'react'

function Question(props) {
    const styles = {
        backgroundColor: props.type === "multiple" ? "#59E391" : props.type === "boolean" ?  "yellow" : "white"
    }
    
  return (
    <div>
      <p style={styles}>{props.number}. {props.question}</p>
    </div>
  )
}

export default Question
