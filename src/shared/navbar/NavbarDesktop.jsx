import { Link } from "react-router-dom";
import "./style/Navbar.css";

const NavbarDesktop = ({ logoSrc, navLinks }) => {
  return (
    <div className="horizontal-page-padding my-bg-primary fixed z-50 flex h-14 w-full items-center justify-between">
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
      </ul>
    </div>
  );
};

export default NavbarDesktop;
