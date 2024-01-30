import HeroSection from "./sections/HeroSection";
import HelloSection from "./sections/HelloSection";
import ProjectsSection from "./sections/ProjectsSection";
import ProcessSection from "./sections/ProcessSection";
import Footer from "../../shared/footer/Footer";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <HelloSection />
      <ProjectsSection />
      <ProcessSection />
    </div>
  );
};

export default HomePage;
