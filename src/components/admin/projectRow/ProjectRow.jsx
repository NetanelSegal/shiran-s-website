import { useContext, useEffect, useRef, useState } from "react";
import { urls } from "../../../constants/urls";
import ImagesMenu from "../imagesMenu/ImagesMenu.jsx";
import { useNavigate } from "react-router-dom";
import { updateProject } from "../../../utils/adminFunctions.js";
import { apiDelete } from "../../../utils/apiRequests.js";
import { AppContext } from "../../../context/AppContext.jsx";

const ProjectRow = ({ data, catsObj }) => {
  const { setProjectsData, setIsLoading } = useContext(AppContext);
  const inputFavouriteRef = useRef();
  const nav = useNavigate();
  const [isImgsMenuOpen, setIsImgsMenuOpen] = useState(false);

  const handleEdit = () => {
    nav(`edit-project/${data._id}`);
  };

  const getProjects = async () => {
    const { data } = await apiGet(urls.projects);
    setProjectsData(data);
    setIsLoading(false);
  };

  const handleDelete = async () => {
    const id = data._id;
    const isConfirmed = confirm(
      `בטוחה שאת רוצה למחוק את "${data.title}" מהפרוייקטים שלך?`,
    );
    if (!isConfirmed) return alert("הפרוייקט לא נמחק");
    setIsLoading(true);
    try {
      const { data } = await apiDelete(`${urls.projects}/${id}`);
      console.log(data);
      getProjects();
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputFavourite = async (e) => {
    const {
      _id,
      categories,
      client,
      constructionArea,
      description,
      favourite,
      images,
      isCompleted,
      location,
      mainImage,
      title,
    } = data;
    try {
      const body = {
        categories,
        client,
        constructionArea,
        description,
        favourite: e.target.checked,
        images,
        isCompleted,
        location,
        mainImage,
        title,
      };
      const data = await updateProject(body, _id);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImgsMenu = () => {
    setIsImgsMenuOpen((p) => !p);
  };

  useEffect(() => {
    inputFavouriteRef.current.checked = data.favourite;
  }, []);

  return (
    <>
      <tr valign="top" className="border-b-2 text-right">
        <th className="border-l-2 border-r-2 p-2">{data.title}</th>
        <td className="border-l-2 p-2">{data.description}</td>

        <td className="border-l-2 p-2">
          {data.categories.map((c) => (
            <p key={c}>{catsObj[c]}</p>
          ))}
        </td>
        <td className="border-l-2 p-2">{data.location}</td>
        <td className="border-l-2 p-2">{data.client}</td>
        <td className="border-l-2 p-2">
          {data.isCompleted ? "הושלם" : "בתהליך"}
        </td>
        <td className="border-l-2 p-2">{data.constructionArea} מר</td>
        {/* main image */}
        <td
          align="center"
          width="220px"
          height="100px"
          className="border-l-2 p-2"
        >
          {data.mainImage ? (
            <div className=" h-[130px] w-[200px] overflow-hidden rounded-xl ">
              <img
                className="max-h-[130px] rounded-xl object-cover transition-all duration-0 hover:absolute hover:scale-[120%]"
                width="200px"
                height="130px"
                src={`${urls.assets}/${data.mainImage}`}
                alt=""
              />
            </div>
          ) : (
            <span
              onClick={handleImgsMenu}
              className="cursor-pointer font-semibold underline"
            >
              הוספת תמונות
            </span>
          )}
        </td>
        {/* favourite */}
        <td className="border-l-2 border-r-2 p-2 text-center">
          <input
            ref={inputFavouriteRef}
            onChange={handleInputFavourite}
            type="checkbox"
          />
        </td>
        {/* buttons */}
        <td className="border-l-2 border-r-2 p-2">
          <div className="flex flex-wrap items-stretch justify-stretch gap-2">
            {isImgsMenuOpen && (
              <ImagesMenu
                id={data._id}
                imagesData={{
                  mainImage: data.mainImage,
                  images: data.images,
                  plans: data.plans,
                }}
                handleIsOpen={handleImgsMenu}
              />
            )}
            <button
              onClick={handleEdit}
              className="grow bg-green-700 font-semibold underline"
            >
              עריכה
            </button>
            <button
              onClick={handleImgsMenu}
              className="grow bg-slate-600 font-semibold underline"
            >
              תמונות
            </button>
            <button
              onClick={handleDelete}
              className="grow bg-red-500 font-semibold underline"
            >
              מחיקה
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProjectRow;
