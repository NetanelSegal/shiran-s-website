import { Link } from "react-router-dom";
import "./style/Navbar.css";
import srcIconUser from "../../assets/icons/user.svg";
import { useEffect, useState } from "react";
import UserProfileMenu from "./userProfileMenu/UserProfileMenu";
import { AnimatePresence } from "framer-motion";

const NavbarDesktop = ({ logoSrc, navLinks }) => {
  const [isUserMenuOn, setIsUserMenuOn] = useState(false);

  const handleUserMenuOnClick = () => {
    setIsUserMenuOn((prevState) => !prevState);
  };

  useEffect(() => {
    console.log(isUserMenuOn);
  }, [isUserMenuOn]);

  return (
    <>
      <div className="horizontal-page-padding my-bg-primary fixed z-40 flex h-14 w-full items-center justify-between">
        <Link to={`/`}>
          <img className="h-10" src={logoSrc} alt="" />
        </Link>

        <ul className="flex items-center gap-5 text-white">
          {navLinks.map((e) => (
            <li key={e.path}>
              {e.path === "/contact" ? (
                <Link to={e.path}>
                  <button className="my-btn-secondary">{e.title}</button>
                </Link>
              ) : (
                <Link to={e.path}>{e.title}</Link>
              )}
            </li>
          ))}
          <li className="relative">
            <img
              className="cursor-pointer"
              onClick={handleUserMenuOnClick}
              width="40"
              src={srcIconUser}
              alt={"user icon"}
            />
          </li>
        </ul>
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
    </>
  );
};

export default NavbarDesktop;
