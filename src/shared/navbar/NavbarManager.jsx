import { useContext, useEffect, useState } from "react";
import logoSrc from "../../assets/shiran_logo.svg";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { AppContext } from "../../context/AppContext";

const NavbarManager = () => {
  const { user } = useContext(UserContext);
  const { screenWidth } = useContext(AppContext);

  const navLinks = [
    { path: "/", title: "בית" },
    { path: "/projects", title: "פרוייקטים" },
    { path: "/about", title: "עוד עלי" },
    { path: "/the-process", title: "תהליך" },
    { path: "/contact", title: "צור/י קשר" },
  ];

  const navLinksAdmin = [
    { path: "/", title: "בית" },
    { path: "/projects", title: "פרוייקטים" },
    { path: "/about", title: "עוד עלי" },
    { path: "/the-process", title: "תהליך" },
    { path: "/edit-projects", title: "עריכת פרוייקטים" },
    { path: "/contact", title: "צור/י קשר" },
  ];

  return (
    <>
      {screenWidth <= 1024 ? (
        <NavbarMobile
          logoSrc={logoSrc}
          navLinks={user?.role === "admin" ? navLinksAdmin : navLinks}
        />
      ) : (
        <NavbarDesktop
          logoSrc={logoSrc}
          navLinks={user?.role === "admin" ? navLinksAdmin : navLinks}
        />
      )}
    </>
  );
};

export default NavbarManager;
