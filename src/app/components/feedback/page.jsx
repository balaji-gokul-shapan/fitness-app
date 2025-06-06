'use client';
import Image from 'next/image.js';
import React, { useState } from 'react';
import {FeedbackPage} from '../data/feedback/dataa'

const Feedback = () => {
  const [position, setPosition] = useState(0);
  let initialX = null;

  const handleTouchStart = (e) => {
    initialX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (initialX === null) {
      return;
    }

    const currentX = e.touches[0].clientX;
    const diffX = currentX - initialX;

    setPosition(diffX);
  };

  const handleTouchEnd = () => {
    initialX = null;
    setPosition(0);
  };
  return (
    <>
      <div className="flex flex-col px-4 m-4 gap-4 bg-zinc-800 h-auto rounded-md border border-green-500">
        <h1 className="text-white md:text-4xl lg:text-5xl sm:text-4xl text-3xl text-center font-white font-bold m-1 p-1">
          Customer Stories
        </h1>
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ transform: `translateX(${position}px)` }}
          className="flex flex-col md:flex-row items-center justify-center p-2 m-2">
          <div className="flex flex-col md:flex-row border-b-4 border-tahiti shadow-2xl hover:opacity-80 hover:shadow hover:shadow-slate-500 hover:shadow-2xl bg-gray-800 shadow-lg shadow-slate-500 shadow-xl">
            {FeedbackPage.map((item, i) => (
              <div
                key={i}
                className="flex flex-col bg-gray-800 rounded p-2 m-2 w-full md:w-auto items-center justify-center">
                <h2 className="text-white font-bold">{item.name}</h2>
                <Image
                  src={item.image}
                  alt="book"
                  width={100}
                  height={100}
                  className="rounded-md p-2 hover:cursor-pointer hover:scale-105 hover:opacity-80 hover:shadow hover:shadow-slate-500 hover:shadow-2xl shadow-lg shadow-slate-500 shadow-xl"
                />
                <h5 className="text-white font-semibold">{item.title}</h5>
                <p className="text-white font-normal text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="flex flex-col md:flex-row items-center justify-center p-2 m-2">
          <div className="flex flex-col md:flex-row border-b-4 border-tahiti shadow-2xl hover:opacity-80 hover:shadow hover:shadow-slate-500 hover:shadow-2xl bg-gray-800 shadow-lg shadow-slate-500 shadow-xl">
            {FeedbackData.map((item, i) => (
              <div
                key={i}
                className="flex flex-col bg-gray-800 rounded p-2 m-2 w-full md:w-auto items-center justify-center">
                <h2 className="text-white font-bold">{item.name}</h2>
                <Image
                  src={item.image}
                  alt="book"
                  width={100}
                  height={100}
                  className="rounded-md p-2 hover:cursor-pointer hover:scale-105 hover:opacity-80 hover:shadow hover:shadow-slate-500 hover:shadow-2xl shadow-lg shadow-slate-500 shadow-xl "
                />
                <h5 className="text-white font-semibold">{item.title}</h5>
                <p className="text-white font-normal text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Feedback;
