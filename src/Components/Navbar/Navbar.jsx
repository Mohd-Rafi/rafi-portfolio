import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Fade as Hamburger } from 'hamburger-react';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="navbar flex items-center justify-between mx-[170px] my-[20px] max-lg:mx-[50px] max-sm:mx-2">
      <img src="/assets/new-logo.png" alt="" className="w-32 h-12" />

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
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      <ul
        className={`nav-menu-mobile fixed top-0 right-0 w-64 h-full bg-gradient-drawer transform transition-transform duration-200 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col items-start p-5 gap-5 space-y-4 z-10 md:hidden`}
      >
        <li className="flex flex-col gap-1 mt-14">
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#home"
            onClick={() => setOpen(false)}
          >
            <p>Home</p>
          </AnchorLink>
        </li>
        <li className="flex flex-col gap-1">
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#about"
            onClick={() => setOpen(false)}
          >
            <p>About Me</p>
          </AnchorLink>
        </li>
        <li className="flex flex-col gap-1">
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#service"
            onClick={() => setOpen(false)}
          >
            <p>Services</p>
          </AnchorLink>
        </li>
        <li className="flex flex-col gap-1">
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#work"
            onClick={() => setOpen(false)}
          >
            <p>Portfolio</p>
          </AnchorLink>
        </li>
        <li className="flex flex-col gap-1">
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
            onClick={() => setOpen(false)}
          >
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
