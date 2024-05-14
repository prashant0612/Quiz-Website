import React from "react";
import { Link } from "react-router-dom";

const QuizBox = () => {
  return (
    <>
      <div className="w-52 border-2 border-gray-500 h-60 rounded-xl relative max-[768px]:h-auto">
        <Link to="/startpage">
          <div className="relative">
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
        </Link>
      </div>
    </>
  );
};

export default QuizBox;
