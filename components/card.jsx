import Image from "next/image";
import img from "../public/cpp.png";
const Card = () => {
  return (<div class="block my-5 max-w-[350px] pb-4 rounded-2xl bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600">
  <div className="relative  h-[320px] min-w-[200px] max-w-[350px] max-h-52 rounded-2xl ">
    <Image
      src={img}
      fill
      alt="image"
      className="rounded-2xl object-cover "
    />
  </div>
  <div className="px-6">
    <div class="flex justify-between border-b-2 border-neutral-100 border-opacity-100  py-0.5 dark:border-opacity-50">
      <h5 class=" text-2xl font-extrabold">
        <a href="">Card title</a>
      </h5>
      <p class="font-italic text-sm text-bold pt-2">Denish Riche</p>
    </div>
    <div class=" flex flex-col">
      <a class="w-full border-b-2 border-neutral-100 border-opacity-100  py-0.5 dark:border-opacity-50">
        Youtube playlist
      </a>
      <a class="w-full border-b-2 border-neutral-100 border-opacity-100  py-0.5 dark:border-opacity-50">
        version :
      </a>
      <a class="w-full border-b-2 border-neutral-100 border-opacity-100  py-0.5 dark:border-opacity-50">
        ebooks :
      </a>
    </div>
    <div class="border-b-2 border-neutral-100 border-opacity-100  py-0.5 dark:border-opacity-50">
      <a
        type="button"
        href="#"
        class="mr-6">
        Documentation
      </a>
      <a
        type="button"
        href="#"
        class="pointer-events-auto inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700">
        Another Link
      </a>
    </div>
  </div>
</div>)
};
export default Card;