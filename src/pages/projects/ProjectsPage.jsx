import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Project from "./Project";
import { apiGet } from "../../utils/apiRequests";
import { urls } from "../../constants/urls";
import srcNoProjectsSvg from "../../assets/projectsPage/no_projects_shapes.svg";
import Dropdown from "../../components/dropdown/Dropdown";
import { useDataContext } from "../../context/DataContext";

const ProjectsPage = () => {
  const { projectsData, categoriesCodeMap, setProjectsData, setIsLoading } =
    useDataContext();

  const [displayProjectsData, setDisplayProjectsData] = useState(projectsData);
  const [selectedFilterCat, setSelectedFilterCat] =
    useState("סינון לפי קטגוריה");

  const getProjects = async () => {
    try {
      const { data } = await apiGet(urls.projects);
      setProjectsData(data);
      setDisplayProjectsData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const filterProjects = () => {
    if (Object.values(categoriesCodeMap).includes(selectedFilterCat)) {
      setDisplayProjectsData(() => {
        return projectsData.filter((p) => {
          const categotyCode = getKeyForVal(
            categoriesCodeMap,
            selectedFilterCat,
          );
          return p.categories.includes(categotyCode);
        });
      });
    } else {
      setDisplayProjectsData(projectsData);
    }
  };

  // useEffect(() => {
  //   getProjects();
  // }, []);

  useEffect(() => {
    filterProjects();
  }, [selectedFilterCat]);

  return (
    <div className="horizontal-page-padding min-h-screen overflow-y-hidden pt-14">
      {!displayProjectsData.length ? (
        <div className="mx-auto flex min-h-screen w-10/12 flex-col-reverse items-center justify-center gap-5 text-center md:flex-row">
          <h3 className="font-semibold md:text-6xl">
            עוד לא העלנו פרויקטים תחזרו מחר
          </h3>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-2 pt-10">
            <h2 className="shrink-0 text-right font-bold">
              עוד פרויקטים מעלפים
            </h2>
            <div className="max-w-72 shrink-0 grow">
              <Dropdown
                options={[...Object.values(categoriesCodeMap), "ביטול סינון"]}
                setSelected={setSelectedFilterCat}
                selected={selectedFilterCat}
              />
            </div>
          </div>
          {displayProjectsData.map((e, i) => (
            <Project catsObj={categoriesCodeMap} data={e} i={i} key={e._id} />
          ))}
        </>
      )}
    </div>
  );
};

export default ProjectsPage;

const getKeyForVal = (obj, val) => Object.keys(obj).find((e) => obj[e] == val);
