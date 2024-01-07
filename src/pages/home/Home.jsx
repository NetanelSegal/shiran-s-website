import HeroSection from "./sections/HeroSection";
import HelloSection from "./sections/HelloSection";
import ProjectsSection from "./sections/ProjectsSection";
const Home = () => {
  return (
    <div className="pb-28">
      <HeroSection />
      <HelloSection />
      <ProjectsSection />
    </div>
  );
};

export default Home;
