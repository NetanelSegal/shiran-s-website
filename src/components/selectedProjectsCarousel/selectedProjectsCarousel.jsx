import React, { useEffect, useState } from "react";
import src1 from "../../assets/selectedProjectsImages/1.jpg";
import src2 from "../../assets/selectedProjectsImages/2.jpg";
import src3 from "../../assets/selectedProjectsImages/3.jpg";
import src4 from "../../assets/selectedProjectsImages/4.jpg";
import { motion } from "framer-motion";

const SelectedProjectsCarousel = () => {
  const [selectedIndexMiddle, setSelectedIndexMiddle] = useState(1);

  const selectedProjData = [
    {
      img: src1,
      title: "Modern Residence",
      description:
        "A contemporary residential project featuring sleek design, open spaces, and state-of-the-art technology. Embracing minimalism with a touch of luxury, this modern residence is a perfect blend of aesthetics and functionality.",
    },
    {
      img: src2,
      title: "Urban Renewal",
      description:
        "Revitalizing urban spaces with innovative design solutions. This project focuses on sustainable architecture, transforming outdated structures into vibrant, eco-friendly environments that harmonize with the cityscape.",
    },
    {
      img: src3,
      title: "Cozy Retreat",
      description:
        "Creating a cozy haven with warmth and charm. This residential project emphasizes comfort and intimacy, combining natural elements with contemporary design to provide a tranquil retreat from the hustle and bustle of daily life.",
    },
    {
      img: src4,
      title: "Commercial Oasis",
      description:
        "Designing a commercial oasis that inspires productivity and creativity. This project redefines workspaces with cutting-edge design, incorporating collaborative zones and breakout areas to foster a dynamic and engaging work environment.",
    },
  ];

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
    setSelectedIndexMiddle((prevState) =>
      prevState == 0 ? selectedProjData.length - 1 : prevState - 1,
    );

    setVariantsState((prev) => {
      const shiftedElement = prev.shift(); // Remove the first element
      prev.push(shiftedElement); // Add it to the end
      return [...prev]; // Create a new array to trigger the state update
    });
  };

  useEffect(() => {
    console.log(variantsState);
  }, [variantsState]);

  return (
    <>
      {/* images */}
      <div className="relative mb-1 aspect-video w-full">
        {selectedProjData.map((data, i) => (
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
          <h5>{selectedProjData[selectedIndexMiddle].title}</h5>
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
    </>
  );
};

export default SelectedProjectsCarousel;

const getCurrentPosition = (selectedIndexMiddle, selectedProjData, i) => {
  if (selectedIndexMiddle == 0) {
  }
  return (
    (selectedIndexMiddle == 0
      ? i == selectedProjData.length - 1 && "right"
      : i == selectedIndexMiddle - 1 && "right") ||
    (i == selectedIndexMiddle && "middle") ||
    (selectedIndexMiddle == selectedProjData.length - 1
      ? i == 0 && "left"
      : i == selectedIndexMiddle + 1 && "left") ||
    "hidden"
  );
};
