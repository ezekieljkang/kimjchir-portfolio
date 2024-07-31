import React from 'react';
import Image from 'next/image';

const NovaImg = () => {
  const prefix = '/kimjchir-portfolio';

  return (
    <div className='pl-[3.5rem] border-l border-black h-full'>
      <div className='pb-[3.3rem] object-cover'>
        <Image src={`${prefix}/archflow.svg`} alt="architecture flow chart" width={80} height={80} className='w-full' />
      </div>
      <div className='pb-[3.3rem]'>
        <Image src={`${prefix}/novaimg1.svg`} alt="nova webpages" width={80} height={80} className='w-full' />
      </div>
      <div>
        <Image src={`${prefix}/nova.gif`} alt="architecture flow chart" width={80} height={80} className='w-full border-[1.75rem] border-black rounded-2xl' />
      </div>
    </div>
  );
}

export default NovaImg;