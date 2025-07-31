import React, { useState } from "react";
import Timer from "./Timer";

function Quiz({ questions, currentQuestionIndex, handleAnswer, score, isFinished, restartQuiz }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const currentQuestion = questions[currentQuestionIndex];

  if (isFinished) {
    return (
      <div className="result-container">
        <h2>Test Bitti!</h2>
        <p>Toplam Doğru Cevap: {score} / {questions.length}</p>
        <button onClick={restartQuiz}>Tekrar Başlat</button>
      </div>
    );
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDisabled(true);
    const isCorrect = option === currentQuestion.answer;
    setPopupMessage(isCorrect ? "✅ Doğru!" : "❌ Yanlış!");

    setTimeout(() => {
      handleAnswer(isCorrect);
      setSelectedOption(null);
      setIsDisabled(false);
      setPopupMessage("");
    }, 1000);
  };

  return (
    <div className="quiz-container">
      {popupMessage && (
        <div className="popup-message">
          {popupMessage}
        </div>
      )}
      <h2>{currentQuestion.question}</h2>
      <div className="options-container">
        {currentQuestion.options.map((option, index) => {
          let className = "";
          if (selectedOption) {
            if (option === currentQuestion.answer) {
              className = "correct";
            } else if (option === selectedOption) {
              className = "incorrect";
            }
          }
          return (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              disabled={isDisabled}
              className={className}
            >
              {option}
            </button>
          );
        })}
      </div>

      <Timer
        timeLimit={60}
        onTimeUp={() => handleAnswer(false)}
        currentQuestionIndex={currentQuestionIndex}
      />

      <p>Soru {currentQuestionIndex + 1} / {questions.length}</p>
      <p>Skor: {score}</p>
    </div>
  );
}

export default Quiz;
