import { useContext } from "react";
import logoSrc from "../../assets/shiran_logo.svg";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { UserContext } from "../../context/UserContext";
import { AppContext } from "../../context/AppContext";

const NavbarManager = () => {
  const { user } = useContext(UserContext);
  const { screenWidth } = useContext(AppContext);

  const navLinksUser = [
    { path: "/", title: "בית" },
    { path: "/projects", title: "פרויקטים" },
    { path: "/about", title: "עוד עלי" },
    { path: "/the-process", title: "תהליך" },
    { path: "/contact", title: "צור/י קשר" },
  ];

  const navLinksAdmin = [...navLinksUser];

  return (
    <>
      {screenWidth <= 1024 ? (
        <NavbarMobile
          logoSrc={logoSrc}
          navLinks={
            user?.role == "admin" || user?.role === "developer"
              ? navLinksAdmin
              : navLinksUser
          }
        />
      ) : (
        <NavbarDesktop
          logoSrc={logoSrc}
          navLinks={
            user?.role == "admin" || user?.role === "developer"
              ? navLinksAdmin
              : navLinksUser
          }
        />
      )}
    </>
  );
};

export default NavbarManager;
