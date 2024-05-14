import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CountdownTimer = ({ onComplete, pause, key }) => {
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
  }, [pause, onComplete, key]);

  useEffect(() => {
    setSecondsLeft(60);
  }, [key]);

  const seconds = secondsLeft % 60;
  const percentage = (secondsLeft / 60) * 100;

  return (
    <div className="flex justify-center items-center align-middle mb-4" style={{ width: 70, height: 70 }}>
      <CircularProgressbar
        value={percentage}
        text={`${seconds < 10 ? `0${seconds}` : seconds}`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: "#d916d9",
          trailColor: "#d6d6d6",
          textSize: '35px',
          pathTransitionDuration: 0.5,
        })}
      />
    </div>
  );
};

export default CountdownTimer;
