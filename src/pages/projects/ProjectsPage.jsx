import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import Project from "./Project";
import { apiGet } from "../../utils/apiRequests";
import { urls } from "../../constants/urls";
import srcNoProjectsSvg from "../../assets/projectsPage/no_projects_shapes.svg";

const ProjectsPage = () => {
  const { projectsData, categoriesCodeMap, setProjectsData, setIsLoading } =
    useContext(AppContext);

  const getProjects = async () => {
    try {
      const { data } = await apiGet(urls.projects);
      setProjectsData(data);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="horizontal-page-padding min-h-screen overflow-y-hidden pt-14">
      {!projectsData?.length ? (
        <div className="mx-auto flex min-h-screen w-10/12 flex-col-reverse items-center justify-center gap-5 text-center md:flex-row">
          <div className="md:w-1/3">
            <h3 className="font-semibold md:text-6xl">
              עוד לא העלנו פרויקטים תחזרו מחר
            </h3>
          </div>
        </div>
      ) : (
        <h2 className="pt-10 text-right font-bold">עוד פרויקטים מעלפים</h2>
      )}
      {projectsData?.length ? (
        projectsData?.map((e, i) => (
          <Project catsObj={categoriesCodeMap} data={e} i={i} key={e._id} />
        ))
      ) : (
        <>
          <img src={srcNoProjectsSvg} alt="" />
        </>
      )}
    </div>
  );
};

export default ProjectsPage;
