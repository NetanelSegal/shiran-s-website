import { createContext, useEffect, useState } from "react";
import { apiGet } from "../utils/apiRequests";
import { urls } from "../constants/urls";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(true);

  const [projectsData, setProjectsData] = useState([]);

  const [categoriesCodeMap, setCategoriesCodeMap] = useState({
    privateHouses: "תכנון ועיצוב בתים",
    apartments: "שיפוץ ועיצוב דירות",
    publicSpaces: "תכנון ועיצוב חללים מסחריים",
  });

  const getCategories = async () => {
    const { data } = await apiGet(urls.categories);
    const obj = {};
    data.forEach((e) => {
      obj[e.urlCode] = e.title;
    });
    setCategoriesCodeMap(obj);
  };

  const getProjects = async () => {
    const { data } = await apiGet(urls.projects);
    setProjectsData(data);
    setIsLoading(false);
  };

  function handleWindowSizeChange() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    getCategories();
    getProjects();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        screenWidth,
        setScreenWidth,
        isLoading,
        setIsLoading,
        categoriesCodeMap,
        setCategoriesCodeMap,
        projectsData,
        setProjectsData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
