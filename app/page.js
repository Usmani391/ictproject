import Section2 from "@/components/Section2";
import Navbar from "@/components/Nav";
import Section3 from "@/components/Section3";
import Section1 from "@/components/Section1";
// import Roadmap from "@/components/roadmap";
const Home = () => {
  return (
    <section>
      <Navbar val="Home" />
      <div>
      <Section1 />
      </div>
      <Section2 />
      <Section3 />
    </section>
  );
};
export default Home;
