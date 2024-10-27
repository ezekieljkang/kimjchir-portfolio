'use client';

import React from 'react';
import NovaImg from './NovaImg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface HeaderProps {
  problemText: string;
  solutionText: string;
  resultText: string;
};


const CSContent: React.FC<HeaderProps> = ({ problemText, solutionText, resultText }) => {
  const prefix = '/kimjchir-portfolio';
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='px-[3rem]'>
      <div className='border-b border-black pb-[4rem]'>
            <Image 
              src={`${prefix}/casestudypic.png`}
              alt='pictures of redesigned websites'
              width={1564}
              height={935}
              className='w-full object-cover'
            />
      </div>
      <div className='flex justify-between gap-[6rem] pt-[4rem]'>
        <div className='basis-1/3'>
        <div>
          <div>
            <h1 className='font-[500] text-[45px] font-clashDisplay pb-[1rem]'>PROBLEM</h1>
            <p className='font-[300] text-[20px] font-satoshi pb-[4.25rem]'>{problemText}</p>
          </div>
          <div>
            <h1 className='font-[500] text-[45px] font-clashDisplay pb-[1rem]'>SOLUTION</h1>
            <p className='font-[300] text-[20px] font-satoshi whitespace-pre-line pb-[4.25rem]'>{solutionText}</p>
          </div>
          <div>
            <h1 className='font-[500] text-[45px] font-clashDisplay pb-[1rem]'>RESULT</h1>
            <p className='font-[300] text-[20px] font-satoshi pb-[4.25rem]'>{resultText}</p>
          </div>
        </div>
          <div className='font-robotoMono font-normal text-[15px]'>
            <p className='pb-[1rem] text-customGray'>REDESIGNED SITES WITH NOVA IN 2024:</p>
            <div>
              <div className='hover:underline hover:text-gray-400'>
                <a href='https://www.indiewire.com/' target='_blank'>indiewire.com</a>
              </div>
              <div className='hover:underline hover:text-gray-400'>
                <a href='https://stylecaster.com/' target='_blank'>stylecaster.com</a>
              </div>
              <div className='hover:underline hover:text-gray-400'>
                <a href='https://tvline.com/' target='_blank'>tvline.com</a>
              </div>
              <div className='hover:underline hover:text-gray-400'>
                <a href='https://www.artforum.com/' target='_blank'>artforum.com</a>
              </div>
              <div className='hover:underline hover:text-gray-400'>
                <a href='https://www.theflowspace.com/' target='_blank'>theflowspace.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className='basis-2/3'>
          <NovaImg />
        </div>
      </div>
      <div className='flex justify-between font-robotoMono font-normal text-[15px] pt-[6rem] pb-[4rem] border-b border-black'>
        <div className='flex items-center gap-[1rem]'>
          <button className="w-10 h-10 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${prefix}/leftarrow.svg)` }}></button>
          <p>ECOMMERCE</p>
        </div>
        <div className='flex items-center gap-[1rem]'>
            <Link 
              href="/pages/PMC/DesignProcess" 
              className='group flex items-center' 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              >
              <p className='group-hover:text-gray-400 group-hover:underline'>SITE REDESIGN</p>
              <button 
                className="w-10 h-10 bg-no-repeat bg-center bg-contain"
                style={{ 
                  backgroundImage: isHovered
                    ? `url(${prefix}/gray-right-arrow.svg)`
                    : `url(${prefix}/rightarrow.svg)` }}></button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default CSContent;