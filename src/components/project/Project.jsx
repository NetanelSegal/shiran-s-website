import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ParallaxEffect from "../../shared/parallaxEffect/ParallaxEffect";
import { urls } from "../../constants/urls";

const exampleProj = {
  title: "מסעדת פיצה בסגנון איטלקי",
  categories: ["מסעדות ובתי קפה", "עיצוב פנים"],
  description: "עיצוב מסעדת פיצה באווירה איטלקית אותנטית",
  mainImage: "https://example.com/image5.jpg",
  images: ["https://example.com/image5.jpg", "https://example.com/image6.jpg"],
  location: "רומא, איטליה",
  client: "מסעדת הפיצה 'בלו פיצה'",
  completionDate: {
    $date: "2023-12-20T00:00:00.000Z",
  },
  favourite: false,
};

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

  useEffect(() => {
    data.images.forEach((e) => console.log(urls.assets + "/" + e));
  }, []);

  return (
    <div ref={projectContainerRef} className={className}>
      {/* image containers */}
      <motion.div
        variants={imgVariants}
        initial={i % 2 == 0 ? "fromRight" : "fromLeft"}
        whileInView="to"
        viewport={{ once: true }}
        className="z-20 aspect-video overflow-hidden rounded-xl lg:w-2/3"
      >
        <ParallaxEffect stiffness={"-50%"} parentRef={projectContainerRef}>
          <img
            className="h-[150%] w-full cursor-pointer object-cover transition-all duration-300  ease-in-out
        hover:scale-125"
            src={data.image}
            alt={"Project " + data.title + " image"}
          />
        </ParallaxEffect>
      </motion.div>
      {/* text containers */}

      <motion.div
        variants={textContainerVariants}
        initial={i % 2 == 0 ? "fromRight" : "fromLeft"}
        whileInView="to"
        viewport={{ once: true }}
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
          {/* {data.tags.map((tag) => (
            <motion.p
              variants={textContainerVariants}
              key={tag + i}
              className="my-bg-secondary rounded-lg px-3
          py-1 text-sm font-semibold"
            >
              {tag}
            </motion.p>
          ))} */}
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
