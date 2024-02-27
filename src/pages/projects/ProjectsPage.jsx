import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import Project from "./Project";
import { apiGet } from "../../utils/apiRequests";
import { urls } from "../../constants/urls";

const ProjectsPage = () => {
  const { projectsData, categoriesCodeMap, setProjectsData, setIsLoading } =
    useContext(AppContext);

  const getProjects = async () => {
    try {
      const { data } = await apiGet(urls.projects);
      setProjectsData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="overflow-y-hidden pt-24">
      <h2 className="horizontal-page-padding py-5 text-right font-bold">
        עוד פרויקטים מעלפים
      </h2>
      <div className="horizontal-page-padding">
        {projectsData?.length > 0 &&
          projectsData?.map((e, i) => (
            <Project catsObj={categoriesCodeMap} data={e} i={i} key={e._id} />
          ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
