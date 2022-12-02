import { useState, useEffect } from 'react'
import './App.css'
import Question from './Question'


function App() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
      .then((response) => response.json())
      .then((data) => setQuestions(data.results));

  }, [])


  console.log("tom", questions)
  console.log("hey", questions[1])

  const questionElements = questions.map((item, index) => {
    return <Question key={item.question} question={item.question} number={index + 1} type={item.type} />
  }
  )

  return (
    <div className="App">
      <main>
        <h1>Quiz bee</h1>
        {questionElements}
      </main>


    </div>
  )
}

export default App
