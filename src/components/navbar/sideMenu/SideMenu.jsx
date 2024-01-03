import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <ul className="absolute left-0 right-0 top-14 z-10 flex flex-col items-center gap-5 bg-white py-5 text-right">
      <li>
        <Link to={`/`}>בית</Link>
      </li>
      <li>
        <Link to={`/projects`}>פרוייקטים</Link>
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
  );
};

export default SideMenu;
