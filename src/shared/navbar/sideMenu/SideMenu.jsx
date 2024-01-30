import { Link } from "react-router-dom";

const SideMenu = ({ navLinks }) => {
  return (
    <ul className="absolute left-0 right-0 top-14 z-10 flex flex-col items-center gap-5 bg-white py-5 text-right">
      {navLinks.map((e) => (
        <li key={e.path}>
          {e.path === "/contact" ? (
            <button className="my-btn-secondary">{e.title}</button>
          ) : (
            <Link to={e.path}>{e.title}</Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SideMenu;
