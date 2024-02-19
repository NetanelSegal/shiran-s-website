import Project from "../../../components/project/Project";

const Projects = ({ data }) => {
  return (
    <div className="horizontal-page-padding">
      {data?.length > 0 &&
        data?.map((e, i) => <Project data={e} i={i} key={e._id} />)}
    </div>
  );
};

export default Projects;
