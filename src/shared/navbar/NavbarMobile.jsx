import React, { useRef, useState } from "react";
import SideMenu from "./sideMenu/SideMenu";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import srcIconUser from "../../assets/icons/user.svg";
import UserProfileMenu from "./userProfileMenu/UserProfileMenu";
import "./style/Navbar.css";

const NavbarMobile = ({ logoSrc, navLinks }) => {
  const [isSideMenuOn, setIsSideMenuOn] = useState(false);
  const [isUserMenuOn, setIsUserMenuOn] = useState(false);
  const btnExitRef = useRef(null);

  const handleMenuOnClick = () => {
    setIsSideMenuOn((prevState) => !prevState);
  };

  const handleUserMenuOnClick = () => {
    setIsUserMenuOn((prevState) => !prevState);
  };

  return (
    <div className="fixed left-0 right-0 z-50">
      <div className="horizontal-page-padding my-bg-primary z-40 flex h-14 w-full items-center justify-between">
        <Link to={`/`}>
          <img className="h-10" src={logoSrc} alt="" />
        </Link>
        <div className="flex gap-2">
          <img
            className="cursor-pointer"
            onClick={handleUserMenuOnClick}
            width="40"
            src={srcIconUser}
            alt={"user icon"}
          />

          <button
            ref={btnExitRef}
            onClick={handleMenuOnClick}
            className="my-bg-secondary px-3 py-1 text-xl text-black "
          >
            {isSideMenuOn ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isSideMenuOn && (
          <SideMenu
            btnExitRef={btnExitRef}
            setIsOpen={setIsSideMenuOn}
            isOpen={isSideMenuOn}
            navLinks={navLinks}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isUserMenuOn && (
          <UserProfileMenu
            setIsOpen={setIsUserMenuOn}
            isOpen={isUserMenuOn}
            onExit={handleUserMenuOnClick}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMobile;
