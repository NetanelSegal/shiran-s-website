import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiGet } from "../../utils/apiRequests";
import { urls } from "../../constants/urls";
import { useDataContext } from "../../context/DataContext";
const DRAG_DISTANCE = 30;

const FavoriteProjectsCarousel = () => {
  const { favoriteProjects: projects, setFavoriteProjects: setProjects } =
    useDataContext();
  // const [projects, setProjects] = useState();
  const nav = useNavigate();

  // data fetching
  const getFavProjects = async () => {
    try {
      const { data } = await apiGet(urls.favProjects);
      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };

  // animation & interaction
  const [currProjectIndex, setCurrProjectIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragX = useMotionValue(0);

  const onLeftClick = () => {
    setCurrProjectIndex((prevState) =>
      prevState === projects.length - 1 ? 0 : prevState + 1,
    );
  };

  const onRightClick = () => {
    setCurrProjectIndex((prevState) =>
      prevState === 0 ? projects.length - 1 : prevState - 1,
    );
  };

  const onDragStart = () => {
    setIsDragging(true);
  };

  const onDragEnd = () => {
    setIsDragging(false);
    const draggedDistance = dragX.get();
    if (draggedDistance >= DRAG_DISTANCE) {
      onLeftClick();
    } else if (draggedDistance <= -DRAG_DISTANCE) {
      onRightClick();
    }
  };

  // useEffect(() => {
  //   getFavProjects();
  // }, []);

  if (!projects?.length) {
    return null;
  }

  const enterAnimationVariants = {
    from: { opacity: 0 },
    to: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut", staggerChildren: 0.3 },
    },
  };

  return (
    <div className="w-full">
      <motion.h2 variants={enterAnimationVariants} className="font-bold">
        הפרוייקטים שלנו
      </motion.h2>
      <h3 className="mb-5">הפרוייקטים המנצחים</h3>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        className="mb-1 flex aspect-video w-full"
        animate={{
          translateX: `${currProjectIndex * 100}%`,
        }}
        transition={{
          duration: 0.5,
          ease: "linear",
        }}
        style={{ x: dragX }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        {projects?.map((data, i) => (
          <motion.div
            key={data.title + i}
            animate={{
              scale: currProjectIndex != i ? 0.9 : 1,
              filter: currProjectIndex != i ? "blur(5px)" : "blur(0px)",
            }}
            transition={{
              duration: 0.5,
              ease: "linear",
            }}
            className="aspect-video w-full shrink-0 cursor-pointer overflow-hidden rounded-xl shadow-md"
          >
            <img
              onClick={() => nav(`/projects/${data._id}`)}
              draggable="false"
              width="100%"
              className="object-cover transition-all duration-300 ease-in-out hover:scale-125"
              src={`${urls.assets}/${data.mainImage}`}
              onError={(e) => {
                e.target.src = "https://placehold.co/600x400";
              }}
              alt="Sorry the image is not found"
              key={i}
            />
          </motion.div>
        ))}
      </motion.div>
      {/* buttons container */}
      <div className="flex flex-col items-center justify-end gap-1 pb-2 sm:flex-row">
        <div className="my-bg-primary w-full grow flex-row self-stretch rounded-xl py-1 pl-4 pr-4 text-white sm:w-auto">
          <h6>{projects[currProjectIndex].title}</h6>
        </div>
        <div className="flex flex-nowrap">
          <button
            onClick={onRightClick}
            className="my-btn-primary btn-effect ml-1"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          <button
            onClick={onLeftClick}
            className="my-btn-primary btn-effect ml-1"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            onClick={() => nav("/projects")}
            className="my-btn-secondary btn-effect"
          >
            עוד פרוייקטים
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteProjectsCarousel;
