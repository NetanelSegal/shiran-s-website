import Projects from "./sections/Projects";

const ProjectsPage = ({ data }) => {
  return (
    <div className="overflow-y-hidden pt-16">
      <h2 className="horizontal-page-padding py-5 text-right font-bold">
        עוד פרויקטים מעלפים
      </h2>
      <Projects data={data} />
    </div>
  );
};

export default ProjectsPage;
