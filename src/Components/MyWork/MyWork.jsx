import React from 'react';
import mywork_data from '../../utils/mywork_data';
import './MyWork.css';
import { Slide } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';
const MyWork = () => {
  return (
    <div
      id="work"
      className="select-none mt-24 my-work flex flex-col items-center justify-center gap-20 my-10 mx-[170px] max-md:mx-8 max-md:items-start"
    >
      <Helmet>
        <title>Muhammed Rafi Portfolio</title>
        <meta name="description" content="Muhammed Rafi Portfolio" />
        <meta name="keywords" content="Muhammed Rafi Portfolio" />
      </Helmet>
      <div className="mywork-title relative">
        <h1 className="text-5xl px-7 font-bold max-md:px-2 max-md:text-3xl">
          My Latest Work
        </h1>
        <img
          src="/assets/theme_pattern.svg"
          alt=""
          className="absolute bottom-0 right-0 z-[-1] h-full"
        />
      </div>
      <div className="my-work-container grid grid-cols-3 gap-10 max-md:grid-cols-2 max-md:gap-5 max-sm:grid-cols-1">
        {mywork_data.map((item, i) => (
          <img
            src={item.w_img}
            key={i}
            className="w-[419px] h-[260px] object-cover ease-in duration-100 cursor-pointer hover:scale-105 rounded-lg hover:border-4 hover:border-violet-500 max-md:h-full max-md:object-contain"
          />
        ))}
      </div>
      <Slide direction="up" className="max-md:mx-auto">
        <div className="flex gap-5 border-2 border-white py-4 px-6 rounded-full hover:border-pink-700 ease-in duration-200 max-md:text-sm ">
          <p>Show More</p>
          <img
            src="/assets/arrow_icon.svg"
            alt=""
            className="hover:scale-105 max-md:w-5"
          />
        </div>
      </Slide>
    </div>
  );
};

export default MyWork;
