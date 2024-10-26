import React from 'react';
import Image from 'next/image';

const NovaImg = () => {
  const prefix = '/kimjchir-portfolio';

  return (
    <div className='pl-[3.5rem] border-l border-black h-full'>
      <div className='pb-[3.3rem] object-cover'>
        <Image src={`${prefix}/nova-img.png`} alt="architecture flow chart" width={80} height={80} className='w-full' />
      </div>
      <div className='pb-[3.3rem]'>
        <Image src={`${prefix}/nova-img2.png`} alt="nova webpages" width={80} height={80} className='w-full' />
      </div>
      <div className='pb-[3.3rem]'>
        <Image src={`${prefix}/nova-img3.png`} alt="nova webpages" width={80} height={80} className='w-full' />
      </div>
      <div className='pb-[3.3rem]'>
        <Image src={`${prefix}/nova-img4.png`} alt="nova webpages" width={80} height={80} className='w-full' />
      </div>
      <div className='pb-[3.3rem]'>
        <Image src={`${prefix}/nova-img5.png`} alt="nova webpages" width={80} height={80} className='w-full' />
      </div>
      <div>
        <div className='w-full border-[1.75rem] border-black rounded-2xl' >
          <p>Results</p>
          <Image src={`${prefix}/nova.gif`} alt="architecture flow chart" width={80} height={80}/>
        </div>
      </div>
    </div>
  );
}

export default NovaImg;