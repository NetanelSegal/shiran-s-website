import "./appStyle/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import ProjectsPage from "./pages/projects/ProjectsPage.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import TheProcessPage from "./pages/theProcess/TheProcessPage.jsx";
import ContactPage from "./pages/contact/ContactPage.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { AppProvider } from "./context/AppContext.jsx";
import Layout from "./shared/layout/Layout.jsx";
import LoginPage from "./pages/login/LoginPage.jsx";
import SignupPage from "./pages/signup/SignupPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="the-process" element={<TheProcessPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignupPage />} />
              <Route path="*" element={<h1>404 page not found</h1>} />
            </Route>
          </Routes>
        </AppProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
