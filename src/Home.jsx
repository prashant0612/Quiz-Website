import React from "react";
import Quiz from "../public/Quiz-img.png";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto ">
        {/* CONTENT 1 */}
        <Header />
        <div className="w-full bg-cyan-500 flex justify-around items-center py-40 relative ">
          <svg
            className="absolute bottom-0 w-full overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-300 0 950 270"
            style={{ pointerEvents: "none" }}
          >
            <path
              className="text-white"
              d="M-314,279 C105,100 400,364 812,267"
              fill="none"
              stroke="currentColor"
              strokeWidth="120"
              strokeLinecap="round"
            />
          </svg>

          <div className="w-[25%]">
            <img src={Quiz} alt="img" />
          </div>

          <div className="w-[25%] flex flex-col gap-4 items-center">
            <h1 className="text-7xl font-semibold text-white text-shadow">
              Play Quiz
            </h1>
            <p className="text-white text-lg">
              Welcome to Quizard, where knowledge meets fun! Unleash your
              intellect with our captivating quizzes spanning various topics.
              Challenge yourself, compete with friends, and embark on a journey
              of discovery. Engage in brain-teasing trivia that entertains and
              educates. Quizard - Where every question unlocks a world of
              possibilities!
            </p>
            <button className="bg-[#FFD700] px-6 py-2 rounded-md cursor-pointer">
              Start Quiz
            </button>
          </div>
        </div>

        {/* CONTENT-2 */}
        <div className="w-full h-36 px-20 mb-20">
          <div className="bg-cyan-500 h-36 rounded-2xl shadow-2xl relative">
            <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-2 border-yellow-400 p-2 rounded-lg">
              <input
                type="text"
                placeholder="Enter Game Code"
                className="w-60 h-9 mr-2 placeholder:px-4 rounded-lg"
              />
              <button className="bg-gray-600 h-9 px-5 rounded-lg text-white font-semibold">
                Join Game
              </button>
            </span>
          </div>
        </div>

        {/* CONTENT-3 */}
        <div className="mb-10 px-20">
          <p className="text-4xl mb-6">Chemistry</p>
          <Link to="/startpage">
            <div className="w-[20%]  border-2 border-gray-500 h-60 rounded-xl relative">
              <div  className="relative">
                <img
                  src="https://media.istockphoto.com/id/1616906708/vector/vector-speech-bubble-with-quiz-time-words-trendy-text-balloon-with-geometric-grapic-shape.jpg?s=612x612&w=0&k=20&c=3-qsji8Y5QSuShaMi6cqONlVZ3womknA5CiJ4PCeZEI="
                  alt="imgs"
                  className="border-gray-400 border-b-2 rounded-xl h-full w-full"
                />
                <div className="absolute bottom-2 w-full flex justify-between px-4">
                  <button className="bg-black text-white rounded-md px-1">
                    10 Qs
                  </button>
                  <button className="bg-black text-white rounded-md px-1">
                    816 Plays
                  </button>
                </div>
              </div>
              <div>
                <p className="px-2">Solid State Quiz 1</p>
              </div>
            </div>
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
