import { useState, useEffect } from "react";
import "./App.css";
import Question from "./Question";
import { nanoid } from "nanoid";

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

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((response) => response.json())
      .then((data) => setQuestions(data.results));
  }, []);

  console.log("tom", questions);
  console.log("hey", questions[1]);

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
            multiple_choices: [...item.incorrect_answers, item.correct_answer],
          };
        }))
    );
  
  }
  console.log("current question", currentQuestions);
  console.log("multi", currentQuestions[0].multiple_choices);



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
      />
    );
  });

  return (
    <div className="App">
      <main>
        {!showQuiz && <h1>Quiz bee</h1>}
        {!showQuiz && <p>Enjoy your quiz</p>}
        {showQuiz && questionElements}

        <button onClick={showQuizBtn}>Start Quiz</button>
        {currentQuestions.question}
      </main>
    </div>
  );
}

export default App;
