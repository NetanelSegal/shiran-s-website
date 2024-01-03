import { Link } from "react-router-dom";
import "./style/Navbar.css";

const NavbarDesktop = ({ logoSrc }) => {
  return (
    <div className="page-padding my-bg-primary flex h-14 items-center justify-between">
      <Link to={`/`}>
        <img className="h-10" src={logoSrc} alt="" />
      </Link>

      <ul className="flex items-center gap-5 text-white">
        <li>
          <Link to={`/`}>בית</Link>
        </li>
        <li>
          <Link to={`/projects`}>
            <p>פרוייקטים</p>
          </Link>
        </li>
        <li>
          <Link to={`/about`}>עוד עלי</Link>
        </li>
        <li>
          <Link to={`/the-process`}>תהליך</Link>
        </li>
        <li>
          <Link to={`/contact`}>
            <button className="my-btn-secondary">צור/י קשר</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarDesktop;
