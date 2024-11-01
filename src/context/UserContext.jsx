import { createContext, useContext, useEffect, useState } from "react";
import { urls } from "../constants/urls";
import { apiGet } from "../utils/apiRequests";
import { AppContext } from "./AppContext";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  const checkUserAuth = async () => {
    setIsLoading(true);
    try {
      const { data } = await apiGet(urls.checkUserAuth);
      setUser(data);
    } catch (err) {
      setUser(null);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   checkUserAuth();
  // }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

function useUser() {
  return useContext(UserContext);
}

export { useUser, UserProvider };
