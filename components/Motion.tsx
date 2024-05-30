'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import hero from '../public/hero.png';

const variants = {
  hidden: { x: 0, y: 0, opacity: 0.2 },
  visible: { x: 0, y: 0, opacity: 1 },
};

const Motion = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      <Image
        className="absolute left-[50%] top-[10px] translate-x-[-50%] md:top-[60px]"
        src={hero}
        width="700"
        alt="Hero airpods"
      />
    </motion.div>
  );
};

export default Motion;
