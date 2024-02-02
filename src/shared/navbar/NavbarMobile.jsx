import React, { useRef, useState } from "react";
import "./style/Navbar.css";
import SideMenu from "./sideMenu/SideMenu";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const NavbarMobile = ({ logoSrc, navLinks }) => {
  const [isSideMenuOn, setiIsSideMenuOn] = useState(false);
  const btnExitRef = useRef(null);
  const handleOnClick = () => {
    setiIsSideMenuOn((prevState) => !prevState);
  };

  return (
    <div className="fixed left-0 right-0 z-50">
      <div className="horizontal-page-padding my-bg-primary z-40 flex h-14 w-full items-center justify-between">
        <Link to={`/`}>
          <img className="h-10" src={logoSrc} alt="" />
        </Link>
        <button
          ref={btnExitRef}
          onClick={handleOnClick}
          className="my-bg-secondary px-3 py-1 text-xl text-black "
        >
          {isSideMenuOn ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
      </div>
      <AnimatePresence>
        {isSideMenuOn && (
          <SideMenu
            btnExitRef={btnExitRef}
            setIsOpen={setiIsSideMenuOn}
            isOpen={isSideMenuOn}
            navLinks={navLinks}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMobile;
