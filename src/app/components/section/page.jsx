import React from 'react';
import { IoSettings } from 'react-icons/io5';
import { TbTreadmill } from 'react-icons/tb';
import { FaPlateWheat } from 'react-icons/fa6';
const Section = () => {
  return (
    <>
      <div className="flex flex-col px-4 m-4 gap-4 bg-green-900 h-auto rounded-md">
        <div className="flex flex-col lg:flex-row items-center justify-evenly p-4 m-2">
          <div className="flex flex-col  items-center lg:w-1/3 cursor-pointer">
            <FaPlateWheat size={150} className="text-gray-300 " />
            <p className="text-center  text-tahiti font-semibold text-2xl">
              Home Training
            </p>
          </div>
            
          <div className="flex flex-col  items-center lg:w-1/3 cursor-pointer">
                
            <TbTreadmill size={150} className="text-gray-300 " />
                
            <p className="text-center  text-tahiti font-semibold text-2xl">
              Diet Consultation
            </p>
              
          </div>
            
          <div className="flex flex-col  items-center lg:w-1/3 cursor-pointer">
                
            <IoSettings size={150} className="text-gray-300 " />
                
            <p className="text-center text-tahiti  font-semibold text-2xl">
              Equipment Service
            </p>
              
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
