// src/components/Navbar.jsx
import React from 'react';
import { NavbarMenu } from '../mockData/data';
import ResponsiveMenu from './ResponsiveMenu';
import { FaDumbbell } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import { PiShoppingCartThin } from 'react-icons/pi';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Ocultar navbar al hacer scroll hacia abajo
        setIsVisible(false);
      } else {
        // Mostrar navbar al hacer scroll hacia arriba
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/*<nav className='bg-red-300 w-full fixed -scroll-mr-9'>*/}
      <nav className={`fixed top-0 left-0 w-full transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} bg-white`}>
        <div className="container flex justify-between items-center py-6">
          {/* Logo section */}
          <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
            <FaDumbbell />
            <p>Disenios</p>
            <p className='text-secondary'>Decor</p>
          </div>
          {/* Menu section */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-6 text-gray-600'>
              {
                NavbarMenu.map( (item) => {
                  return(
                    <li key={item.id}>
                      <a href={item.link}
                       className='inline-block py-1 px-3 hover:text-primary font-semibold'
                      >{item.title}</a>
                    </li>
                  );
                })
              }
            </ul>
          </div>
          {/* Icons section */}
          <div className='flex items-center gap-4'>
            <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
              <CiSearch />
            </button>
            <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
              <PiShoppingCartThin />
            </button>
            <button className='hover:bg-primary hover:text-white rounded-md 
            text-primary font-semibold border-2 border-primary px-6 py-2 duration-200 hidden md:block'>Login</button>
          </div>
          {/* Mobile hamburger Menu section */}
          <div className='md:hidden' onClick={() => setOpen(!open)}>
            <MdMenu className='text-4xl'/>
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar section */}
      <ResponsiveMenu open={open}/>
    </>
  );
};

/*
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Ocultar navbar al hacer scroll hacia abajo
        setIsVisible(false);
      } else {
        // Mostrar navbar al hacer scroll hacia arriba
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} bg-blue-500`}>
      <div className="container mx-auto px-4 py-3 text-white">
        { Contenido de la Navbar }
        <h1>Navbar</h1>
      </div>
    </nav>
  );
}

export default Navbar;
*/

export default Navbar;