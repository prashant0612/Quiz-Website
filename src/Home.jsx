import React from "react";
import Quiz from "/Quiz-img.png";
import Header from "./Header";
import Footer from "./Footer";
import QuizBox from "./QuizBox";
import { MdHome } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";



const Home = () => {
  return (
    <>
      <div className="w-full h-auto relative scroll-smooth">
        {/* CONTENT 1 */}
        <Header />
        <div className="w-full bg-cyan-500 flex justify-around flex-wrap items-center py-40 relative max-[768px]:justify-normal max-[768px]:py-10">
          <svg
            className="absolute bottom-0 w-full overflow-hidden "
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

          <div className="w-[25%] max-[768px]:w-full max-[768px]:flex max-[768px]:align-middle max-[768px]:justify-center">
            <img src={Quiz} alt="img" className="max-[768px]:w-[50%] " />
          </div>

          <div className="w-[25%] flex flex-col gap-4 items-center  max-[768px]:w-full max-[768px]:p-5">
            <h1 className="text-7xl font-semibold text-white text-shadow max-[768px]:hidden">
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
        <div className="w-full h-36 px-20 mb-20 max-[768px]:px-4">
          <div className="bg-cyan-500 h-36 rounded-2xl shadow-2xl relative max-[768px]:w-full">
            <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-2 border-yellow-400 p-2 rounded-lg max-[768px]:flex max-[768px]:flex-col max-[768px]:gap-3">
              <input
                type="text"
                placeholder="Enter Game Code"
                className="w-60 h-9 mr-2 placeholder:px-4 rounded-lg max-[768px]:mr-0"
              />
              <button className="bg-gray-600 h-9 px-5 rounded-lg text-white font-semibold">
                Join Game
              </button>
            </span>
          </div>
        </div>

        {/* CONTENT-3 */}
        <div className="px-4 "> 
          <p className="text-4xl mb-6">Chemistry</p>
          <div className="mb-10 px-20 h-60 w-full overflow-x-auto overflow-y-hidden max-[768px]:px-0 max-[768px]:h-auto">
            <div className="flex gap-10 flex-nowrap w-max">
              <QuizBox />
              <QuizBox />
              <QuizBox />
              <QuizBox />
            </div>
          </div>
        </div>

        <div className="w-full  bg-[#06b6d4] bottom-0 fixed p-3 z-50 text-3xl flex align-middle items-center justify-around min-[768px]:hidden">
          <MdHome className="text-white cursor-pointer"/>
          <p className=" w-10 h-10 bg-yellow-300 text-center rounded-full cursor-pointer">+</p>
          <FaCircleUser className="text-white cursor-pointer"/>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
