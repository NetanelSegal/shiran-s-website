import { createContext, useEffect, useState } from "react";
import { urls } from "../constants/urls";
import { apiGet } from "../utils/apiRequests";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const checkUserAuth = async () => {
    try {
      const { data } = await apiGet(urls.checkUserAuth);
      setUser(data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
