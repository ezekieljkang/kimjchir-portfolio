import React from 'react';
import NavBar from './NavBar';
import Image from 'next/image';

const Hero = () => {
  const prefix = '/kimjchir-portfolio';
  
  return (
    <div className='px-[1.5rem] md:px-[3rem]'>
      <NavBar />
      <div className='md:flex md:justify-between py-[1.5rem] border-b border-black gap-[5%]'>
        <div className='md:flex-1 flex flex-col justify-between'>
          <div>
            <p className='font-normal font-robotoMono text-[15px] pb-[1rem]'>
              PRODUCT/UX DESIGNER
            </p>
            <h1 className='font-medium text-5xl md:text-8xl pb-[1.5rem] md:pb-[1rem] font-clashDisplay'>
              Hi, I&apos;m Kim Chir from California.
            </h1>
            <p className='font-satoshi font-light leading-9 text-[22px] md:text-[28px] pb-[2rem]'>
              I&apos;ve been designing digital products with media and publishing brands since 2021. My passion is to make an impact in people&apos;s everyday lives.
            </p>
          </div>
          <Image src={`${prefix}/star.svg`} alt="star" width={80} height={80} />
        </div>
        <div className='md:flex-1 py-[2rem] flex items-center'>
          <div className='relative w-full'>
            <Image
              src={`${prefix}/profile.png`}
              alt='selfie of designer'
              width={750}
              height={640}
              className='w-full object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;