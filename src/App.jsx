import React, { useState, useEffect } from "react";
import { getShuffledQuestions } from "./data/Questions";
import Quiz from "./components/Quiz";
import "./App.css";


function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const shuffled = getShuffledQuestions();
    setQuestions(shuffled);
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setQuestions(getShuffledQuestions());
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="app-container">
      <h1 className="quiz-title">⚡ React Quiz ⚡</h1>
      {questions.length > 0 && (
        <Quiz
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          handleAnswer={handleAnswer}
          score={score}
          isFinished={isFinished}
          restartQuiz={restartQuiz}
        />
      )}
    </div>
  );
}

export default App;
