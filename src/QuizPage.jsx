import React, { useState, useEffect } from "react";
import Quiz from "./Quiz";

const Countdown = ({ onComplete }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(interval);
      onComplete();
    }

    return () => clearInterval(interval);
  }, [count, onComplete]);

  return (
    <>
      <div className="bg-cyan-600 h-screen flex justify-center align-middle items-center text-center text-[8rem] font-semibold text-white">
        {count > 0 ? `Quiz Starts in ${count}` : count === 1 ? "Go!" : ""}
      </div>
    </>
  );
};

const QuizPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [showReady, setShowReady] = useState(true);

  useEffect(() => {
    const readyTimer = setTimeout(() => {
      setShowReady(false);
    }, 1000);

    const quizTimer = setTimeout(() => {
      setShowContent(true);
    }, 4000); // Ready message duration (1s) + Countdown duration (3s)

    return () => {
      clearTimeout(readyTimer);
      clearTimeout(quizTimer);
    };
  }, []);

  return (
    <>
      {showReady && (
        <div className="bg-cyan-600 h-screen flex justify-center align-middle items-center text-[9rem] font-semibold text-white">
          Ready
        </div>
      )}
      {!showReady && !showContent && (
        <Countdown onComplete={() => setShowContent(true)} />
      )}
      {showContent && (
        <div>
          {/* Your quiz content goes here */}
          <Quiz/>
        </div>
      )}
    </>
  );
};

export default QuizPage;
