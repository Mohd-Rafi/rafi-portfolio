import React from 'react';
import Services_data from '../../utils/services_data.js';
import { motion } from 'framer-motion';
import './Services.css';
import { Helmet } from 'react-helmet';
const Services = () => {
  const variants1 = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const variants2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div
      id="service"
      className="services flex flex-col items-center justify-center gap-[80px] my-[80px] mx-[170px] max-md:items-start max-md:gap-16 max-md:my-[20px] max-md:mx-8 select-none"
    >
      <Helmet>
        <title>Muhammed Rafi Portfolio</title>
        <meta name="description" content="Muhammed Rafi Nellikuzhy Portfolio" />
        <meta name="keywords" content="Muhammed Rafi Nellikuzhy Portfolio" />
      </Helmet>
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
      <motion.div
        variants={variants1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="service-container grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-lg:gap-4 max-sm:grid-cols-1"
      >
        {Services_data.map((item, i) => (
          <motion.div
            variants={variants2}
            className="services-format flex flex-col justify-center gap-5 p-[40px] max-md:p-4 rounded-md border border-white hover:border hover:border-red-600  ease-in duration-300"
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
