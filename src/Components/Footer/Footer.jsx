import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer my-[50px] mx-[170px] flex flex-col gap-7 max-md:mx-10">
      <div className="footer-top flex justify-between max-xl:flex-col max-xl:gap-10">
        <div className="footer-top-left">
          <img src="/assets/new-logo.png" alt="" className="h-12 max-md:h-8" />
          <p className="text-lg max-md:text-sm max-lg:mt-5">
            Full Stack Developer | Creating Seamless Web Experiences |
            Proficient in JavaScript, React, Node.js, and MongoDB
          </p>
        </div>
        <div className="footer-top-right flex items-center gap-9 max-lg:flex-col">
          <div className="footer-email-input flex gap-7 py-4 px-7 rounded-full bg-[#32323B] pr-20 hover:border-2 hover:border-white ease-in ">
            <img src="/assets/user_icon.svg" alt="" />
            <input
              type="text"
              placeholder="Enter your email"
              className="outline-none border-none bg-transparent hover:border-2 hover:border-white max-lg:w-[90%]"
            />
          </div>
          <div className="footer-subscribe py-4 px-12 rounded-full bg-gradient-custom cursor-pointer ease-in duration-300 hover:scale-110">
            Subscribe
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom flex w-full justify-between text-base max-md:w-full max-lg:flex-col max-md:gap-3 select-none">
        <p className="footer-bottom-left max-lg:mx-auto">
          2023 Muhammed Rafi. All rights reserved
        </p>
        <div className="footer-bottom-right flex gap-12 mb-12 max-md:w-full max-md:text-sm max-lg:gap-5 max-lg:mt-5">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
