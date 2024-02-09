import { Outlet } from "react-router-dom";
import NavbarManager from "../navbar/NavbarManager";
import Footer from "../footer/Footer";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import { useEffect } from "react";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <NavbarManager />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
