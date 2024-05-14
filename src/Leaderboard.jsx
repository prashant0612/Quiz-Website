import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaDiamond } from "react-icons/fa6";
import trophy from "/trophy.png";

import LeaderboardDetails from "./LeaderboardDetails";

const Leaderboard = ({ score, totalQuestions }) => {
  return (
    <>
      <div className="w-full h-screen bg-[#1b363e] mt-14">
        <Header />
        <div className="w-full flex justify-center flex-col align-middle items-center mt-10 ">
          <h1 className="text-3xl font-semibold mb-28 text-yellow-400 max-[768px]:mt-10">
            Leaderboard
          </h1>

          <div className="flex justify-center items-end w-[60%] relative py-20 max-[768px]:w-full">
            <div className="w-44 bg-[#2e4950] h-32 rounded-l-xl ">
              <img
                src="https://quizard.app/images/userImage.webp"
                alt="img"
                className="absolute w-20 left-[27%] top-20 rounded-full border-2 border-blue-400"
              />
              <span className="relative top-[1.3rem] left-[4.6rem]">
                <FaDiamond className="text-3xl text-cyan-300" />
                <p className="absolute top-0.5 left-2.5">2</p>
              </span>
              <div className="mt-7 font-bold">
                <p className="text-white text-center">User 2</p>
                <p className="text-cyan-300 text-center">60</p>
              </div>
            </div>

            <div className="w-44 bg-[#2e4950] h-32 rounded-t-xl mb-10">
              <img
                src="https://quizard.app/images/userImage.webp"
                alt="img"
                className="absolute w-24 left-[45%] top-6 rounded-full border-2 border-yellow-400"
              />
              <img
                src={trophy}
                alt="img"
                className="w-24 absolute -top-11 left-[45%]"
              />
              <span className="relative top-[1.3rem] left-[4.7rem] overflow-hidden">
                <FaDiamond className="text-4xl text-yellow-300 " />
                <a className="absolute top-0.5 left-2.5 text-2xl">1</a>
              </span>
              <div className="mt-7 font-bold">
                <p className="text-white text-center">Patel Bhai</p>
                <p className="text-yellow-300 text-center">100</p>
              </div>
            </div>

            <div className="w-44 bg-[#2e4950] h-32 rounded-r-xl relative">
              <img
                src="https://quizard.app/images/userImage.webp"
                alt="img"
                className="absolute w-20 left-[26%] top-[-40px] rounded-full border-2 border-green-400"
              />
              <span className="relative top-[1.3rem] left-[4.4rem]">
                <FaDiamond className="text-3xl text-green-400" />
                <p className="absolute top-0.5 left-2.5">3</p>
              </span>
              <div className="mt-7 font-bold">
                <p className="text-white text-center">USer 3</p>
                <p className="text-green-300 text-center">50</p>
              </div>
            </div>
          </div>
        </div>
        {/* <p className="text-lg mb-4">Your Score: {score} / {totalQuestions}</p> */}

        <div className="bg-[#1b363e] w-full flex items-center justify-center ">
          <div className="w-[60%] p-5 flex flex-col gap-5 bg-[#293437] rounded-t-2xl">
           
           <LeaderboardDetails rank={300} name={"Prashant Verma"} point={30}/>
           <LeaderboardDetails rank={4} name={"Rahul Raj"} point={300}/>
           <LeaderboardDetails rank={5} name={"Suraj Verma"} point={270}/>
           <LeaderboardDetails rank={6} name={"Ram Kumar"} point={250}/>
           <LeaderboardDetails rank={7} name={"Om Kumar"} point={240}/>
           <LeaderboardDetails rank={8} name={"Bob"} point={230}/>
           <LeaderboardDetails rank={9} name={"John"} point={210}/>
           <LeaderboardDetails rank={10} name={"Robot"} point={150}/>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Leaderboard;
