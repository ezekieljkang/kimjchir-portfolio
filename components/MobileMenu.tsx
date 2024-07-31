// MobileMenu.js
import React, { useState } from 'react';
import Tooltip from './ToolTip'; // Adjust the path as needed

const MobileMenu = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const email = 'KIMBERLYCHIR@GMAIL.COM';

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default link behavior
    navigator.clipboard.writeText(email).then(() => {
      setTooltipVisible(true);
      setTimeout(() => setTooltipVisible(false), 2000); // Hide tooltip after 2 seconds
    });
  };

  return (
    <div className='py-[1rem] px-[1.5rem] font-robotoMono relative'>
      <div className='py-[.75rem] border-b border-black relative'>
        <a
          href='#'
          onClick={handleEmailClick}
          className='hover:text-gray-400 cursor-pointer relative'
        >
          {email}
          <Tooltip text="Email copied!" visible={tooltipVisible} />
        </a>
      </div>
      <div className='py-[.75rem]'>
        <a
          href='https://www.linkedin.com/in/kimberlychir/'
          target='_blank'
          rel="noopener noreferrer"
          className='hover:text-gray-400'
        >
          LINKEDIN
        </a>
      </div>
      <div className='py-[1rem] text-center w-full'>
        <a 
          href='#' 
          className='py-[.5rem] px-[7.6rem] bg-black text-white rounded-lg'
          // download
        >
          RESUME
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
