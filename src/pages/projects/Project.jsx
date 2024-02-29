import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ParallaxEffect from "../../shared/parallaxEffect/ParallaxEffect";
import { urls } from "../../constants/urls";

const Project = ({ catsObj, data, i }) => {
  const nav = useNavigate();

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
    "lg:gap-3 my-20" +
    (i == 0 ? " mt-10 " : " my-16 lg:my-20 ") +
    (i % 2 == 0 ? "lg:flex " : "lg:flex-row-reverse lg:flex ");

  return (
    <div ref={projectContainerRef} className={className}>
      {/* image containers */}
      <AnimatePresence>
        <motion.div
          variants={imgVariants}
          initial={i % 2 == 0 ? "fromRight" : "fromLeft"}
          whileInView={"to"}
          viewport={{ once: true }}
          className="z-20 aspect-video overflow-hidden rounded-xl lg:w-2/3"
        >
          <ParallaxEffect stiffness={"-50%"} parentRef={projectContainerRef}>
            <img
              onClick={() => nav(`/projects/${data._id}`)}
              className="h-[150%] w-full cursor-pointer object-cover transition-all duration-300  ease-in-out
        hover:scale-125"
              src={`${urls.assets}/${data.mainImage}`}
              alt={"Project " + data.title + " image"}
            />
          </ParallaxEffect>
        </motion.div>
      </AnimatePresence>
      {/* text containers */}

      <motion.div
        variants={textContainerVariants}
        initial={i % 2 == 0 ? "fromRight" : "fromLeft"}
        whileInView="to"
        viewport={{ once: true }}
        className="my-2 lg:w-1/3"
      >
        <motion.h4 variants={textContainerVariants} className="font-semibold">
          {data.title}
        </motion.h4>
        <motion.p variants={textContainerVariants}>
          <strong>סטטוס: </strong>
          {data.isCompleted ? "הושלם" : "בתהליך"}
        </motion.p>
        <motion.div
          variants={textContainerVariants}
          className="my-1 flex flex-wrap gap-1"
        >
          {data.categories.map((catCode) => (
            <motion.p
              variants={textContainerVariants}
              key={catCode + i}
              className="my-bg-secondary rounded-lg px-3
          py-1 text-sm font-semibold"
            >
              {catsObj[catCode]}
            </motion.p>
          ))}
        </motion.div>
        <motion.p variants={textContainerVariants}>
          <strong>תיאור הפרוייקט: </strong>
          {data.description} <br />
          <Link
            to={`/projects/${data._id}`}
            className="font-semibold underline"
          >
            עוד על הפרויקט
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Project;
