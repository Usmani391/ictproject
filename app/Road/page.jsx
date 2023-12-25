import Image from "next/image";
import Navbar from "@/components/Nav";
import { road } from "../../public/index";
import Roadmap from "@/components/Roadmap";
const Page = () => {
  return (
    <div className="w-full h-full">
      <Navbar val='Roadsmap' />
      <div className="shadow-sm mb-32 shadow-second-300">
        <Image src={road}  className="h-1/2 w-11/12 mx-auto"/>
      
      </div>
      <Roadmap/>
      {/* <Footer/> */}
    </div>
  );
};
export default Page;
