import React from 'react'

function Question(props) {
  return (
    <div>
      <h1> {props.number}. {props.question}</h1>
    </div>
  )
}

export default Question
