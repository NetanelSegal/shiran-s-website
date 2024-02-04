import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useDrag } from "react-use-gesture";

const SelectedProjectsCarousel = ({ projectsData }) => {
  const [currMiddle, setCurrMiddle] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    right: {
      scale: 0.9,
      x: "98%",
      zIndex: 0,
      filter: "blur(5px)",
      opacity: 1,
    },
    middle: {
      scale: 1,
      x: "0",
      zIndex: 5,
      filter: "blur(0px)",
      opacity: 1,
    },
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

  const initialVariants = {
    right: {
      scale: 0.9,
      x: "98%",
      zIndex: 0,
      filter: "blur(5px)",
      opacity: 0,
    },
    middle: {
      scale: 1,
      x: "0",
      zIndex: 5,
      filter: "blur(0px)",
      opacity: 0,
    },
    left: {
      scale: 0.9,
      x: "-98%",
      zIndex: -5,
      filter: "blur(5px)",
      opacity: 0,
    },
    hidden: {
      scale: 0.9,
      opacity: 0,
      zIndex: -10,
      x: "200%",
      filter: "blur(5px)",
    },
  };

  const initialVariantsNames = ["left", "middle", "right", "hidden"];

  const [variantsState, setVariantsState] = useState(initialVariantsNames);

  const handleLeftOnCLick = () => {
    setIsAnimating(true);
    if (!isAnimating) {
      setCurrMiddle((prevState) =>
        prevState === 0 ? projectsData.length - 1 : prevState - 1,
      );

      setVariantsState((prev) => {
        const shiftedElement = prev.shift();
        prev.push(shiftedElement);
        return [...prev];
      });
    }
  };

  const bind = useDrag(
    ({ movement }) => {
      setIsAnimating(true);
      if (movement[0] > 0 && !isAnimating) {
        handleLeftOnCLick();
      }
    },
    {
      axis: "x",
    },
  );

  return (
    <div>
      {/* images */}
      <div ref={ref} {...bind()} className="relative mb-1 aspect-video w-full">
        {projectsData?.map((data, i) => (
          <motion.div
            key={i}
            variants={isInView ? variants : initialVariants}
            initial={{ opacity: 0 }}
            animate={variantsState[i]}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            onAnimationComplete={() => setIsAnimating(false)}
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
        <div className="my-bg-secondary absolute inset-0 -z-50 aspect-video overflow-hidden rounded-xl opacity-50 shadow-inner shadow-slate-700"></div>
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
    </div>
  );
};

export default SelectedProjectsCarousel;
