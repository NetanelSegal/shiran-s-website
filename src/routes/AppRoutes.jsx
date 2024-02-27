import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage.jsx";
import ProjectsPage from "../pages/projects/ProjectsPage.jsx";
import AboutPage from "../pages/about/AboutPage.jsx";
import TheProcessPage from "../pages/theProcess/TheProcessPage.jsx";
import ContactPage from "../pages/contact/ContactPage.jsx";
import Layout from "../shared/layout/Layout.jsx";
import LoginPage from "../pages/login/LoginPage.jsx";
import SignupPage from "../pages/signup/SignupPage.jsx";
import AdminPage from "../pages/admin/AdminPage.jsx";
import ProjectPage from "../pages/project/ProjectPage.jsx";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { AppContext } from "../context/AppContext.jsx";
import PageLoader from "../shared/loaders/PageLoader.jsx";
import EditProjectPage from "../pages/admin/EditProjectPage.jsx";
import AddProjectPage from "../pages/admin/AddProjectPage.jsx";

const AppRoutes = () => {
  const { user } = useContext(UserContext);
  const { setIsLoading, isLoading, projectsData } = useContext(AppContext);

  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="the-process" element={<TheProcessPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        {projectsData.map((p) => (
          <Route
            key={p._id}
            path={`projects/${p._id}`}
            element={<ProjectPage data={p} />}
          />
        ))}
        <Route path="*" element={<h1>404 page not found</h1>} />

        {/* admin routes */}
        {(user?.role === "admin" || user?.role === "developer") && (
          <>
            <Route path="admin" element={<AdminPage />} />
            {projectsData.map((p) => (
              <Route
                key={p._id}
                path={`admin/edit-project/:id`}
                element={<EditProjectPage />}
              />
            ))}
            <Route path="admin/add-project" element={<AddProjectPage />} />
          </>
        )}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
