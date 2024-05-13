import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#06b6d4] flex justify-between p-5 px-8 text-white">
        <p>Quizard © Copyright 2024 . All rights reserved.</p>
        <ul className="flex gap-8">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy & Cookies Policy</li>
            <li>Terms and Conditions</li>
            <li>Disclaimer</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
