import "./appStyle/App.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext.jsx";
import { AppProvider } from "./context/AppContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
