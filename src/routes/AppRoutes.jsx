import React, { useEffect, useState } from "react";
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
import { apiGet } from "../utils/apiRequests.js";
import { urls } from "../constants/urls.js";

const AppRoutes = () => {
  const { user } = useContext(UserContext);
  const [projectsData, setProjectsData] = useState([]);

  const getProjects = async () => {
    const { data } = await apiGet(urls.projects);
    setProjectsData(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="the-process" element={<TheProcessPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="projects" element={<ProjectsPage data={projectsData} />} />
        {projectsData.map((p) => (
          <Route
            key={p._id}
            path={`projects/${p._id}`}
            element={<ProjectPage data={p} />}
          />
        ))}
        <Route path="*" element={<h1>404 page not found</h1>} />
        {(user.role === "admin" || user.role === "developer") && (
          <Route path="/admin" element={<AdminPage />} />
        )}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
