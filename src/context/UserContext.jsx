import { createContext, useContext, useEffect, useState } from "react";
import { urls } from "../constants/urls";
import { apiGet } from "../utils/apiRequests";
import { AppContext } from "./AppContext";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const { setIsLoading } = useContext(AppContext);
  const [user, setUser] = useState({});

  const checkUserAuth = async () => {
    try {
      const { data } = await apiGet(urls.checkUserAuth);
      setUser(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkUserAuth();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
