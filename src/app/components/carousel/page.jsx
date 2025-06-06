'use client'
import React, { useState, useEffect } from 'react';
import banner1 from '../../../../public/images/banner-1.jpg';
import banner2 from '../../../../public/images/banner-2.jpg';
import banner3 from '../../../../public/images/banner-3.jpg';
import Image from 'next/image';
const Carousel = () => {
  const images = [banner1, banner2, banner3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  useEffect(() => {
    const time = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 2000);
    return () => clearInterval(time);
  }, [images.length]);

  return (
    <>
      <div className="flex w-full h-auto bg-gray-800 ">
        
        <div className="flex  overflow-hidden w-full m-2 gap-2 min-h-100">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={500}
            //   className="aspect-w-16 aspect-h-9 bg-gradient-to-b from-transparent to-black"
              alt={`Image ${index + 1}`}
              className={` w-full bg-gradient-to-b from-transparent to-black ${
                index === currentImageIndex ? 'block' : 'hidden'
               }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
