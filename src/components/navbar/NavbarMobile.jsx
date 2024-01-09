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
    <div
      onClick={() => {
        if (isSideMenuOn) {
          setiIsSideMenuOn(false);
        }
      }}
      className="fixed left-0 right-0 z-50"
    >
      <div className="horizontal-page-padding my-bg-primary  flex h-14 w-full items-center justify-between">
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
        </button>
      </div>
      {isSideMenuOn && <SideMenu />}
    </div>
  );
};

export default NavbarMobile;
