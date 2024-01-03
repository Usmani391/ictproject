import Image from "next/image";
import Navbar from "@/components/Nav";
import { road } from "../../public/index";
import Roadmap from "@/components/Roadmap";
const Page = () => {
  return (
    <section className="w-screen h-full">
      <Navbar val='Roadsmap' />
      <div className="shadow-sm mb-8 md:mb-32 shadow-second-300">
        <Image src={road}  className=" h-2/3 md:h-1/2 w-11/12 mx-auto"/>  
      </div>
      <Roadmap/>
      {/* <Footer/> */}
    </section>
  );
};
export default Page;
