import Image from 'next/image';
import hero from '../public/hero.jpg'
const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:[600px] 2xl:h-[750px] 
    ">
      <Image
        src={hero}
        fill
        alt="background"
        className="h-32 object-cover bg-gradient-to-r from-black-300 to-black-900"
      />
      <div className="absolute opacity-50 h-full w-full text-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-500 to-black flex flex-col md:flex-row">
        <div className='w-1/2 h-full'>
          </div>
          <div className='h-full w-1/2'>
        </div>

      </div>
    </div>
  );
};
export default Banner;