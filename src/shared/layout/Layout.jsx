import { Outlet } from "react-router-dom";
import NavbarManager from "../navbar/NavbarManager";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
      <NavbarManager />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
