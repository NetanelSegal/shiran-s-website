import { motion } from "framer-motion";
import React from "react";

const Project = ({ data, i }) => {
  const varients = {
    fromRight: {
      scale: 1.2,
      x: "-100%",
    },
    fromLeft: {
      scale: 1.2,
      x: "100%",
    },
    to: {
      scale: 1,
      x: "0",
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.05,
      },
    },
  };
  const className =
    "lg:gap-3" +
    (i == 0 ? " mt-10 " : " my-24 lg:my-36 ") +
    (i % 2 == 0 ? "lg:flex " : "lg:flex-row-reverse lg:flex ");
  return (
    <motion.div
      variants={varients}
      initial={i % 2 == 0 ? "fromRight" : "fromLeft"}
      whileInView="to"
      viewport={{ once: true }}
      className={className}
    >
      {/* image containers */}
      <motion.div
        variants={varients}
        className="aspect-video overflow-hidden rounded-xl lg:w-2/3"
      >
        <img
          className="h-full w-full cursor-pointer object-cover transition-all duration-300  ease-in-out
        hover:scale-125"
          src={data.image}
          alt=""
        />
      </motion.div>

      {/* text containers */}
      <motion.div variants={varients} className="lg:w-1/3">
        <motion.h4 variants={varients} className="font-semibold">
          {data.title}
        </motion.h4>
        <motion.p variants={varients}>
          <strong>שנה: </strong>
          {data.year}
        </motion.p>
        <motion.div variants={varients} className="flex flex-wrap gap-1">
          {data.tags.map((tag) => (
            <p
              key={tag + i}
              className="my-bg-secondary rounded-lg px-3
          py-1 text-sm font-semibold"
            >
              {tag}
            </p>
          ))}
        </motion.div>
        <motion.p variants={varients}>
          <strong>תיאור הפרוייקט: </strong>
          <br /> {data.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Project;
