import React from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Fade, Slide } from 'react-awesome-reveal';

const Hero = () => {
  return (
    <div
      className="select-none hero flex items-center flex-col gap-5 max-lg:mt-10"
      id="home"
    >
      <img
        src="/assets/profile_pic.jpg"
        alt=""
        className="mt-[0px] max-w-[260px] max-h-[260px] rounded-full mb-5 ease-in duration-200 max-md:hover:border-4 max-md:hover:scale-105 border-amber-600"
      />
      <Slide
        direction="down"
        triggerOnce
        className="text-center w-[50%] text-5xl font-bold max-md:w-[80%] max-md:text-3xl"
        duration={1200}
      >
        <h1>
          <span className="bg-gradient-custom bg-clip-text text-transparent mr-2">
            I'm Muhammed Rafi,
          </span>
          <span className="bg-gradient-text bg-clip-text text-transparent">
            MERN Stack Developer
          </span>
        </h1>
      </Slide>

      <p className="w-[50%] text-center text-2xl leading-[40px] max-md:w-[80%]">
        Full Stack Developer Who Turns Code into Impactful User Experiences
      </p>
      <div className="hero-action flex items-center gap-[25px] text-xl font-bold">
        <Slide direction="up">
          <div className="hero-connect py-[20px] px-[45px]  rounded-full bg-gradient-custom cursor-pointer hover:scale-105 ease-in duration-100 hover:border border-white max-md:px-5 max-md:text-lg max-md:py-4">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              <p>Connect with me</p>
            </AnchorLink>
          </div>
        </Slide>
        <Slide direction="up">
          <div className="hero-resume py-[20px] px-[45px] border border-white rounded-full cursor-pointer hover:border-violet-700 ease-in duration-200 max-md:px-5 max-md:text-lg max-md:py-4">
            <a href="/assets/resume.pdf" download={'Muhammed Rafi CV.pdf'}>
              My resume
            </a>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Hero;
