import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";

const DRAG_DISTANCE = 30;

const FavoriteProjectsCarousel = ({ projects }) => {
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

  return (
    <div>
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
            animate={{
              scale: currProjectIndex != i ? 0.9 : 1,
              filter: currProjectIndex != i ? "blur(5px)" : "blur(0px)",
            }}
            transition={{
              duration: 0.5,
              ease: "linear",
            }}
            key={data.title + i}
            className="aspect-video shrink-0 cursor-pointer overflow-hidden rounded-xl"
          >
            <img
              draggable="false"
              width="100%"
              className="object-cover transition-all duration-300 ease-in-out hover:scale-125"
              src={data.img}
              alt=""
              key={i}
            />
          </motion.div>
        ))}
      </motion.div>
      {/* buttons container */}
      <div className="flex flex-col items-center justify-end gap-1 sm:flex-row">
        <div className="my-bg-primary w-full grow flex-row self-stretch rounded-xl py-1 pl-4 pr-4 text-white sm:w-auto">
          <h6>{projects[currProjectIndex].title}</h6>
        </div>
        <div className="flex flex-nowrap ">
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
          <button className="my-btn-secondary btn-effect">עוד פרוייקטים</button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteProjectsCarousel;
