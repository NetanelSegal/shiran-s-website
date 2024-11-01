import ProjectsTable from "../../components/admin/projectsTable/ProjectsTable";
import { useEffect } from "react";
import { apiGet } from "../../utils/apiRequests";
import { urls } from "../../constants/urls";
import { useDataContext } from "../../context/DataContext";

const AdminPage = () => {
  const { projectsData, categoriesCodeMap, isLoading, getProjects } =
    useDataContext();

  // useEffect(() => {
  //   getProjects();
  // }, []);

  return (
    <div className="horizontal-page-padding pt-14">
      <h2 className="my-5">פרוייקטים</h2>
      {isLoading && <p>טוען...</p>}
      {projectsData && (
        <ProjectsTable
          projectsData={projectsData}
          categoriesCodeMap={categoriesCodeMap}
        />
      )}
    </div>
  );
};

export default AdminPage;
