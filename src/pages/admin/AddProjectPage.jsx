import { useNavigate } from "react-router-dom";
import ProjectForm from "../../components/admin/projectForm/ProjectForm";
import { apiPost } from "../../utils/apiRequests";
import { urls } from "../../constants/urls";

const AddProjectPage = () => {
  const nav = useNavigate();

  
  const onSubmit = async (pData, validation) => {
    const isValid = validation(pData);
    if (isValid) {
      try {
        const { data } = await apiPost(urls.projects, pData);
        alert("הפרוייקט הועלה בהצלחה");
        nav("/admin");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <div className="horizontal-page-padding flex flex-col items-center justify-center gap-5 pb-24 pt-24 md:flex-row md:items-start">
      <h2 className="text-center">הוספת פרוייקט</h2>
      <div className="w-full">
        <ProjectForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default AddProjectPage;
