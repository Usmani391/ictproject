import Image from "next/image";
const Card = ({lan,y,inven,vers,uses,docs,log,youtub,frame}) => {
  return (<div   key={lan} className="block my-5 max-w-[350px] pb-4 rounded-2xl bg-teal-100">
  <div className="relative  h-[320px] min-w-[200px] max-w-[350px] max-h-52 rounded-2xl ">
    <img
      src={log}
      alt="image"
      className="rounded-2xl object-contain h-[200px]  w-[350px] "
    />
  </div>
  <div className="px-6">
    <div className="flex justify-between border-b-2 border-teal-900 border-opacity-100  py-0.5 dark:border-opacity-50">
      <h5 className=" text-2xl font-extrabold">
        <a href="">{lan}</a>
      </h5>
      <p className="font-italic text-sm text-bold pt-2">{inven}</p>
    </div>
    <div className=" flex flex-col">
      <p 
      className="w-full border-b-2 border-teal-900 border-opacity-100  py-0.5 dark:border-opacity-50">
        version : {vers}
      </p>
      <p className="w-full border-b-2 border-teal-900 border-opacity-100  py-0.5 dark:border-opacity-50">
        Uses :  {uses}
      </p>
      <p
        href="#"
        className="w-full border-b-2 border-teal-900 border-opacity-100  py-0.5 dark:border-opacity-50">
        Frame works : {frame}
      </p>
    </div>
    <div className="border-b-2 border-teal-900 border-opacity-100  py-0.5 dark:border-opacity-50">
      <p
        className="mr-6">
        Documentation Link : <a href={docs} className="text-blue-900 underline-offset-1">
          Click here
          </a>
      </p>
    </div>
    <div className="border-b-2 border-teal-900 border-opacity-100  py-0.5 dark:border-opacity-50 flex justify-between"> 
      <a
      href={youtub} 
      className="block">
        Youtube Playlist
      </a>
      <a
      href={youtub} 
      className="block">
        Cheat Sheat
      </a>
    </div>
  </div>
</div>)
};
export default Card;


