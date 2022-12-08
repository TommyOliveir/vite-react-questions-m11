import { useState, useEffect } from "react";
import "./App.css";
import Question from "./Question";
import { nanoid } from "nanoid";
import { shuffle, noduplicates } from "./utils.js";

function App() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
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
  const [currentAswers, setCurrentAswers] = useState([]);
  const [finalAswers, setFinalAswers] = useState()


  console.log("tom", questions);
  console.log("hey", questions[1]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((response) => response.json())
      .then((data) => setQuestions(data.results));
  }, []);

  function showQuizBtn() {
    if (!showQuiz) {
      setShowQuiz((prevShowQuiz) => (prevShowQuiz = true));
      setCurrentQuestions(
        (prevcurrentQuestions) =>
        (prevcurrentQuestions = questions.map((item) => {
          console.log("question map", item);
          return  {
            question: item.question,
            type: item.type,
            correct_answer: item.correct_answer,
            incorrect_answers: item.incorrect_answers,
            multiple_choices: shuffle([
              ...item.incorrect_answers,
              item.correct_answer,
            ]),
          };
        }))
      );
    }
  }

  function handleClick(answer) {
    currentQuestions.map(item => {
      if (answer == item.correct_answer) {
        setScore(prev => prev + 1)
      }
      if( item.multiple_choices.includes(answer)) {
        console.log("dectedted", item.multiple_choices)
        item.multiple_choices.map(item => {
          return document.getElementById(item).setAttribute('disabled', '')
        })
      }
     
    }
    )

   

    //btn disable
    const element = document.getElementById(answer);
    element.setAttribute('disabled', '');

   
 
  }





  console.log("current question", currentQuestions);
  console.log("multi", currentQuestions[0].multiple_choices);
  console.log("get value answer", currentQuestions);

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
        handleClick={handleClick}


      />
    );
  });

  return (
    <div className="App">
      <main>
        {!showQuiz && <h1>Quiz bee</h1>}
        {!showQuiz && <p>Enjoy your quiz</p>}
        <button onClick={showQuizBtn}>Start Quiz</button>

        <form>
          {showQuiz && questionElements}
          {currentAswers}
          <button type="button" >
            {" "}
            submit
          </button>
        </form>
        {score}
        {finalAswers}
      </main>
    </div>
  );
}

export default App;
