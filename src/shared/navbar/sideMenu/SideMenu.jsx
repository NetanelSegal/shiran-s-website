import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const SideMenu = ({ navLinks, setIsOpen, isOpen, btnExitRef }) => {
  const ref = useRef(null);

  const variants = {
    close: { opacity: 0, y: "-100%" },
    open: { opacity: 1, y: "0" },
  };
  const handleClickOutside = ({ target }) => {
    console.log(target);
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

  return (
    <motion.ul
      ref={ref}
      variants={variants}
      initial="close"
      animate="open"
      exit="close"
      transition={{ duration: 0.8, ease: "backInOut" }}
      className="absolute left-0 right-0 top-14 -z-10 flex flex-col items-center gap-5 bg-white py-8 text-right"
    >
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
    </motion.ul>
  );
};

export default SideMenu;
