import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  const prefix = '/kimjchir-portfolio';

  return (
    <div className='px-[1.5rem] md:px-[3rem]'>
  <div className='border-b border-black md:flex md:justify-between pb-[3.5rem]'>
    <div className='flex-1 md:pr-[4rem] md:sticky md:top-5 h-full'>
      <h2 className='text-[40px] md:text-left md:text-[78px] font-[500] pb-[1rem] font-clashDisplay leading-[78px]'>FEATURED WORK</h2>
      <p className='font-satoshi font-light leading-7 text-[22px] pb-[2rem]'>
        Showcasing my most recent projects that blends creativity, strategy, and design.
      </p>
    </div>
    <div className='flex-2 md:border-l md:border-black md:pl-[2rem] lg:pl-[3rem]'>
      <div className='md:pb-[2.5rem]'>
        <Link href="/pages/PMC/NovaDesignSystem">
          <Image src={`${prefix}/DesignSystem.png`} alt="picture of a digital design system" width={80} height={80} className='w-full' />
        </Link>
        <p className='pt-[1rem] font-robotoMono text-[15px]'>DESIGN SYSTEM | PMC</p>
        <p className='pt-[.5rem] pb-[1.5rem] font-satoshi font-light text-[30px] leading-[40px]'>
          Built A Scalable Design System, Leading To A 40% Reduction In Redesign Cycle Times.
        </p>
      </div>
      <div className='md:flex md:justify-between md:border-t md:border-black md:pt-[2.5rem]'>
        <div className='flex-1 md:border-r md:border-black md:pr-[2rem]'>
          <Link href="/pages/PMC/DesignProcess">
          <Image src={`${prefix}/nova.gif`} alt="architecture flow chart" width={80} height={80} className='w-full rounded-xl' />
          </Link>
          <p className='pt-[1rem] font-robotoMono text-[15px]'>SITE REDESIGN | PMC</p>
          <p className='pt-[.5rem] pb-[1rem] font-satoshi font-light text-[24px] leading-[32px]'>
            Refined The Design Process, And Led Five Successful Redesigns.
          </p>
        </div>
        <div className='flex-1 md:pl-[2rem]'>
          <Image src={`${prefix}/macbook.png`} alt="a macbook computer" width={80} height={80} className='w-full' />
          <p className='pt-[1rem] font-robotoMono text-[15px]'>ECOMMERCE | PMC</p>
          <p className='pt-[.5rem] font-satoshi font-light text-[24px] leading-[32px]'>
            Standardizing The E-commerce Experience In Digital Publishing Brands.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Projects;