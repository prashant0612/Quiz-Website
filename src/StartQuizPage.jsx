import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";

import Header from "./Header";
import Footer from "./Footer";

// StartQuizPage component
const StartQuizPage = () => {
  const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal
  const [selectedMode, setSelectedMode] = useState(null); // State to keep track of the selected quiz mode

  // Function to handle "Play" button click and show the modal
  const handlePlayClick = () => {
    setShowModal(true);
  };

  // Function to handle mode selection and hide the modal
  const handleModeSelection = (mode) => {
    setSelectedMode(mode);
    setShowModal(false);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="">
        <Header />
        <div className="bg-[#100422] text-white h-screen flex flex-col justify-center items-center gap-8">
          <img
            src="https://quizard.app/images/quiz.png"
            alt="img"
            className="w-48 max-[768px]:w-28"
          />
          <h1 className="text-3xl max-[768px]:text-center">
            Solid State Quiz 1
          </h1>
          <p className="max-[768px]:text-center">
            Answer these simple questions correctly and earn coins
          </p>
          <p className="text-xl">
            Difficulty Level:{" "}
            <span className="bg-white text-yellow-600 px-2 p-2 font-semibold rounded-lg">
              Medium
            </span>
          </p>
          <p className="flex items-center gap-2 text-xl">
            <FaQuestionCircle className="text-yellow-300" />
            15 Questions
          </p>
          <div className="flex flex-col gap-4">
            <button
              onClick={handlePlayClick}
              className="bg-cyan-500 px-7 p-1 rounded-2xl text-2xl text-center"
            >
              Play
            </button>
            <button className="bg-red-500 px-7 p-1 rounded-2xl text-2xl">
              Play with Friends
            </button>
          </div>
        </div>
        <div className="max-[768px]:hidden">
          <Footer />
        </div>

        {/* Bottom navigation bar for small screens */}
        <div className="w-full bg-[#06b6d4] bottom-0 fixed p-3 z-50 text-3xl flex align-middle items-center justify-around min-[768px]:hidden">
          <MdHome className="text-white cursor-pointer" />
          <p className="w-10 h-10 bg-yellow-300 text-center rounded-full cursor-pointer">
            +
          </p>
          <FaCircleUser className="text-white cursor-pointer" />
        </div>
      </div>

      {/* Modal for selecting quiz mode */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg relative">
            <h2 className="text-2xl mb-4">Select Mode</h2>
            <div className="flex justify-between">
              <Link to="/startpage/quizpage">
                <img
                  src="https://quizard.app/images/normal.png"
                  alt="img"
                  className="w-32"
                />
                <button
                  onClick={() => handleModeSelection("normal")}
                  className="px-4 py-1 rounded-lg mr-4"
                >
                  Normal Mode
                </button>
              </Link>
              <Link to="/startpage/quizpage">
                <img
                  src="https://quizard.app/images/dinomode.png"
                  alt="img"
                  className="w-32"
                />
                <button
                  onClick={() => handleModeSelection("dyno")}
                  className="px-4 py-1 rounded-lg"
                >
                  Dyno Mode
                </button>
              </Link>
            </div>
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default StartQuizPage;
