import HelloSection from "./sections/HelloSection";
import ProjectsSection from "./sections/ProjectsSection";

const Home = () => {
  return (
    <div className="page-padding">
      <HelloSection />
      <ProjectsSection />
    </div>
  );
};

export default Home;
