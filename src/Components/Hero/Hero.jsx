import React, { useRef } from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end center'],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div
      ref={ref}
      className="pt-20 max-md:pt-1 select-none hero flex items-center flex-col gap-5 max-lg:mt-10"
      id="home"
    >
      <Helmet>
        <title>Muhammed Rafi Portfolio</title>
        <meta name="description" content="Muhammed Rafi Portfolio" />
        <meta name="keywords" content="Muhammed Rafi Portfolio" />
      </Helmet>
      <motion.img
        style={{ scale: yBg }}
        src="/assets/profile_pic.webp"
        alt=""
        loading="lazy"
        className=" mt-[10px] max-lg:mt-[50px] w-[260px] h-[260px] rounded-full mb-5 ease-in duration-200 max-md:hover:border-4 max-md:hover:scale-105  ring-orange-500 ring-4"
      />
      <motion.div
        className="text-center w-[50%] text-5xl font-bold max-md:w-[80%] max-md:text-3xl"
        initial={{ y: -40, opacity: 0, scale: 0.8 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>
          <span className="bg-gradient-custom bg-clip-text text-transparent mr-2">
            I'm Muhammed Rafi,
          </span>
          <span className="bg-gradient-text bg-clip-text text-transparent">
            MERN Stack Developer
          </span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-[50%] text-center text-2xl leading-[40px] max-md:w-[80%]"
      >
        Full Stack Developer Who Turns Code into Impactful User Experiences
      </motion.p>
      <motion.div
        initial={{ y: 40, scale: 0.8 }}
        whileInView={{ y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="hero-action flex items-center gap-[25px] text-xl font-bold"
      >
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
      </motion.div>
    </div>
  );
};

export default Hero;
