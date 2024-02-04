import { motion } from "framer-motion";
// import heroVideoSrc from "../../../assets/hero-video.mp4";

const HeroSection = () => {
  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  const heroVideoSrc =
    "https://www.youtube.com/embed/N-UhnCYRSy4?si=gE7ia2fBW3prgvrY&amp;controls=0";

  return (
    <section className="relative overflow-hidden">
      <motion.iframe
        variants={variants}
        initial="initial"
        animate="animate"
        className="h-[70dvh] max-h-dvh min-h-[700px] min-w-full object-cover sm:aspect-video sm:w-full lg:h-full"
        width="100%"
        src="https://www.youtube.com/embed/N-UhnCYRSy4?si=gE7ia2fBW3prgvrY&amp;controls=0&loop=1&autoplay=1&mute=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></motion.iframe>
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
