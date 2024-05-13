import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";

const Quiz = () => {
  const [selectedOptions, setSelectedOptions] = useState(Array(2).fill(null));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [countdownKey, setCountdownKey] = useState(0);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question:
        "What is the smallest particle of an element that retains its chemical properties?",
      options: ["Atom", "Molecule", "Compound", "Ion"],
      correctAnswer: "Atom",
    },
    {
        question:
          "Which type of bond involves the sharing of electrons between atoms?",
        options: [
          "Ionic bond",
          "Covalent bond",
          "Metallic bond",
          "Hydrogen bond",
        ],
        correctAnswer: "Covalent bond",
      },
  
      {
        question:
          "What is the unit of measurement for the amount of substance in chemistry?",
        options: ["Mole", "Gram", "Liter", "Newton"],
        correctAnswer: "Mole",
      },
  
      {
        question: "Which gas is the most abundant in Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
        correctAnswer: "Nitrogen",
      },
  
      {
        question:
          "What is the process called when a substance changes from a gas to a liquid?",
        options: ["Condensation", "Evaporation", "Sublimation", "Melting"],
        correctAnswer: "Condensation",
      },
  
      {
        question:
          "What is the term for a substance that speeds up a chemical reaction without being consumed?",
        options: ["Catalyst", "Reactant", "Product", "Inhibitor"],
        correctAnswer: "Catalyst",
      },
  
      {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        correctAnswer: "Au",
      },
  
      {
        question: "What is the pH of pure water at room temperature?",
        options: ["5", "7", "9", "11"],
        correctAnswer: "7",
      },
  
      {
        question: "Which element has the chemical symbol 'Na'?",
        options: ["Sodium", "Nickel", "Nitrogen", "Neon"],
        correctAnswer: "Sodium",
      },
  
      {
        question: "What is the chemical formula for water?",
        options: ["CO2", "H2O", "CH4", "NaCl"],
        correctAnswer: "H2O",
      },
  
      {
        question:
          "What is the process called when a substance changes directly from a solid to a gas?",
        options: ["Condensation", "Evaporation", "Sublimation", "Melting"],
        correctAnswer: "Sublimation",
      },
  
      {
        question: "Which element is essential for combustion to occur?",
        options: ["Oxygen", "Nitrogen", "Carbon", "Hydrogen"],
        correctAnswer: "Oxygen",
      },
  
      {
        question: "What is the chemical formula for table salt?",
        options: ["HCl", "NaOH", "H2SO4", "NaCl"],
        correctAnswer: "NaCl",
      },
  
      {
        question:
          "What is the term for a substance that tastes sour and turns blue litmus paper red?",
        options: ["Acid", "Base", "Neutral", "Salt"],
        correctAnswer: "Acid",
      },
  
      {
        question: "Which gas is produced during photosynthesis?",
        options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
        correctAnswer: "Oxygen",
      },
  ];

  const handleOptionClick = (questionIndex, optionIndex) => {
    if (selectedOptions[questionIndex] === null) {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[questionIndex] = optionIndex;
      setSelectedOptions(newSelectedOptions);
    }
  };

  const handleNextClick = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setShowLeaderboard(true);
    } else {
      setSelectedOptions(Array(15).fill(null));
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCountdownKey((prevKey) => prevKey + 1); // Change the key to reset the countdown
    }
  };

  const handleLeaderboardClick = () => {
    setShowAnswers(true);
    calculateScore();
  };

  const calculateScore = () => {
    let scoreCount = 0;
    selectedOptions.forEach((optionIndex, index) => {
      const correctIndex = questions[index].options.findIndex(
        (option) => option === questions[index].correctAnswer
      );
      if (optionIndex === correctIndex) {
        scoreCount += 1;
      }
    });
    setScore(scoreCount);
  };

  const getOptionColor = (questionIndex, optionIndex) => {
    if (selectedOptions[questionIndex] !== null) {
      const correctAnswerIndex = questions[questionIndex].options.findIndex(
        (option) => option === questions[questionIndex].correctAnswer
      );
      if (optionIndex === selectedOptions[questionIndex]) {
        if (optionIndex === correctAnswerIndex) {
          return "bg-green-500";
        } else {
          return "bg-red-500";
        }
      } else if (optionIndex === correctAnswerIndex) {
        return "bg-green-500";
      }
    }
    return "bg-white";
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-cyan-600">
      <div className="w-1/2 h-3/4 bg-gray-200 p-8 rounded-xl">
        <CountdownTimer onComplete={handleNextClick} key={countdownKey} />
        <p className="text-lg font-semibold mb-4">
          {questions[currentQuestionIndex].question}
        </p>
        <p className="mb-2">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
        <ul>
          {questions[currentQuestionIndex].options.map(
            (option, optionIndex) => (
              <li
                key={optionIndex}
                onClick={() =>
                  handleOptionClick(currentQuestionIndex, optionIndex)
                }
                className={`p-2 rounded-lg cursor-pointer mb-2 ${getOptionColor(
                  currentQuestionIndex,
                  optionIndex
                )}`}
              >
                {option}
              </li>
            )
          )}
        </ul>
        {currentQuestionIndex < questions.length - 1 && (
          <div className="w-full flex justify-center">
            <button
              onClick={handleNextClick}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Next Question
            </button>
          </div>
        )}
        {showLeaderboard && (
          <div className="w-full flex justify-center">
            <button
              onClick={handleLeaderboardClick}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Leaderboard
            </button>
          </div>
        )}
        {showAnswers && (
          <div className="mt-4">
            <h2>Your Score: {score}</h2>
            <h2>Correct Answers:</h2>
            <ul>
              {questions.map((question, index) => (
                <li key={index}>
                  {question.question}: {question.correctAnswer}
                </li>
              ))}
            </ul>
            {/* You can add rendering of incorrect answers here if you have them */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
