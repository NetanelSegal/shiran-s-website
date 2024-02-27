import "./appStyle/App.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext.jsx";
import { AppProvider } from "./context/AppContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
