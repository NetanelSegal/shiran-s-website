import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const PageTransition = ({ children }) => {
  const [isAnimation, setIsAnimation] = useState(true);
  const variants = {
    initial: {
      opacity: 0,
      x: "100%",
    },
    animate: {
      x: "0%",
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 1 },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { staggerChildren: 0.5, duration: 1 },
    },
  };
  console.log(children);
  return (
    <>
      <AnimatePresence>
        {isAnimation && (
          <motion.div
            className="my-bg-secondary relative flex h-screen items-center justify-center"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            onAnimationComplete={() => setIsAnimation(false)}
          >
            <motion.div
              className="my-bg-primary absolute inset-0"
              variants={variants}
            ></motion.div>
            <h5 className="">loading page...</h5>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
};

export default PageTransition;
