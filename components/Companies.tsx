'use client';

import React from 'react';
import CompaniesCarousel from './CompaniesCarousel';

const Companies = () => {
  return (
    <div className="px-[1.5rem] md:px-[3rem] pb-[3.5rem]">
      <div className='border-b border-black md:flex lg:py-[1.5rem]'>
        <div className='flex justify-center items-center md:border-r md:border-black md:pr-[1rem] lg:py-[1.5rem]'>
            <p className='font-robotoMono font-normal text-center'>BRANDS I&apos;VE WORKED WITH</p>
        </div>
        <div className='flex items-center whitespace-nowrap overflow-hidden pb-[1rem] md:pb-0 lg:mx-auto'>
          <CompaniesCarousel />
        </div>
      </div>
    </div>
  );
}

export default Companies;
