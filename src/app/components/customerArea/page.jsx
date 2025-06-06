import Image from 'next/image';
import React from 'react';
import image from '../../../../public/images/customer.jpg';
const CustomerArea = () => {
  return (
    <>
      <div className="flex flex-col px-4 m-4 gap-4 bg-stone-800 h-auto rounded-md border border-tahiti">
        <h1 className="text-tahiti md:text-4xl lg:text-5xl sm:text-4xl text-3xl text-center font-white font-bold m-1 p-1">
          Speak to Our Fitness Expert Today.!!
        </h1>
        <div className="flex flex-col h-64 w-full object-cover">
          <Image
            src={image}
            alt="customer"
            className="w-full h-full object-cover"
          />
        </div>
        <div class="flex flex-col items-center justify-center gap-2 p-2 m-2">
          <div class="flex flex-col w-1/2 md:full">
            <input
              type="text"
              placeholder="Name"
              class="text-tahiti md:text-lg lg:text-lg sm:text-lg text-md text-center font-white font-bold m-1 p-1 outline-none rounded-md bg-gray-600"
            />
          </div>
          <div class="flex flex-col w-1/2 md:full">
            <input
              type="number"
              placeholder="Mobile Number"
              class="text-tahiti md:text-lg lg:text-lg sm:text-lg text-md text-center font-white font-bold m-1 p-1 outline-none rounded-md bg-gray-600"
            />
          </div>
          <div class="bg-green-500 text-white md:text-lg lg:text-lg sm:text-lg text-md text-center cursor-pointer font-white font-semibold m-1 p-2 rounded-md shadow hover:shadow hover:shadow-slate-500 hover:shadow-xl">
            Submit
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerArea;
