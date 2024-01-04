import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarManager from "./components/navbar/NavbarManager.jsx";
import Home from "./pages/home/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import TheProcess from "./pages/TheProcess.jsx";
import Contact from "./pages/Contact.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavbarManager />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="the-process" element={<TheProcess />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
