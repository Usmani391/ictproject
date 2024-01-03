import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Nav";
import Card from "@/components/card";
import data from "@/constant/data";
import { bga, building2, robot } from "../../public/index";
import Resources from "@/components/Resources";
import Roadmap from "@/components/Roadmap";
const Page = () => {
  return (
    <div className="w-full h-full">
      <Navbar val='Resources' />
      <div className="">
        <Image src={building2}  className="h-1/2 w-11/12 mx-auto"/>
      <Resources/>
      </div>
      
      {/* <Footer/> */}
    </div>
  );
};
export default Page;
