import React, { useState, useEffect } from "react";

function Timer({ timeLimit, onTimeUp, currentQuestionIndex }) {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    setTimeLeft(timeLimit);
  }, [currentQuestionIndex, timeLimit]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  return (
    <div className="timer-container">
      <p>Kalan Süre: {timeLeft} sn</p>
    </div>
  );
}

export default Timer;
