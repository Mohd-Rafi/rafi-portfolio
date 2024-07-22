import React from 'react';
import Services_data from '../../utils/services_data.js';
import './Services.css';
const Services = () => {
  return (
    <div
      id="service"
      className="services flex flex-col items-center justify-center gap-[80px] my-[80px] mx-[170px] max-md:items-start max-md:gap-16 max-md:my-[20px] max-md:mx-[70px] select-none"
    >
      <div className="services-title relative">
        <h1 className="text-6xl px-7 max-md:p-0 max-md:text-3xl">
          My Services
        </h1>
        <img
          src="/assets/theme_pattern.svg"
          alt=""
          className="absolute bottom-0 right-3 z-[-1] w-[50%] h-[80%]"
        />
      </div>
      <div className="service-container grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-lg:gap-4 max-sm:grid-cols-1">
        {Services_data.map((item, i) => (
          <div
            className="services-format flex flex-col justify-center gap-5 p-[60px] max-md:p-4 rounded-md border border-white hover:border hover:border-red-600  ease-in duration-300"
            key={i}
          >
            <h3 className="text-3xl font-bold">{item.s_no}</h3>
            <h2 className="text-2xl max-md:text-xl font-semibold bg-gradient-custom bg-clip-text text-transparent">
              {item.s_name}
            </h2>
            <p className="text-[#eee3e0] max-w-[300px] leading-10 max-md:text-sm">
              {item.s_desc}
            </p>
            <div className="services-readmore flex gap-5 items-center mt-5 hover:scale-105 ease-in duration-100 max-md:text-sm">
              <p>Read More</p>
              <img src="/assets/arrow_icon.svg" alt="" className="max-md:w-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
