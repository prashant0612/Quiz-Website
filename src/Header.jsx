import React from "react";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { FaToggleOn } from "react-icons/fa";


const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-[#06b6d4] text-yellow-300 p-2 px-8 text-xl max-[768px]:justify-normal max-[768px]:text-sm max-[768px]:">
        <p className=" font-bold text-2xl max-[768px]:text-xl">QUIZARD</p>
        <ul className="flex items-center gap-5 font-semibold max-[768px]:gap-0">
          <li><FaToggleOn className="text-3xl"/></li>
          <li>Live Quiz</li>
          <li>Profile</li>
          <li>
            <select className="bg-transparent ">
              <option className="text-black">DEFAULT</option>
              <option className="text-black">CLASS 12</option>
              <option className="text-black">CLASS 11</option>
              <option className="text-black">CLASS 10</option>
              <option className="text-black">CLASS 9</option>
              <option className="text-black">CLASS 8</option>
              <option className="text-black">CLASS 7</option>
            </select>
          </li>
          <li>Logout</li>
          <li className=" ">
            <button className=" flex align-middle items-center gap-1 p-2 bg-[#00000092] rounded-3xl px-4">
              <TbCoinRupeeFilled className="text-3xl text-[#FFD700]"/>0
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
