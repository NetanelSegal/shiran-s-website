import HeroSection from "./sections/HeroSection";
import HelloSection from "./sections/HelloSection";
import ProjectsSection from "./sections/ProjectsSection";
import ProcessSection from "./sections/ProcessSection";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HelloSection />
      <ProjectsSection />
      <ProcessSection />
      <Footer />
    </div>
  );
};

export default Home;
