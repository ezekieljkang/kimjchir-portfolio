import React from 'react';
import Image from 'next/image';

const DesignProcessImg = () => {
  const prefix = '/kimjchir-portfolio';

  return (
    <div className='pl-[3.5rem] border-l border-black h-full'>
      <div className='pb-[3.3rem] object-cover'>
        <Image src={`${prefix}/DesignProcess.svg`} alt="star" width={80} height={80} className='w-full' />
      </div>
    </div>
  );
}

export default DesignProcessImg;