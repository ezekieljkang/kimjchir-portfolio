import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { companies } from '@/data';

const CompaniesCarousel = () => {
  return (
    <div>
        <div>
        <InfiniteMovingCards
          items={companies}
          direction="left" // or "right"
          speed="normal"   // or "fast", "slow"
          pauseOnHover={true}
          className="my-custom-class"
        />
      </div>
    </div>
  );
}

export default CompaniesCarousel;