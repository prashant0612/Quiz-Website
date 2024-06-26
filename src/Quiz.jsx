import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";
import Leaderboard from "./Leaderboard";
import { IoVolumeHighSharp } from "react-icons/io5";
import { TbCoinRupeeFilled } from "react-icons/tb";

const Quiz = () => {
  // STORE SELECTED OPTION FOR EACH QUESTION
  const [selectedOptions, setSelectedOptions] = useState(Array(15).fill(null));

  // TRACK CURRENT QUESTION INDEX
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // CONTROL THE TIMER WHEN OPTION IS CLICKED, THE TIMER WILL PAUSE
  const [pauseTimer, setPauseTimer] = useState(false);

  // RESET THE COUNTDOWN TIMER WHEN CHANGE THE KEY TO RE-RENDER THE COMPONENT
  const [countdownKey, setCountdownKey] = useState(0);

  // TO SHOW LEADERBOARD AFTER QUIZ IS COMPLETED
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  // SHOW SUBMIT BUTTON AFTER THE LAST QUESTION
  const [showSubmit, setShowSubmit] = useState(false);

  // TOTAL SCORE
  const [score, setScore] = useState(0);

  // TO SHOW ERROR MESSAGE WHEN NO OPTION IS SELECTED
  const [showError, setShowError] = useState(false);

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

  // Handle question option click
  const handleOptionClick = (questionIndex, optionIndex) => {
    if (selectedOptions[questionIndex] === null) {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[questionIndex] = optionIndex;
      setSelectedOptions(newSelectedOptions);
      setPauseTimer(true);
      setShowError(false); // Hide error message when an option is selected

      if (questionIndex === questions.length - 1) {
        setShowSubmit(true);
      }
    }
  };

  // Handle next question button click
  const handleNextClick = () => {
    if (selectedOptions[currentQuestionIndex] === null) {
      setShowError(true);
      return;
    }

    const correctIndex = questions[currentQuestionIndex].options.findIndex(
      (option) => option === questions[currentQuestionIndex].correctAnswer
    );
    if (selectedOptions[currentQuestionIndex] === correctIndex) {
      setScore(score + 1);
    }

    // If there are more questions, move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setPauseTimer(false);
      setCountdownKey((prevKey) => prevKey + 1);
      setShowError(false); // Reset error message for the next question
    }
  };

  // Handle quiz restart
  const handleRestart = () => {
    setSelectedOptions(Array(15).fill(null));
    setCurrentQuestionIndex(0);
    setPauseTimer(false);
    setCountdownKey((prevKey) => prevKey + 1);
    setShowLeaderboard(false);
    setShowSubmit(false);
    setScore(0);
    setShowError(false); // Reset error message on restart
  };

  // Get option color (red for wrong answer, green for right answer)
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
    <>
      {/* Initially leader will be false, and after the quiz is completed, at last there is a submit button, and when I click on the submit button it will become true */}
      {showLeaderboard ? (
        // When quiz is completed, show the leaderboard component
        <Leaderboard
          score={score}
          totalQuestions={questions.length}
          onRestart={handleRestart}
        />
      ) : (
        // Show quiz questions
        <div className="h-screen bg-[#1b363e] py-5">
          <div className="flex justify-between items-center px-5">
            <p className="text-yellow-300 text-xl">Solid State Quiz 1</p>
            <div className="flex items-center gap-3">
              <IoVolumeHighSharp className="text-white text-2xl" />
              <button className="flex align-middle items-center gap-1 p-2 bg-purple-500 rounded-3xl px-4 text-[#FFD700]">
                <TbCoinRupeeFilled className="text-3xl " />0
              </button>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center w-full bg-[#1b363e] max-[768px]:justify-normal max-[768px]:mt-10">
            <p className="text-center text-3xl mb-5 font-bold text-white max-[768px]:text-md max-[768px]:hidden">
              Solid State Quiz 1
            </p>
            <div className="w-1/2 h-3/4 bg-[#193037] p-8 rounded-xl max-[768px]:w-full text-white max-[768px]:h-auto">
              <div className="max-[768px]:flex flex justify-center flex-col align-middle items-center">
                <CountdownTimer
                  onComplete={handleNextClick}
                  pause={pauseTimer}
                  key={countdownKey}
                />
                <p className="mb-2">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </p>
              </div>

              {showError && (
                <p className="text-red-500 mb-4">
                  Please select an option before proceeding.
                </p>
              )}

              <p className="text-lg font-semibold mb-4">
                {questions[currentQuestionIndex].question}
              </p>

              <ul>
                {questions[currentQuestionIndex].options.map(
                  (option, optionIndex) => (
                    <li
                      key={optionIndex}
                      onClick={() =>
                        handleOptionClick(currentQuestionIndex, optionIndex)
                      }
                      className={`p-2 rounded-lg cursor-pointer mb-2 text-black ${getOptionColor(
                        currentQuestionIndex,
                        optionIndex
                      )}`}
                    >
                      {option}
                    </li>
                  )
                )}
              </ul>
              <div className="max-[768px]:hidden">
                {currentQuestionIndex < questions.length - 1 ? (
                  <div className="w-full flex justify-center">
                    <button
                      onClick={handleNextClick}
                      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                      Next Question
                    </button>
                  </div>
                ) : (
                  selectedOptions[currentQuestionIndex] !== null && (
                    <div className="w-full flex justify-center">
                      <button
                        onClick={() => setShowLeaderboard(true)}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
                      >
                        Submit
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Responsive version of Next/Submit button */}
            <div className="w-full min-[768px]:hidden mt-6">
              {currentQuestionIndex < questions.length - 1 ? (
                <div className="bg-blue-500 flex justify-between align-middle items-center mx-5 rounded-2xl">
                  <button
                    onClick={handleNextClick}
                    className="bg-[#306d7d] text-white rounded-lg w-full p-4 text-xl font-semibold"
                  >
                    Next Question
                  </button>
                </div>
              ) : (
                selectedOptions[currentQuestionIndex] !== null && (
                  <div className="bg-blue-500 flex justify-between align-middle items-center mx-5 rounded-2xl">
                    <button
                      onClick={() => setShowLeaderboard(true)}
                      className="bg-[#306d7d] text-white rounded-lg w-full p-4 text-xl font-semibold"
                    >
                      Submit
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
