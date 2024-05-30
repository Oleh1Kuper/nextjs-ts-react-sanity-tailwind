import React from 'react';
import Image from 'next/image';
import heroText from '../public/hero-text.png';
import Motion from './Motion';

const Hero = () => {
  return (
    <div className="container">
      <div className="relative">
        <Image
          className="mt-28"
          src={heroText}
          width="1024"
          alt="Hero banner"
        />
        <Motion />
      </div>
    </div>
  );
};

export default Hero;
