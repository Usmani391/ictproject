import Banner from "@/components/Banner";
import Top10 from "@/components/Top10";
import Section2 from "@/components/Section2";
import Navbar from "@/components/Nav";
import Section3 from "@/components/Section3";
const Home = () => {
  return (
    <section>
      <Navbar val="Home" />
      <Banner />
      <Section2 />
      <Section3 />
      <Top10 />
    </section>
  );
};
export default Home;
