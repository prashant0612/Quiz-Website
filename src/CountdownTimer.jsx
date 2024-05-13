import React, { useState, useEffect } from "react";

const CountdownTimer = ({ onComplete, pause }) => {
  const [secondsLeft, setSecondsLeft] = useState(60);

  useEffect(() => {
    let interval = null;

    if (!pause) {
      interval = setInterval(() => {
        setSecondsLeft((prevSeconds) => {
          if (prevSeconds === 0) {
            clearInterval(interval);
            onComplete();
            return prevSeconds;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [pause, onComplete]);

  useEffect(() => {
    if (pause) {
      setSecondsLeft(60); // Reset timer if paused
    }
  }, [pause]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="text-center mb-4">
      Time Left: {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default CountdownTimer;
