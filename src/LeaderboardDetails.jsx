import React from "react";
import { TbCoinRupeeFilled } from "react-icons/tb";

const LeaderboardDetails = (props) => {

    const{rank, name,point} = props;
    
  return (
    <>
      <div className="bg-[#2e4950] flex justify-around align-middle items-center rounded-xl px-5">
        <div className="text-white flex align-middle items-center w-[90%] p-2">
          <p className="font-bold w-[5%] text-center">{rank}</p>
          <div className="flex items-center ml-20">
            <img
              src="https://quizard.app/images/userImage.webp"
              alt="img"
              className="w-11"
            />
            <p className="ml-3 font-bold">{name}</p>
          </div>
        </div>
        <div className="w-[10%] flex items-center text-white max-[768px]:w-[20%]">
          <TbCoinRupeeFilled className="text-yellow-300 text-3xl " />
          <p className="ml-2 font-bold">{point}</p>
        </div>
      </div>
    </>
  );
};

export default LeaderboardDetails;
