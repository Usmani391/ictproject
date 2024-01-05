import Image from "next/image";
import Navbar from "@/components/Nav";
import {dream} from "../../public/index";
import Resources from "@/components/Resources";
const Page = () => {
  return (
    <div className="w-full h-full">
      <Navbar val='Resources' />
      <div className="">
        <Image src={dream}  className="h-1/2 w-11/12 mx-auto"/>
      <Resources/>
      </div>
      
      {/* <Footer/> */}
    </div>
  );
};
export default Page;
