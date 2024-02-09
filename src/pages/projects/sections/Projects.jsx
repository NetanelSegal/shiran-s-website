import { useEffect, useState } from "react";
import { urls } from "../../../constants/urls";
import Project from "../../../components/project/Project";
import { apiGet } from "../../../utils/apiRequests";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const getProjects = async () => {
    const { data } = await apiGet(urls.projects);
    setProjectsData(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="horizontal-page-padding">
      {projectsData?.length > 0 &&
        projectsData?.map((e, i) => <Project data={e} i={i} key={e._id} />)}
    </div>
  );
};

export default Projects;
