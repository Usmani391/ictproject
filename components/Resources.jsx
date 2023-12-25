import data from "@/constant/data";
import Card from "./card";

const Resources = () => {
  return <>
  <div  className=" w-full px-4 py-4 my-1 flex flex-wrap justify-evenly mt-5 ">
        {data?.map(({lang,yr,invent,ver,use,doc,logo,youtube,fram,ref})=>(
          <Card key={ver} lan={lang} y={yr} cheat={ref} inven={invent}vers={ver}uses={use} docs={doc}log={logo} youtub={youtube}frame={fram} />
          ))
        }
    </div>
  </>;
};
export default Resources;