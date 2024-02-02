import { motion } from "framer-motion";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Project = ({ data, i }) => {
  const textContainerVariants = {
    fromRight: {
      opacity: 0,
      x: "50%",
    },
    fromLeft: {
      opacity: 0,
      x: "-50%",
    },
    to: {
      opacity: 1,
      x: "0",
      transition: {
        type: "spring",
        duration: 1,
        stiffness: 70,
        staggerChildren: 0.05,
      },
    },
  };

  const projectContainerRef = useRef(null);
  const imgVariants = {
    fromRight: {
      opacity: 0,
    },
    fromLeft: {
      opacity: 0,
    },
    to: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  const className =
    "lg:gap-3" +
    (i == 0 ? " mt-10 " : " my-16 lg:my-20 ") +
    (i % 2 == 0 ? "lg:flex " : "lg:flex-row-reverse lg:flex ");

  return (
    <div ref={projectContainerRef} className={className}>
      {/* image containers */}
      <motion.div
        variants={imgVariants}
        initial={i % 2 == 0 ? "fromRight" : "fromLeft"}
        whileInView="to"
        className="z-20 aspect-video overflow-hidden rounded-xl lg:w-2/3"
      >
        <img
          className="h-full w-full cursor-pointer object-cover transition-all duration-300  ease-in-out
        hover:scale-125"
          src={data.image}
          alt={"Project " + data.title + " image"}
        />
      </motion.div>
      {/* text containers */}

      <motion.div
        variants={textContainerVariants}
        initial={i % 2 == 0 ? "fromRight" : "fromLeft"}
        whileInView="to"
        className="lg:w-1/3"
      >
        <motion.h4 variants={textContainerVariants} className="font-semibold">
          {data.title}
        </motion.h4>
        <motion.p variants={textContainerVariants}>
          <strong>שנה: </strong>
          {data.year}
        </motion.p>
        <motion.div
          variants={textContainerVariants}
          className="flex flex-wrap gap-1"
        >
          {data.tags.map((tag) => (
            <motion.p
              variants={textContainerVariants}
              key={tag + i}
              className="my-bg-secondary rounded-lg px-3
          py-1 text-sm font-semibold"
            >
              {tag}
            </motion.p>
          ))}
        </motion.div>
        <motion.p variants={textContainerVariants}>
          <strong>תיאור הפרוייקט: </strong>
          <br /> {data.description}
          <Link className="font-semibold">עוד על הפרויקט</Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Project;
