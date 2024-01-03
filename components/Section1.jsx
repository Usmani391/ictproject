import Image from 'next/image';
import { prgg } from '@/public/index';
import Banner from './Banner';
const Section1 = () => {
  return (
    <div className="relative h-[800px]  2xl:h-screen top-0 shadow-2xl  shadow-teal-600">
      <Image
        src={prgg}
        fill
        alt="background"
        className="h-full object-cover"
      />
      <div className="absolute h-full bg-gray-900 bg-opacity-80 w-full ">
        <Banner/>
      </div>
    </div>
  );
};
export default Section1;