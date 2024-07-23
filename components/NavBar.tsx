'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import MenuIcon from './MenuIcon';

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleEmailClick = () => {
    navigator.clipboard.writeText('KIMBERLYJCHIR@GMAIL.COM');
    alert('email copied to clipboard!');
  };

  return (
    <nav className='flex justify-between'>
      <div className='font-clashDisplay'>
        KC
      </div>
      <div className='hidden md:flex'>
          <a
            href='#'
            onClick={handleEmailClick}
            className='hover:text-gray-400 cursor-pointer'
          >KIMBERLYJCHIR@GMAIL.COM</a>
          <a
            href='https://www.linkedin.com/in/kimberlychir/'
            target='_blank'
            rel="noopener noreferrer"
            className='hover:text-gray-400'
          >LINKEDIN</a>
          <a 
            href="#"
            // download
            className='hover:text-gray-400'
          >
            <button>
              RESUME
            </button>
          </a>
      </div>
      <div>
        <MenuIcon />
      </div>
    </nav>
  );
}

export default NavBar;