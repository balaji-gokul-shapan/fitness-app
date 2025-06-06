'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from './../../../../public/images/logo.png';
import { LuPhoneCall } from 'react-icons/lu';
import { CiMenuKebab } from 'react-icons/ci';
import { FaWindowClose } from 'react-icons/fa';
import { TbTreadmill } from 'react-icons/tb';
import { BiSupport } from 'react-icons/bi';
import { CiDiscount1 } from 'react-icons/ci';
import { MdOutlineRateReview } from 'react-icons/md';
const options = [
  {
    name: 'TreadMills',
    icon: <TbTreadmill />,
    link: '/',
    anchor: 'carousel',
  },
  {
    name: 'Offers',
    icon: <CiDiscount1 />,
    link: '/',
    anchor: 'products',
  },
  {
    name: 'Support',
    icon: <BiSupport />,
    link: '/',
    anchor: 'customers',
  },
  {
    name: 'Reviews',
    icon: <MdOutlineRateReview />,
    link: '/',
    anchor: 'feedback',
  },
  {
    name: 'Call Us',
    icon: <LuPhoneCall />,
    link: '/',
    anchor: 'contact',
  },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="h-24 w-full  backdrop-filter backdrop-blur-lg bg-metal flex flex-row md:flex-row items-center justify-evenly transition ease-in-out delay-150 p-2 gap-2 m:w-full sm:w-full md:w-full lg:w-full xl:w-full ">
        <div className="flex flex-row gap-2">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer rounded-md hover:scale-105 duration-300 object-contain w-24"
          />
        </div>
        <div className="">
          <div className="lg:block  md:block">
            <div className="hidden md:block">
              <div className="w-full text-gray-800 bg-rgb(255,255,255,0.3) backdrop-filter backdrop-blur-lg p-2 rounded flex flex-row gap-4 z-50 font-semibold justify-center align-middle">
                {options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      const element = document.getElementById(option.anchor);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="hover:text-green-300 cursor-pointer font-poppins transition ease-in-out delay-150 hover:-translate-y-1 duration-300 text-md lg:text-lg lg:p-1 md:text-md md:p-1 sm:text-sm sm:p-1 xs:text-sm xs:p-1 flex flex-col items-center justify-center">
                    {React.cloneElement(option.icon, { size: 30 })}
                    {option.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {open && (
            <>
              <div className="bg-black top-0 absolute inset-y-0 right-0  flex flex-col justify-center items-center h-screen overflow-y-auto w-48 flex flex-col p-2 rounded gap-2 transition ease-in-out delay-150">
                <div className="absolute top-10 right-5">
                  <button className="p-2 text-white rounded-full flex cursor-pointer hover:bg-red-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:p-1 md:text-md sm:text-sm lg:p-3 lg:text-lg">
                    <FaWindowClose
                      onClick={handleClose}
                      size={30}
                      className="items-center justify-center flex"
                    />
                  </button>
                </div>
                <div className="absolute top-10 left-5">
                  <button className="p-2 text-white rounded-full flex cursor-pointer hover:bg-tahiti transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:p-1 md:text-md sm:text-sm lg:p-3 lg:text-lg">
                    <LuPhoneCall
                      size={30}
                      className="items-center justify-center flex"
                    />
                  </button>
                </div>
                {options.map((option, index) => (
                  <div
                    key={index}
                    onClick={handleClose}
                    className="hover:text-green-300 gap-2  text-tahiti cursor-pointer font-poppins transition ease-in-out delay-150 hover:-translate-x-1 duration-300 text-md lg:text-lg lg:p-1 md:text-md md:p-1 sm:text-sm sm:p-1 xs:text-sm xs:p-1 flex flex-col items-center justify-center">
                    {React.cloneElement(option.icon, { size: 30 })}
                    {option.name}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="lg:block md:hidden">
          <div className="block md:hidden">
            <div
              className="flex flex-col "
              onClick={() => setOpen((prev) => !prev)}>
              <CiMenuKebab size={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
