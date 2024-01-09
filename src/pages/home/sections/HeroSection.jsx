import { motion } from "framer-motion";
import heroVideoSrc from "../../../assets/hero-video.mp4";

const HeroSection = () => {
  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative overflow-hidden">
      <motion.video
        variants={variants}
        initial="initial"
        animate="animate"
        className="h-[70dvh] max-h-dvh min-w-full object-cover sm:aspect-video sm:w-full lg:h-full"
        src={heroVideoSrc}
        autoPlay
        loop
        muted
      ></motion.video>
      <motion.h1
        variants={variants}
        initial="initial"
        animate="animate"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-8xl font-bold text-white drop-shadow-xl"
      >
        מגה כותרת
      </motion.h1>
    </section>
  );
};

export default HeroSection;
