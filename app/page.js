import Banner from "@/components/Section1";
import Top10 from "@/components/Section4";
import Section2 from "@/components/Section2";
import Navbar from "@/components/Nav";
import Section3 from "@/components/Section3";
// import Roadmap from "@/components/roadmap";
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
