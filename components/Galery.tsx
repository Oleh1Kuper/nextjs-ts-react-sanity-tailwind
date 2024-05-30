'use client';

import React, { useState } from 'react';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import type { Image as ImageType } from 'sanity';

type Props = {
  images: ImageType[];
};

const Galery: React.FC<Props> = ({ images }) => {
  const [index, setIndex] = useState(0);
  const handleClick = (i: number) => () => {
    setIndex(i);
  };

  return (
    <div className="flex flex-col items-center gap-14 px-14 py-20">
      <Image
        className="text-center"
        src={urlForImage(images[index])}
        width="240"
        height="200"
        alt="Product image"
      />

      <div className="flex flex-wrap gap-2">
        {images.map((img, i) => (
          <Image
            key={img._key as string}
            onClick={handleClick(i)}
            src={urlForImage(img)}
            width="60"
            height="60"
            alt="Galery Image"
            className="rounded-md border hover:cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Galery;
