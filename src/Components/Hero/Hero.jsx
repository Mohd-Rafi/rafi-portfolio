import React from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div
      className="select-none hero flex items-center flex-col gap-5 max-lg:mt-10"
      id="home"
    >
      <img
        src="/assets/profile_pic.jpg"
        alt=""
        className="mt-[0px] max-w-[260px] max-h-[260px] rounded-full mb-5"
      />
      <h1 className="text-center w-[50%] text-5xl font-bold max-md:w-[80%] max-md:text-3xl">
        <span className="bg-gradient-custom bg-clip-text text-transparent mr-2">
          I'm Muhammed Rafi,
        </span>
        Frontend Developer
      </h1>
      <p className="w-[50%] text-center text-2xl leading-[40px] max-md:w-[80%]">
        I am MERN Stack Developer from Ernakulam, Kerala, India
      </p>
      <div className="hero-action flex items-center gap-[25px] text-xl font-bold">
        <div className="hero-connect py-[20px] px-[45px]  rounded-full bg-gradient-custom cursor-pointer hover:scale-105 ease-in duration-100 hover:border border-white max-md:px-5 max-md:text-lg max-md:py-4">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p>Connect with me</p>
          </AnchorLink>
        </div>
        <div className="hero-resume py-[20px] px-[45px] border border-white rounded-full cursor-pointer hover:border-violet-700 ease-in duration-200 max-md:px-5 max-md:text-lg max-md:py-4">
          <a href="/assets/resume.pdf" download={'Muhammed Rafi CV.pdf'}>
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
