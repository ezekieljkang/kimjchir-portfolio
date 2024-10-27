import React from 'react';
import DesignProcessImg from './DesignProcessImg';
import Link from 'next/link';

interface HeaderProps {
  problemText: string;
  solutionText: string;
};


const CSContent2: React.FC<HeaderProps> = ({ problemText, solutionText}) => {
  const prefix = '/kimjchir-portfolio';

  return (
    <div className='px-[3rem] pt-[4.3rem]'>
      <div className='flex justify-between gap-[6rem]'>
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
              <ul className='font-[300] text-[20px] font-satoshi pb-[4.25rem]'>
                <li><em>Enhanced Brand Alignment:</em> Websites are more aligned with brand needs and content strategies, allowing editors to better communicate to their target audience. </li>
                <li><em>Improved Cross-Departmental Efficiency:</em> Streamlined communication and approval processes have minimized bottleneck, allowing for more coordinated progress across advertising, sales, marketing, engineering, and project management teams.</li>
                <li><em>Higher Stakeholder Satisfaction:</em> Brand editors and other stakeholders feel more involved and heard about their site problems, leading to greater satisfaction with the final outcome and reducing post-launch revisions.</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
        <div className='basis-2/3'>
          <DesignProcessImg />
        </div>
      </div>
      <div className='flex justify-between font-robotoMono font-normal text-[15px] pt-[6rem] pb-[4rem] border-b border-black'>
        <div className='flex items-center gap-[1rem]'>
          <Link href="/pages/PMC/NovaDesignSystem">
            <button className="w-10 h-10 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${prefix}/leftarrow.svg)` }}></button>
          </Link>
          <p>DESIGN SYSTEM</p>
        </div>
        <div className='flex items-center gap-[1rem]'>
          <p>ECOM</p>
          <button className="w-10 h-10 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${prefix}/rightarrow.svg)` }}></button>
        </div>
      </div>
    </div>
  );
}

export default CSContent2;