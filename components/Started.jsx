// import styles from "../style";
import {arrow}  from "../public/index";
const Started = ({val}) => (
  <a href={val}>
  <div
    className="w-[140px] h-[140px] flex justify-center items-center   rounded-full bg-blue-gradient p-0.5 shadow-sm shadow-second-350   cursor-pointer">

      <div className="flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full">
        <div className="flex justify-start items-start flex-row">
          <p className=" font-poppins font-medium  text-[18px] leading-[23.4px]">
          </p>
            <span className="text-gradient ">Get</span>
          <img className="w-6 h-6   object-contain" alt='.' src={arrow}/>
        </div>
        <p className=" font-poppins font-medium text-[18px] leading-[23.4px] ">
            <span className="text-gradient">Started</span>
          </p>
      </div>
    </div>
      </a>
);

export default Started;