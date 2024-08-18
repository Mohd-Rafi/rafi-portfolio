import React, { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Cross as Hamburger } from 'hamburger-react';
import './Navbar.css';
import { Helmet } from 'react-helmet';

const Navbar = () => {
  const navitems = [
    { name: 'Home', href: '#home', setmenu: 'home' },
    { name: 'About Me', href: '#about', setmenu: 'about' },
    { name: 'Services', href: '#service', setmenu: 'service' },
    { name: 'Portfolio', href: '#work', setmenu: 'work' },
    { name: 'Contact', href: '#contact', setmenu: 'contact' },
  ];

  const [menu, setMenu] = useState('home');
  const [isOpen, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setShowNavbar(true); // Show navbar on scroll up
      } else {
        setShowNavbar(false); // Hide navbar on scroll down
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`z-20 w-screen h-20 fixed top-0 backdrop-blur-lg flex items-center justify-around max-md:justify-between px-[10px] max-md:px-[5px] transition-transform duration-200 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <Helmet>
        <title>Muhammed Rafi Portfolio</title>
        <meta name="description" content="Muhammed Rafi Portfolio" />
        <meta name="keywords" content="Muhammed Rafi Portfolio" />
      </Helmet>
      <AnchorLink className="anchor-link" offset={50} href="#home">
        <img
          src="/assets/new-logo.png"
          alt=""
          className="w-32 h-12 max-md:w-24 max-md:h-9"
        />
      </AnchorLink>

      <ul className="nav-menu flex items-center justify-center gap-[100px] list-none max-md:hidden">
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
      </ul>
      <div className="nav-connect bg-gradient-custom py-[20px] px-[40px] rounded-[50px] text-lg cursor-pointer hover:scale-105 hover:ease-in duration-200 max-xl:hidden">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <p className="line-clamp-1">Connect With Me</p>
        </AnchorLink>
      </div>
      <div className="md:hidden relative right-3 top-0 z-50 bg-[#3d222258] rounded">
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
