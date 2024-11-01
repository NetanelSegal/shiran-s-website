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
    console.log("ref?.current", ref?.current);
    console.log("target", target);

    console.log("clicked outside");

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
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="absolute left-0 right-0 top-14 flex flex-col items-center gap-5 bg-white py-8 text-right"
    >
      {navLinks.map((e) => (
        <Link className="z-20" key={e.path} to={e.path}>
          <li key={e.path}>
            {e.path === "/contact" ? (
              <button
                onClick={() => console.log("asd")}
                className="my-btn-primary"
              >
                {e.title}
              </button>
            ) : (
              e.title
            )}
          </li>
        </Link>
      ))}
    </motion.ul>
  );
};

export default SideMenu;
