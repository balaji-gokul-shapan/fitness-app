import React from 'react';
import { FaBell, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';
import { MdCollectionsBookmark } from 'react-icons/md';

const Footer = () => {
  return (
    <>
      <div className="h-auto bg-metal text-white p-4 flex flex-col text-center flex flex-col m:w-full sm:w-full md:w-full lg:w-full xl:w-full">
        <div className="flex h-auto bg-gray-800 p-4 m-2 leading-6 flex flex-col rounded-md items-center border border-white border-4">
          <h1 className="text-3xl font-bold m-2 p-2">Fitness One</h1>
          <h2 className="text-2xl font-bold m-1 p-1">
            TreadMill Showroom, Porur
          </h2>
          <p class="p-4 text-base sm:text-sm md:text-md lg:text-lg xl:text-xl">
            15, Arcot Road Opposite, Saravana Bhavan Hotel, Karpaga Vinayaghar
            Colony, Valasaravakkam, Chennai
          </p>
          <div class="flex w-full h-auto bg-blue-950 p-4 m-1 leading-6 flex flex-col rounded-md items-center">
            <div class="top-10 left-5 flex flex-row">
              <button class="p-2 text-white rounded-full flex cursor-pointer hover:bg-tahiti transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:p-1 md:text-md sm:text-sm lg:p-3 lg:text-lg items-center justify-center">
                <LuPhoneCall size={25} className="flex hover:tahiti left-5" />
              </button>
              <h2 class="text-xs sm:text-xl md:text-lg lg:text-xl xl:text-xl font-bold m-1 p-1">
                Call Us: +91 97909 40307
              </h2>
              {/* <h2 class="text-2xl font-bold m-1 p-1 ">+91 97909 40307</h2> */}
            </div>
            <div className="flex-row flex">
            <div className="flex flex-row gap-2 md:gap-8 h-auto p-4 md:space-x-2 justify-evenly">
            <FaFacebook className="h-8 w-8 text-[#D2FBD0] hover:text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
            <FaTwitter className="h-8 w-8 text-[#D2FBD0] hover:text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
            <FaYoutube className="h-8 w-8 text-[#D2FBD0] hover:text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
            <FaBell className="h-8 w-8 text-[#D2FBD0] hover:text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
            <MdCollectionsBookmark className="h-8 w-8 text-[#D2FBD0] hover:text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
            </div>
            
            </div>
            <div className="flex flex-row">
              <div class="aspect-w-16 aspect-h-9 sm:aspect-w-9 sm:aspect-h-16">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
                  width="250"
                  height="280"
                  className="rounded-lg p-2"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-4/5 rounded-md bg-black mx-auto text-center p-4 lg:p-2 text-xs md:text-sm lg:text-sm xs:text-xs font-semibold">
            FITNESS ONE Copyright © 2024. All Rights Reserved | designed by
            SRI_HEMA INFOTECH
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
