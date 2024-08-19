import React from 'react';
import NavBar from './NavBar';
import Image from 'next/image';

interface HeaderProps {
  company: string;
  heading: string;
  content: string;
  timeline: string;
  role: string;
  tools: string;
}

const CSHero: React.FC<HeaderProps> = ({ company, heading, content, timeline, role, tools }) => {
  const prefix = '/kimjchir-portfolio';

  return (
    <div className='px-[3rem]'>
      <NavBar />
      <div>
      <div>
        <div className='flex justify-between py-[3.5rem] border-b border-black gap-[3rem]'>
          <div className='basis-2/3'>
            <div className='border-r border-black'>
              <Image src={`${prefix}/${company}`} alt="star" width={120} height={18} className='pb-[14px]' />
              <h1 className='text-[80px] font-[500] font-clashDisplay'>{heading}</h1>
              <p className='font-satoshi font-[400] text-[28px]'>{content}</p>
            </div>
          </div>
          <div className='basis-1/3 font-normal text-[15px] font-robotoMono'>
            <div>
              <p className='pb-[7px] text-customGray'>TIMELINE</p>
              <p className='pb-[24px]'>{timeline}</p>
            </div>
            <div>
              <p className='pb-[7px] text-customGray'>ROLE</p>
              <p className='pb-[24px]'>{role}</p>
            </div>
            <div>
              <p className='text-customGray pb-[7px]'>TOOLS</p>
              <p>{tools}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default CSHero;