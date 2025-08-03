import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './About.css';
import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';
const About = () => {
  const items = [
    {
      name: 'HTML & CSS',
      className: 'w-[60%]',
    },
    {
      name: 'React Js',
      className: 'w-[60%]',
    },
    {
      name: 'JavaScript',
      className: 'w-[40%]',
    },
    {
      name: 'Node Js',
      className: 'w-[40%]',
    },
    {
      name: 'Mongo DB',
      className: 'w-[50%]',
    },
    {
      name: 'Express Js',
      className: 'w-[50%]',
    },
  ];
  const variants1 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        duration: 1,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const variants2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end center'],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [1.2, 0.6]);

  return (
    <div
      ref={ref}
      id="about"
      className="relative select-none about flex flex-col items-center justify-center gap-[80px] my-[80px] mx-[170px]  max-md:my-18 max-md:mx-8 max-md:items-start"
    >
      <Helmet>
        <title>Muhammed Rafi Portfolio</title>
        <meta name="description" content="Muhammed Rafi Portfolio" />
        <meta name="keywords" content="Muhammed Rafi Portfolio" />
      </Helmet>
      <div className="about-title relative">
        <h2 className="px-[30px] text-5xl font-bold max-md:text-3xl max-md:px-0">
          About Me
        </h2>
        <img
          src="/assets/theme_pattern.svg"
          alt=""
          className="absolute top-2 bottom-0 right-0 z-[-1] w-[150px] max-md:w-[50%]"
        />
      </div>
      <div className="about-section flex gap-[80px] max-md:flex-col">
        <div className="about-left overflow-hidden">
          <motion.img
            style={{ scale: yBg }}
            src="/assets/rafi_photo.jpg"
            alt=""
            className=" rounded-lg h-[80%] max-md:h-[80%] shadow-md shadow-pink-400"
          />
        </div>
        <div className="about-right flex flex-col gap-[80px]">
          <motion.div
            variants={variants1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="about-para flex flex-col gap-3 text-xl max-md:text-center"
          >
            <p
              variants={variants1}
              className="flex flex-wrap justify-start gap-[6px] max-md:justify-center"
            >
              I am Web Developer Fresher who completed 5 months course in MERN
              Stack Development`
            </p>

            <motion.p
              variants={variants1}
              className="mt-3 flex flex-wrap justify-start gap-[6px] max-md:justify-center"
            >
              {`My passion for web development is not only reflected in my extensive experience but also in the enthusiasm and dedication`
                .split(' ')
                .map((word, i) => (
                  <motion.span
                    key={i}
                    variants={variants2}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
            </motion.p>
          </motion.div>

          <motion.div
            variants={variants1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="about-skills flex flex-col gap-5"
          >
            {items.map((item, i) => (
              <motion.div variants={variants2} key={i} className="about-skill">
                <p>{item.name}</p>
                <hr className={item.className} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ x: -40 }}
        whileInView={{ x: 0 }}
        transition={{
          duration: 1,
        }}
        className="about-achievements flex w-full gap-4 justify-around mb-10 max-md:justify-between max-md:gap-3"
      >
        <div className="about-achievement flex flex-col items-center gap-2  hover:scale-105 ease-in duration-150">
          <h1 className="text-4xl font-bold bg-gradient-custom bg-clip-text text-transparent max-md:text-3xl">
            6
          </h1>
          <p className="text-lg uppercase text-center max-md:text-sm max-md:capitalize">
            Months of experience
          </p>
        </div>
        <hr className="h-10 bg-white w-1 max-md:h-20" />
        <div className="about-achievement flex flex-col items-center gap-2 hover:scale-105 ease-in duration-150">
          <h1 className="text-4xl font-bold bg-gradient-custom bg-clip-text text-transparent max-md:text-3xl">
            2
          </h1>
          <p className="text-lg uppercase text-center max-md:text-sm max-md:capitalize">
            Project Completed
          </p>
        </div>
        <hr className="h-10 bg-white w-1 max-md:h-20" />
        <div className="about-achievement flex flex-col items-center gap-2 hover:scale-105 ease-in duration-150">
          <h1 className="text-4xl font-bold bg-gradient-custom bg-clip-text text-transparent max-md:text-3xl">
            2+
          </h1>
          <p className="text-lg uppercase text-center max-md:text-sm max-md:capitalize">
            Happy Clients
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
