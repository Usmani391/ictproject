import Image from 'next/image'
import Prog from '@/components/Prog'
import Navbar from '@/components/Nav'
import Banner from '@/components/Banner'
import Top10 from '@/components/Top10'
export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Banner/>
      <Prog/>
      <Top10/>
    </main>
  )
}
