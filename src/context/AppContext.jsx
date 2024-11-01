import { createContext, useEffect, useState } from "react";
import { apiGet } from "../utils/apiRequests";
import { urls } from "../constants/urls";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
