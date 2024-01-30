import "./appStyle/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import ProjectsPage from "./pages/projects/ProjectsPage.jsx";
import About from "./pages/about/About.jsx";
import TheProcess from "./pages/theProcess/TheProcess.jsx";
import Contact from "./pages/contact/Contact.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { AppProvider } from "./context/AppContext.jsx";
import Layout from "./shared/layout/Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="about" element={<About />} />
              <Route path="the-process" element={<TheProcess />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<h1>404 page not found</h1>} />
            </Route>
          </Routes>
        </AppProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
