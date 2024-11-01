import { createContext, useContext, useEffect, useState } from "react";
import { apiGet } from "../utils/apiRequests";
import { urls } from "../constants/urls";
import dataCategorties from "../data/shiran.categories.json";
import dataProjects from "../data/shiran.projects.json";
const DataContext = createContext();

export default function DataProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [projectsData, setProjectsData] = useState(dataProjects);
  const [favoriteProjects, setFavoriteProjects] = useState(
    dataProjects.filter((e) => e.favourite),
  );

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
    setIsLoading(true);
    try {
      const { data } = await apiGet(urls.projects);

      setProjectsData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   getCategories();
  //   getProjects();
  // }, []);

  return (
    <DataContext.Provider
      value={{
        isLoading,
        projectsData,
        categoriesCodeMap,
        setProjectsData,
        setCategoriesCodeMap,
        getCategories,
        getProjects,
        favoriteProjects,
        setFavoriteProjects,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => {
  const data = useContext(DataContext);
  if (!data) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return data;
};
