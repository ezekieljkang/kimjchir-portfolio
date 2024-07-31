import React from 'react';

const NovaImg = () => {
  return (
    <div className='pl-[3.5rem] border-l border-black h-full'>
      <div className='pb-[3.3rem] object-cover'>
        <img src="/archflow.svg" alt="architecture flow chart" className='w-full'/>
      </div>
      <div className='pb-[3.3rem]'>
        <img src="/novaimg1.svg" alt="nova webpages" className='w-full' />
      </div>
      <div>
        <img src="/nova.gif" alt="nova design system websites" className='w-full border-[1.75rem] border-black rounded-2xl' />
      </div>
    </div>
  );
}

export default NovaImg;