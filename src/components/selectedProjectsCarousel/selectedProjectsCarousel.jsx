import { useState } from "react";
import { motion } from "framer-motion";

const SelectedProjectsCarousel = ({ projectsData }) => {
  const [currMiddle, setCurrMiddle] = useState(1);

  const variants = {
    right: {
      scale: 0.9,
      x: "98%",
      zIndex: 0,
      filter: "blur(5px)",
      opacity: 1,
    },
    middle: { scale: 1, x: "0", zIndex: 5, filter: "blur(0px)", opacity: 1 },
    left: {
      scale: 0.9,
      x: "-98%",
      zIndex: -5,
      filter: "blur(5px)",
      opacity: 1,
    },
    hidden: {
      scale: 0.9,
      opacity: 0,
      zIndex: -10,
      x: "200%",
      filter: "blur(5px)",
    },
  };

  const initialVariants = ["left", "middle", "right", "hidden"];

  const [variantsState, setVariantsState] = useState(initialVariants);

  const handleLeftOnCLick = () => {
    setCurrMiddle((prevState) =>
      prevState == 0 ? projectsData.length - 1 : prevState - 1,
    );

    setVariantsState((prev) => {
      const shiftedElement = prev.shift(); // Remove the first element
      prev.push(shiftedElement); // Add it to the end
      return [...prev]; // Create a new array to trigger the state update
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0, duration: 1.2, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      {/* images */}
      <div className="relative mb-1 aspect-video w-full">
        {projectsData?.map((data, i) => (
          <motion.div
            key={i}
            variants={variants}
            initial={initialVariants[i]}
            animate={variantsState[i]}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="absolute top-0 aspect-video overflow-hidden rounded-xl"
          >
            <img
              className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-125"
              src={data.img}
              alt=""
              key={i}
            />
          </motion.div>
        ))}
      </div>
      {/* buttons container */}
      <div className="flex flex-col items-center justify-end gap-1 sm:flex-row ">
        <div className="my-bg-primary w-full grow flex-row rounded-xl py-1 pl-4 pr-4 text-white sm:w-auto">
          <h5>{projectsData[currMiddle].title}</h5>
        </div>
        <div className="flex flex-nowrap ">
          <button
            onClick={handleLeftOnCLick}
            className="my-btn-primary btn-effect ml-1"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="my-btn-secondary btn-effect">עוד פרוייקטים</button>
        </div>
      </div>
    </motion.div>
  );
};

export default SelectedProjectsCarousel;
