import Image from "next/image";
import { br,com ,disc} from "../public/index";
import Started from "./Started"



const Hero = () => (
  <section  className="flex justify-start items-start pt-6">
    <div className="xl:max-w-[1280px] mx-auto  w-full">
      <div
        className="flex md:flex-row-reverse flex-col sm:py-16 py-2 xl:max-w-[1280px] w-full"> 
        <div
          className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 py-0 px-6">
          <div className="flex flex-row justify-between items-start w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-7xl text-5xl text-white ss:leading-[100px] leading-[75px]">
              <span className="text-gradient">
              Resources Store
              </span>{" "}
            </h1>
            <div className="ss:flex hidden mr-0 ">{/* <Started /> */}</div>
          </div>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          Unlock your learning potential and achieve your goals with our comprehensive resources, offering tutorials, guides, documentation, and code examples to support your growth and understanding.
          </p>
        </div>
        <div className="ss:hidden flex justify-center items-center">
          <Started val='/Resources' />
        </div>
        <div
          className="flex flex-1  justify-center items-center my-10 relative">
          <Image
            src={br}
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
)
export default Hero;


