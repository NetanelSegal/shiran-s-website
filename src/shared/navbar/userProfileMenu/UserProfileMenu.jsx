import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../../context/UserContext";

const UserProfileMenu = ({ onExit, isOpen, setIsOpen }) => {
  const variants = {
    close: { opacity: 0, y: "-20%" },
    open: { opacity: 1, y: "0" },
  };

  const btnExitRef = useRef(null);
  const ref = useRef(null);

  const handleClickOutside = ({ target }) => {
    if (
      isOpen &&
      ref?.current != target &&
      !btnExitRef?.current.contains(target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // user management
  const { user, setUser } = useUser();
  const nav = useNavigate();

  const onLogout = () => {
    document.cookie = "token=;expires=" + new Date(2000, 0, 0, 0);
    setUser(null);
    nav("/");
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="close"
      animate="open"
      exit="close"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-10 top-16 z-50 rounded-2xl bg-white p-5 text-center text-black md:left-20 lg:left-24 xl:left-[13%]"
    >
      {/* if user connected */}
      {user?.username ? (
        <>
          <div className="px-5 text-right">
            <h6>
              <strong>שם משתמש:</strong> {user.username}
            </h6>
            <h6>
              <strong>רול: </strong> {user.role}
            </h6>
          </div>
          {(user.role == "developer" || user.role == "admin") && (
            <>
              <button className="my-btn-primary mt-2 w-full px-10 hover:text-white">
                <Link to={"/admin"}>עמוד מנהל</Link>
              </button>
              <br />
            </>
          )}
          <button
            onClick={onLogout}
            className="my-btn-secondary  my-2 w-full px-10 hover:text-white"
          >
            התנתק
          </button>
        </>
      ) : (
        <>
          {/* if user NOT connected */}
          <button className="my-btn-primary mb-2 mt-4 w-full hover:text-white">
            <Link to={"/login"}>משתמש קיים</Link>
          </button>
          <br />
          <Link to={"/signup"}>משתמש חדש</Link>
        </>
      )}
      <button
        ref={btnExitRef}
        onClick={onExit}
        className="absolute right-3 top-2 bg-transparent p-0 text-black"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </motion.div>
  );
};

export default UserProfileMenu;
