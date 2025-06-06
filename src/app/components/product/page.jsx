import Image from 'next/image';
import React from 'react';
import { products } from '../data/products/page';
const ProdcutArea = () => {
  return (
    <>
      <div className="flex flex-col px-4 m-4 gap-4 bg-Neutral-900 h-auto rounded-md border border-metal-500">
        <h1 className="text-white md:text-4xl lg:text-5xl sm:text-4xl text-3xl text-center font-white font-bold m-1 p-1">
          Exercise At Home
        </h1>
        <div className="p-2 flex flex-col">
          <h1 className="text-gray-200 md:text-2xl m-2 lg:text-2xl sm:text-2xl text-xl font-white font-bold m-1 p-1 bg-metal w-3/4 shadow-lg shadow-slate-500 shadow-2xl">
            Get Fix With Our Products.!
          </h1>
          <div className="flex justify-center items-center m- 2 shadow-lg shadow-slate-300 shadow-xl">
            <div className="border-x-8 border-gray-800 rounded p-2 text-black font-bold shadow-lg shadow-slate-500 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-2 shadow-lg shadow-slate-500 shadow-xl ">
                {products.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col bg-slate-200 rounded p-2 relative">
                    <Image
                      src={item.image}
                      alt="book"
                      width={200}
                      height={200}
                      className="rounded-md p-2 hover:cursor-pointer hover:scale-105 hover:opacity-80 hover:shadow hover:shadow-slate-500 hover:shadow-2xl shadow-lg shadow-slate-500 shadow-xl"
                    />
                    {/* <div className="absolute top-0 left-0 bg-red-500 p-1 bg-gray-700 text-white rounded-full">
                      {item.discount}
                    </div> */}
                    <div className="absolute top-0 left-0 bg-red-500 p-1 bg-gray-700 text-white rounded-full">
                      {item.discount}
                    </div>
                    <h1 className="text-center text-[#2e373a] md:text-md lg:text-md sm:text-sm text-md font-white font-bold m-1 p-1">
                      {item.name + `${i}`}
                    </h1>
                    <h1 className="text-center font-bold text-black md:text-md lg:text-md sm:text-sm text-md font-white font-bold m-1 p-1">
                      {item.title}
                    </h1>
                    <div className="text-center p-2">
                      <button className="inline-block w-28 text-sm h-auto text-white bg-green-500 hover:bg-green-700 font-bold p-2 px-2 rounded-full">
                        2,499 Per Month
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center m-4">
            <button className="w-40 md:w-48 lg:w-56 xl:w-64 h-auto text-white bg-green-500 hover:bg-green-700 font-bold p-2 px-4 m-2 rounded">
              View All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProdcutArea;
