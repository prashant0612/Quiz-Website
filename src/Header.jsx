import React from "react";
import { useState } from "react";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa"; // Import close icon

import { FaToggleOn } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center bg-[#06b6d4] text-yellow-300 p-2 px-8 text-xl max-[768px]:text-sm max-[768px]:px-2 fixed z-30 w-full top-0">
        <div className="min-[768px]:hidden text-xl font-semibold">
          {/* Hamburger Menu Button */}
          <button onClick={toggleMenu} className="text-black text-2xl p-2">
            <RxHamburgerMenu />
          </button>

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full bg-[#06b6d4] text-yellow-400 transform z-50 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out w-52`}
          >
            {/* Close Button */}
            <button onClick={toggleMenu} className="p-4 text-2xl">
              <FaTimes className="text-white"/>
            </button>

            {/* Menu Items */}
            <ul className="mt-10 space-y-4 px-4">
              <select className="cursor-pointer bg-transparent">
                <option>Default</option>
                <option>Class 12</option>
                <option>Class 11</option>
                <option>Class 10</option>
                <option>Class 9</option>
              </select>
              <li className="cursor-pointer">Profile</li>
              <li className="cursor-pointer">Live Quiz</li>
              <li className="cursor-pointer">LogOut</li>
              <FaToggleOn className="text-3xl"/>
            </ul>
          </div>
        </div>

        <p className=" font-bold text-2xl max-[768px]:text-xl max-[768px]:text-3xl">
          QUIZARD
        </p>
        <ul className="flex items-center gap-5 font-semibold max-[768px]:gap-0 ">
          <li className="max-[768px]:hidden">
            <FaToggleOn className="text-3xl" />
          </li>
          <li className="max-[768px]:hidden">Live Quiz</li>
          <li className="max-[768px]:hidden">Profile</li>
          <li className="max-[768px]:hidden">
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
          <li className="max-[768px]:hidden">Logout</li>
          <li className=" ">
            <button className=" flex align-middle items-center gap-1 p-2 bg-[#00000092] rounded-3xl px-4">
              <TbCoinRupeeFilled className="text-3xl text-[#FFD700]" />0
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
