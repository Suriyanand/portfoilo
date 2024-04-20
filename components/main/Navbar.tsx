import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div className="flex items-center">
          <a
            href="#about-me"
            className="flex items-center space-x-2"
          >
            <div className="h-[30px] w-[30px]">
              <Image
                src="/AI6.png"
                alt="logo"
                width={30}
                height={30}
                className="cursor-pointer hover:animate-slowspin"
              />
            </div>
            <span className="font-bold text-gray-300 hidden md:block">
              Suriya The Analyst
            </span>
          </a>
        </div>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About
            </a>
            <a href="#skills" className="cursor-pointer ml-4 md:ml-0">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer ml-4 md:ml-0">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
