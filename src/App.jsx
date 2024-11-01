import "./appStyle/App.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext.jsx";
import { AppProvider } from "./context/AppContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import DataProvider from "./context/DataContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <DataProvider>
          <UserProvider>
            <AppRoutes />
          </UserProvider>
        </DataProvider>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
