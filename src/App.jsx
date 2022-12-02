import { useState, useEffect } from 'react'
import './App.css'
import Question from './Question'


function App() {
  const [questions, setQuestions] = useState({})

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
      .then((response) => response.json())
      .then((data) => setQuestions(data.results));

  }, [])
  console.log(questions)

  const questionElements = questions.map(question => (
    <Question 
      
    />
))

  return (
    <div className="App">

      {questionElements}

    </div>
  )
}

export default App
