import React, { useContext, useEffect, useState } from "react";
import logoSrc from "../../assets/shiran_logo.svg";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { Outlet } from "react-router-dom";

const NavbarManager = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setScreenWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []); // empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <>
      {screenWidth <= 1024 ? (
        <NavbarMobile logoSrc={logoSrc} />
      ) : (
        <NavbarDesktop logoSrc={logoSrc} />
      )}
      <Outlet />
    </>
  );
};

export default NavbarManager;
