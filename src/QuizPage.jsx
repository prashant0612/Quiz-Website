import React, { useState, useEffect } from "react";
import Quiz from "./Quiz";

//  Countdown component counts down from 3 to 0
const Countdown = ({ onComplete }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    // when count reaches 0, call onComplete
    if (count === 0) {
      clearInterval(interval);
      onComplete();
    }

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [count, onComplete]);

  return (
    <div className="bg-cyan-600 h-screen flex justify-center align-middle items-center text-center text-[8rem] font-semibold text-white max-[768px]:text-[3rem]">
      {count > 0 ? `Quiz Starts in ${count}` : ""}
    </div>
  );
};

// Main component for the quiz page
const QuizPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [showReady, setShowReady] = useState(true);

  useEffect(() => {
    // Timer to hide the "Ready" message after 1 second
    const readyTimer = setTimeout(() => {
      setShowReady(false);
    }, 1000);

    // Timer to show the quiz content after 4 seconds
    const quizTimer = setTimeout(() => {
      setShowContent(true);
    }, 4000);

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(readyTimer);
      clearTimeout(quizTimer);
    };
  }, []);

  return (
    <>
      {showReady && (
        <div className="bg-cyan-600 h-screen flex justify-center align-middle items-center text-[9rem] font-semibold text-white max-[768px]:text-[3.5rem]">
          Ready
        </div>
      )}

      {/* Show Countdown if "Ready" is hidden and quiz hasn't started */}
      {!showReady && !showContent && (
        <Countdown onComplete={() => setShowContent(true)} />
      )}

      {/* fir  Quiz component show after countdown is complete */}
      {showContent && (
        <div>
          <Quiz />
        </div>
      )}
    </>
  );
};

export default QuizPage;
