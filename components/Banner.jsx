import React from "react";
import Image from "next/image";
import {boy} from "../public/index";

const Banner = () => (
  <section id="home" className="flex justify-start items-start md:pt-6">
    <div className="xl:max-w-[1280px] mx-auto  w-full">
      <div
        className="flex md:flex-row flex-col sm:py-16 py-2 xl:max-w-[1280px] w-full">
        <div
          className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 py-0 px-6">
          <div className="flex flex-row md:justify-between items-start w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-7xl text-5xl text-white ss:leading-[100px] leading-[75px]">
              <span className="text-gradient font-serif text-4xl md:text-8xl">
              Silicon Sage
              </span>
            </h1>
          </div>
          <p className="font-poppins  bg-prim-550  bg-opacity-50 text-white px-3  py-4 rounded-xl shadow-md font-medium shadow-second-500 text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          Elevate your tech journey with our curated resources and roadmaps. Unleash industry-leading IT insights at your fingertips. Achieve mastery in IT roles with our empowering platform.
          <span className="absolute z-[0]  w-10 h-10 white__gradient rounded-full bottom-27" />
          </p>
        </div>
        <div
          className="flex flex-1  justify-center items-center my-10 relative">
          <Image
            src={boy}
            alt="boy"
            className="w-[100%] object-contain h-[100%] relative z-[5]"
          />
          <div className="absolute top-25   z-[0] w-[40%] h-[35%] pink__gradient" />
          <div className="absolute z-[1]  w-[80%] h-[80%] white__gradient rounded-full bottom-27" />
          <div className="absolute z-[0] w-[50%] h-[50%] blue__gradient right-30 bottom-5 " />
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
