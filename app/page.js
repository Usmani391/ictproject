import Banner from "@/components/Section1";
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
    </section>
  );
};
export default Home;
