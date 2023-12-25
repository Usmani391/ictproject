import React from "react";
import Image from "next/image";
import { disc, men,man,man1,boy, robot, colorboy, mantb } from "../public/index";
import Started from "./Started";

const Hero = () => (
  <section id="home" className="flex justify-start items-start pt-6">
    <div className="xl:max-w-[1280px] mx-auto  w-full">
      <div
        className="flex md:flex-row flex-col sm:py-16 py-2 xl:max-w-[1280px] w-full">
        <div
          className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 py-0 px-6">
          {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <Image src={disc} alt="Discount" className="w-[32px] h-[32px]" />
            <p className="font-poppins font-normal text-white ml-2">
              <span className="text-white">20%</span> Discount For{" "}
              <span className="text-white">1 Month</span> Account
            </p>
          </div> */}
          <div className="flex flex-row justify-between items-start w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-7xl text-5xl text-white ss:leading-[100px] leading-[75px]">
              <span className="text-gradient">
              Programmer
              <br className="sm:block hidden" />{" "}
                Hut</span>{" "}
            </h1>
            <div className="ss:flex hidden mr-0 ">
              {/* <Started val="/" /> */}
              </div>
          </div>
          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Payment Method.
          </h1>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        <div className="ss:hidden flex justify-center items-center">
          {/* <Started /> */}
        </div>
        <div
          className="flex flex-1  justify-center items-center my-10 relative">
          <Image
            src={man1}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          />
          <div className="absolute top-30   z-[0] w-[40%] h-[35%] pink__gradient" />
          <div className="absolute z-[1]  w-[80%] h-[80%] white__gradient rounded-full bottom-27" />
          <div className="absolute z-[0] w-[50%] h-[50%] blue__gradient right-30 bottom-5 " />
        </div>

      </div>
    </div>
  </section>
);

export default Hero;
