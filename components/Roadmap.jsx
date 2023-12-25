import Roles from '@/constant/Roles';


const Roadmap = () => {
  return (<div className="h-full px-24  flex w-full mx-auto flex-1 text-white flex-wrap">{
    Roles.map(({title,rlink})=>(
      <a key={title} href={rlink} target='_blank' >

      <div  className="border-2 border-second-300 shadow-md my-8 shadow-second-350 h-12 w-64  mx-12 rounded-xl p-2  m-4  flex justify-between">{title}  
      <svg width="8" height="10" viewBox="0 0 8 10" fill="none" className="my-auto h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.93682 0.5H2.06282C1.63546 0.500094 1.22423 0.663195 0.912987 0.956045C0.601741 1.2489 0.413919 1.64944 0.387822 2.076L0.00182198 8.461C-0.012178 8.6905 0.0548218 8.9185 0.191822 9.104L0.242322 9.1665C0.575322 9.5485 1.15132 9.6165 1.56582 9.31L3.99982 7.5115L6.43382 9.31C6.58413 9.42115 6.76305 9.48708 6.94954 9.50006C7.13603 9.51303 7.32235 9.4725 7.4866 9.38323C7.65085 9.29397 7.78621 9.15967 7.87677 8.99613C7.96733 8.83258 8.00932 8.64659 7.99782 8.46L7.61232 2.0765C7.58622 1.64981 7.39835 1.24914 7.08701 0.956192C6.77567 0.663248 6.36431 0.500094 5.93682 0.5ZM5.93682 1.25C6.42732 1.25 6.83382 1.632 6.86382 2.122L7.24932 8.506C7.25216 8.55018 7.24229 8.59425 7.22089 8.63301C7.19949 8.67176 7.16745 8.70359 7.12854 8.72472C7.08964 8.74585 7.0455 8.75542 7.00134 8.75228C6.95718 8.74914 6.91484 8.73343 6.87932 8.707L4.27582 6.783C4.19591 6.72397 4.09917 6.69211 3.99982 6.69211C3.90047 6.69211 3.80373 6.72397 3.72382 6.783L1.11982 8.707C1.0843 8.73343 1.04196 8.74914 0.9978 8.75228C0.953639 8.75542 0.909502 8.74585 0.8706 8.72472C0.831697 8.70359 0.799653 8.67176 0.778252 8.63301C0.756851 8.59425 0.746986 8.55018 0.749822 8.506L1.13632 2.122C1.16632 1.632 1.57232 1.25 2.06282 1.25H5.93682Z" fill="currentColor"></path></svg>
      </div>
  </a>
      ))
  }
  </div>);
};
export default Roadmap;