// ConfettiAnimation.js
import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

const ConfettiAnimation = () => {
  const [windowDimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [showConfetti, setShowConfetti] = useState(true);

  const detectSize = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
      document.body.style.overflow = "auto"; // Re-enable scrolling after confetti stops
    }, 3000); // Stop confetti after 5 seconds

    // Disable scrolling while confetti is active
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled if component unmounts
    };
  }, []);

  return (
    <>
      {showConfetti && (
        <ReactConfetti
          width={windowDimension.width}
          height={windowDimension.height}
          tweenDuration={1000}
        />
      )}
    </>
  );
};

export default ConfettiAnimation;
