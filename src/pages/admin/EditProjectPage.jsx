import React, { useEffect, useState } from "react";
import ProjectForm from "../../components/admin/projectForm/ProjectForm";
import { urls } from "../../constants/urls";
import { apiGet } from "../../utils/apiRequests";
import { useNavigate, useParams } from "react-router-dom";
import { updateProject } from "../../utils/adminFunctions";

const EditProjectPage = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState();

  const getSingleProject = async () => {
    try {
      const { data } = await apiGet(`${urls.singleProject}/${id}`);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onUpdate = async (pData) => {
    try {
      const data = await updateProject(pData, id);
      console.log(data);
      const wantToNav = confirm(
        "הפרוייקט עודכן בהצלחה\nלנווט לטבלת הפרוייקטים?",
      );
      if (wantToNav) {
        nav("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProject();
  }, []);

  return (
    <div className="horizontal-page-padding pb-24 pt-24">
      <div className="flex  flex-col items-center justify-center gap-5 md:flex-row md:items-start ">
        <div>
          <h2 className="py-5 text-center font-bold">עריכת פרוייקט</h2>
          {data && <h3 className="pb-2 text-center">"{data.title}"</h3>}
        </div>
        <div className="w-full">
          <ProjectForm data={data} onSubmit={onUpdate} />
        </div>
      </div>
    </div>
  );
};

export default EditProjectPage;
