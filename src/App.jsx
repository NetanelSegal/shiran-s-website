import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarManager from "./components/navbar/NavbarManager.jsx";
import Home from "./pages/home/Home.jsx";
import Projects from "./pages/projects/Projects.jsx";
import About from "./pages/about/About.jsx";
import TheProcess from "./pages/theProcess/TheProcess.jsx";
import Contact from "./pages/contact/Contact.jsx";
import "./appStyle/App.css";

function App() {
  return (
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
    </BrowserRouter>
  );
}

export default App;
