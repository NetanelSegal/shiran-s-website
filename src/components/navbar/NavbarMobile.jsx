import React, { useState } from "react";
import "./style/Navbar.css";
import SideMenu from "./sideMenu/SideMenu";
import { Link } from "react-router-dom";

const NavbarMobile = ({ logoSrc }) => {
  const [isSideMenuOn, setiIsSideMenuOn] = useState(false);
  const handleOnClick = () => {
    setiIsSideMenuOn((prevState) => !prevState);
  };
  return (
    <div className="page-padding my-bg-primary flex h-14 items-center justify-between">
      <Link to={`/`}>
        <img className="h-10" src={logoSrc} alt="" />
      </Link>
      <button
        onClick={handleOnClick}
        className="my-bg-secondary px-3 py-1 text-xl text-black "
      >
        {isSideMenuOn ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}

        {isSideMenuOn && <SideMenu />}
      </button>
    </div>
  );
};

export default NavbarMobile;
