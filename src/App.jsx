import { useState, useEffect } from "react";
import "./App.css";
import Question from "./Question";
import { nanoid } from "nanoid";
import { shuffle, noduplicates } from "./utils.js";

function App() {
  const [questions, setQuestions] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState([
    {
      id: nanoid(),
      question: "",
      type: "",
      correct_answer: "",
      incorrect_answers: [],

      // user_answered: "",
      // user_scored: "",
    },
  ]);
  console.log("tom", questions);
  console.log("hey", questions[1]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((response) => response.json())
      .then((data) => setQuestions(data.results));
  }, []);



  //working
  // function showQuizBtn() {
  //   setShowQuiz(prevShowQuiz => prevShowQuiz = true)
  //   setCurrentQuestions(questions.map(question => {
  //     return {
  //       question: question.question,
  //       type: question.type,
  //       correct_answer: question.correct_answer,
  //       incorrect_answers: question.incorrect_answers
  //     }
  //   }))
  // }

  function showQuizBtn() {
    if (!showQuiz) {
      setShowQuiz((prevShowQuiz) => (prevShowQuiz = true));
      setCurrentQuestions(
        (prevcurrentQuestions) =>
        (prevcurrentQuestions = questions.map((item) => {
          console.log("quesion map", item);
          return {
            question: item.question,
            type: item.type,
            correct_answer: item.correct_answer,
            incorrect_answers: item.incorrect_answers,
            multiple_choices: shuffle([...item.incorrect_answers, item.correct_answer]),
          };
        }))
      );

    }

  }

  console.log("current question", currentQuestions);
  console.log("multi", currentQuestions[0].multiple_choices);

  function getValue(user_answered) {
    // const correctAnswersArray = currentQuestions.map(prev => prev.correct_answer)
    const selectedAnswersArray = selectedAnswers
    const scorecounts = []
    setScorecounts(scorecounts)
    setSelectedAnswers(prev => noduplicates([...prev, user_answered]))

  }

  function handleChange(event) {
    const correctAnswersArray = currentQuestions.map(prev => prev.correct_answer)
    console.log("changing", event.target.value)
  let answer = event.target.value
  if(correctAnswersArray.includes(answer)) {
    setScore(prev => prev + 1)
  }



  }




  console.log("get value answer", currentQuestions)


  ///map original question from api
  // const questionElements = questions.map((item, index) => {
  //    return <Question  question={item.question} number={index + 1} type={item.type} incorrect_answers={item.incorrect_answers }
  //   />
  // }
  // )
  const questionElements = currentQuestions.map((item, index) => {
    return (
      <Question
        key={item.id}
        question={item.question}
        number={index + 1}
        type={item.type}
        correct_answer={item.correct_answer}
        incorrect_answers={item.incorrect_answers}
        choices={item.multiple_choices}
        handleClick={getValue}
        handleChange={handleChange}
      />
    );
  });

  return (
    <div className="App">
      <main>
      
        {!showQuiz && <h1>Quiz bee</h1>}
        {!showQuiz && <p>Enjoy your quiz</p>}
        <button onClick={showQuizBtn}>Start Quiz</button>

        <form action="">
        {showQuiz && questionElements}
    
        <button type="submit" >submit</button>
        {currentQuestions.question}
        </form>
        {showQuiz && <p>Score is: {score}</p>}
        {<p>selected{selectedAnswers.join(",")} </p>}
        {scorecounts}
      </main>
    </div>
  );
}

export default App;
