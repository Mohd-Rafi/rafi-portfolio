import React from 'react';
import './About.css';
const About = () => {
  return (
    <div
      id="about"
      className="select-none about flex flex-col items-center justify-center gap-[80px] my-[80px] mx-[170px] max-md:80px max-md:my-12 max-md:mx-16 max-md:items-start"
    >
      <div className="about-title relative">
        <h2 className="px-[30px] text-5xl font-bold max-md:text-3xl max-md:px-0">
          About me
        </h2>
        <img
          src="/assets/theme_pattern.svg"
          alt=""
          className="absolute top-2 bottom-0 right-0 z-[-1] w-[150px] max-md:w-[50%]"
        />
      </div>
      <div className="about-section flex gap-[80px] max-md:flex-col">
        <div className="about-left">
          <img
            src="/assets/rafi_photo.jpg"
            alt=""
            className="rounded-lg h-[80%] max-md:h-[80%]"
          />
        </div>
        <div className="about-right flex flex-col gap-[80px]">
          <div className="about-para flex flex-col gap-3 text-xl max-md:text-justify">
            <p>
              I am Web Developer Fresher who completed 5 months course in MERN
              Stack Development
            </p>
            <p>
              My passion for web development is not only reflected in my
              extensive expreience but also in the enthusiasm and dedication
            </p>
          </div>
          <div className="about-skills flex flex-col gap-5">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr className="w-[60%]" />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr className="w-[60%]" />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr className="w-[40%]" />
            </div>
            <div className="about-skill">
              <p>Node Js</p>
              <hr className="w-[40%]" />
            </div>
            <div className="about-skill">
              <p>Mongo DB</p>
              <hr className="w-[50%]" />
            </div>
            <div className="about-skill">
              <p>Express Js</p>
              <hr className="w-[50%]" />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements flex w-full gap-4 justify-around mb-20 max-md:justify-between max-md:gap-3">
        <div className="about-achievement flex flex-col items-center gap-2  hover:scale-105 ease-in duration-150">
          <h1 className="text-4xl font-bold bg-gradient-custom bg-clip-text text-transparent max-md:text-3xl">
            6
          </h1>
          <p className="text-lg uppercase max-md:text-sm max-md:capitalize">
            Months of expreience
          </p>
        </div>
        <hr className="h-10 bg-white w-1 max-md:h-20" />
        <div className="about-achievement flex flex-col items-center gap-2 hover:scale-105 ease-in duration-150">
          <h1 className="text-4xl font-bold bg-gradient-custom bg-clip-text text-transparent max-md:text-3xl">
            2
          </h1>
          <p className="text-lg uppercase max-md:text-sm max-md:capitalize">
            Project Completed
          </p>
        </div>
        <hr className="h-10 bg-white w-1 max-md:h-20" />
        <div className="about-achievement flex flex-col items-center gap-2 hover:scale-105 ease-in duration-150">
          <h1 className="text-4xl font-bold bg-gradient-custom bg-clip-text text-transparent max-md:text-3xl">
            2+
          </h1>
          <p className="text-lg uppercase max-md:text-sm max-md:capitalize">
            Happy Clients
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
