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
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Services', href: '#service' },
    { name: 'Portfolio', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];
  return (
    <div className="navbar flex items-center justify-between mx-[170px] my-[20px] max-lg:mx-[50px] max-sm:mx-2">
      <Helmet>
        <title>Muhammed Rafi Portfolio</title>
        <meta name="description" content="Muhammed Rafi Nellikuzhy Portfolio" />
        <meta name="keywords" content="Muhammed Rafi Nellikuzhy Portfolio" />
      </Helmet>
      <img
        src="/assets/new-logo.png"
        alt=""
        className="w-32 h-12 max-md:w-24 max-md:h-9"
      />

      <ul className="nav-menu flex items-center gap-[60px] list-none max-md:hidden">
        <li className="flex flex-col gap-1">
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setMenu('home')}>Home</p>
          </AnchorLink>
          {menu == 'home' ? (
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
        </li>
      </ul>
      <div className="nav-connect bg-gradient-custom py-[20px] px-[40px] rounded-[50px] text-lg  cursor-pointer hover:scale-105 hover:ease-in duration-200 max-xl:hidden">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <p className="line-clamp-1">Connect With Me</p>
        </AnchorLink>
      </div>

      <div className="md:hidden fixed right-2 top-2 z-20 bg-[#3d222258] rounded">
        <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} />
      </div>

      <ul
        className={`nav-menu-mobile fixed top-0 right-0 w-64 h-full bg-gradient-drawer rounded-tl-3xl rounded-bl-3xl transform transition-transform duration-200 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
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
