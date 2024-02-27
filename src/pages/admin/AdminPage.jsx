import ProjectsTable from "../../components/admin/projectsTable/ProjectsTable";
import { useContext, useEffect } from "react";
import { apiGet } from "../../utils/apiRequests";
import { AppContext } from "../../context/AppContext";
import { urls } from "../../constants/urls";

const AdminPage = () => {
  const {
    projectsData,
    categoriesCodeMap,
    setProjectsData,
    isLoading,
    setIsLoading,
  } = useContext(AppContext);

  const getProjects = async () => {
    try {
      console.log("getting projects");
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
    <div className="horizontal-page-padding pt-14">
      <h2 className="my-5">פרוייקטים</h2>
      <ProjectsTable
        projectsData={projectsData}
        categoriesCodeMap={categoriesCodeMap}
      />
    </div>
  );
};

export default AdminPage;
