'use client';

import React from 'react';
import DesignProcessImg from './DesignProcessImg';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface HeaderProps {
  problemText: string;
  solutionText: string;
};


const CSContent2: React.FC<HeaderProps> = ({ problemText, solutionText}) => {
  const prefix = '/kimjchir-portfolio';
  const [isHoveredFirst, setIsHoveredFirst] = useState(false);
  const [isHoveredSecond, setIsHoveredSecond] = useState(false);


  return (
    <div className='px-[3rem]'>
      <div className='border-b border-black pb-[4rem] relative'>
            <Image 
              src={`${prefix}/macbook-bg.png`}
              alt='macbook with gif for screen'
              width={1564}
              height={935}
              className='w-full object-cover'
            />

          <div className="absolute top-[5.5rem] left-[26.25rem] flex justify-center items-start w-[950px]">
            <Image 
              src={`${prefix}/nova.gif`}
              alt="GIF screen content"
              width={950} // Adjust width as needed
              height={500} // Adjust height as needed
              className="object-cover rounded"
            />
          </div>
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
              <div>
                <ul className='font-[300] text-[20px] font-satoshi pb-[4.25rem] list-disc pl-[2rem]'>
                  <li><strong>Enhanced Brand Alignment:</strong> Websites are more aligned with brand needs and content strategies, allowing editors to better communicate to their target audience.</li>
                  <li><strong>Improved Cross-Departmental Efficiency:</strong> Streamlined communication and approval processes have minimized bottleneck, allowing for more coordinated progress across advertising, sales, marketing, engineering, and project management teams.</li>
                  <li><strong>Higher Stakeholder Satisfaction:</strong> Brand editors and other stakeholders feel more involved and heard about their site problems, leading to greater satisfaction with the final outcome and reducing post-launch revisions.</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
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
        </div>
        <div className='basis-2/3'>
          <DesignProcessImg />
        </div>
      </div>
      <div className='flex justify-between font-robotoMono font-normal text-[15px] pt-[6rem] pb-[4rem] border-b border-black'>
        <div>
          <Link 
              href="/pages/PMC/NovaDesignSystem" 
              className='group flex items-center gap-[1rem]' 
              onMouseEnter={() => setIsHoveredFirst(true)}
              onMouseLeave={() => setIsHoveredFirst(false)}
              >
              <button 
                className="w-10 h-10 bg-no-repeat bg-center bg-contain"
                style={{ 
                  backgroundImage: isHoveredFirst
                    ? `url(${prefix}/gray-left-arrow.svg)`
                    : `url(${prefix}/leftarrow.svg)` }}></button>
              <p className='group-hover:text-gray-400 group-hover:underline'>DESIGN SYSTEM</p>
            </Link>
        </div>
        <div>
          <Link 
              // Change href to ECOM when updated
              href="/pages/PMC/DesignProcess" 
              className='group flex items-center gap-[1rem]' 
              onMouseEnter={() => setIsHoveredSecond(true)}
              onMouseLeave={() => setIsHoveredSecond(false)}
              >
              <p className='group-hover:text-gray-400 group-hover:underline'>ECOM</p>
              <button 
                className="w-10 h-10 bg-no-repeat bg-center bg-contain"
                style={{ 
                  backgroundImage: isHoveredSecond
                    ? `url(${prefix}/gray-right-arrow.svg)`
                    : `url(${prefix}/rightarrow.svg)` }}></button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default CSContent2;