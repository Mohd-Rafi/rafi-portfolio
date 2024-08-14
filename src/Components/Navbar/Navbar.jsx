import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Cross as Hamburger } from 'hamburger-react';
import { motion } from 'framer-motion';
import './Navbar.css';
import { Helmet } from 'react-helmet';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isOpen, setOpen] = useState(false);

  const navitems = [
    { name: 'Home', href: '#home', setmenu: 'home' },
    { name: 'About Me', href: '#about', setmenu: 'about' },
    { name: 'Services', href: '#service', setmenu: 'service' },
    { name: 'Portfolio', href: '#work', setmenu: 'work' },
    { name: 'Contact', href: '#contact', setmenu: 'contact' },
  ];
  const variants1 = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const variants2 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="z-20 w-screen h-20 fixed top-0 backdrop-blur-lg  flex items-center justify-around max-md:justify-between px-[10px] max-md:px-[5px]">
      <Helmet>
        <title>Muhammed Rafi Nellikuzhy Portfolio</title>
        <meta name="description" content="Muhammed Rafi Nellikuzhy Portfolio" />
        <meta name="keywords" content="Muhammed Rafi Nellikuzhy Portfolio" />
      </Helmet>
      <AnchorLink className="anchor-link" offset={50} href="#home">
        <img
          src="/assets/new-logo.png"
          alt=""
          className="w-32 h-12 max-md:w-24 max-md:h-9"
        />
      </AnchorLink>

      <ul
        variant={variants1}
        initial="visible"
        animate="hidden"
        className="nav-menu flex items-center justify-center gap-[100px] list-none max-md:hidden"
      >
        {navitems.map((item, i) => (
          <li key={i} className="flex flex-col gap-1">
            <AnchorLink className="anchor-link" offset={50} href={item.href}>
              <p onClick={() => setMenu(item.setmenu)}>{item.name}</p>
            </AnchorLink>
            {menu == item.setmenu ? (
              <img
                src="/assets/nav_underline.svg"
                alt=""
                className="flex m-auto"
              />
            ) : (
              ''
            )}
          </li>
        ))}
        {/* <li className="flex flex-col gap-1">
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu('about')}>About Me</p>
          </AnchorLink>
          {menu == 'about' ? (
            <img
              src="/assets/nav_underline.svg"
              alt=""
              className="flex m-auto"
            />
          ) : (
            ''
          )}
        </li>
        <li className="flex flex-col gap-1">
          <AnchorLink className="anchor-link" offset={50} href="#service">
            <p onClick={() => setMenu('service')}>Services</p>
          </AnchorLink>
          {menu == 'service' ? (
            <img
              src="/assets/nav_underline.svg"
              alt=""
              className="flex m-auto"
            />
          ) : (
            ''
          )}
        </li>
        <li className="flex flex-col gap-1">
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu('work')}>Portfolio</p>
          </AnchorLink>
          {menu == 'work' ? (
            <img
              src="/assets/nav_underline.svg"
              alt=""
              className="flex m-auto"
            />
          ) : (
            ''
          )}
        </li>
        <li className="flex flex-col gap-1">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu('contact')}>Contact</p>
          </AnchorLink>
          {menu == 'contact' ? (
            <img
              src="/assets/nav_underline.svg"
              alt=""
              className="flex m-auto"
            />
          ) : (
            ''
          )}
        </li> */}
      </ul>
      <div className="nav-connect bg-gradient-custom py-[20px] px-[40px] rounded-[50px] text-lg cursor-pointer hover:scale-105 hover:ease-in duration-200 max-xl:hidden">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <p className="line-clamp-1">Connect With Me</p>
        </AnchorLink>
      </div>
      <div className="md:hidden relative right-0 top-0 z-50 bg-[#3d222258] rounded">
        <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} />
      </div>

      <ul
        className={`nav-menu-mobile fixed top-0 right-0 w-64 h-screen bg-gradient-drawer rounded-tl-3xl rounded-bl-3xl transform transition-transform duration-200 ${
          isOpen ? ' translate-x-0' : 'translate-x-full'
        } flex flex-col items-start p-5 gap-5 space-y-4 z-10 md:hidden`}
      >
        {navitems.map((item, i) => (
          <li
            key={i}
            className="flex flex-col gap-1 hover:scale-105 ease-in duration-100 uppercase mt-14 relative left-5"
          >
            <AnchorLink
              className="anchor-link"
              offset={50}
              href={item.href}
              onClick={() => setOpen(!isOpen)}
            >
              <p>{item.name}</p>
            </AnchorLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
