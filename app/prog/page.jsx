import Footer from "@/components/Footer";
import Navbar from "@/components/Nav";
import Card from "@/components/card";
import data from "@/constant/data";
const Prog = () => {
  return (
    <main className="">
      <Navbar val='Resources' />
      <div  className=" w-full px-4 py-4 my-1 flex flex-wrap justify-evenly pt-24">
        {data?.map(({lang,yr,invent,ver,use,doc,logo,youtube,fram})=>(
          <Card key={ver} lan={lang} y={yr} inven={invent}vers={ver}uses={use} docs={doc}log={logo} youtub={youtube}frame={fram} />
          ))
        }
    </div>
    </main>
  );
};
export default Prog;
