import { motion } from "framer-motion";
import heroVideoSrc from "../../../assets/hero-video.mp4";

const HeroSection = () => {
  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  return (
    <motion.section
      variants={variants}
      initial="initial"
      animate="animate"
      className="relative aspect-video max-h-dvh w-full overflow-hidden"
    >
      <video src={heroVideoSrc} autoPlay loop muted></video>
      <motion.h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-white drop-shadow-xl">
        מגה כותרת
      </motion.h1>
    </motion.section>
  );
};

export default HeroSection;

// const HeroSection = () => {
//   const variants = {
//     initial: { opacity: 0 },
//     animate: {
//       opacity: 1,
//       transition: { duration: 0.8, staggerChildren: 0.2 },
//     },
//   };

//   const textVariants = {
//     initial: { opacity: 0 },
//     animate: {
//       opacity: 1,
//       transition: { duration: 0.8, staggerChildren: 0.2 },
//     },
//   };

//   return (
//     <motion.section
//       variants={variants}
//       initial="initial"
//       animate="animate"
//       className="relative aspect-video max-h-dvh w-full"
//     >
//       <video src={heroVideoSrc} autoPlay loop muted></video>
//       <motion.h1
//         variants={textVariants}
//         initial="initial"
//         animate="animate"
//         className="absolute left-1/2 top-1/2
//         -translate-x-1/2 -translate-y-1/2 text-8xl
//         font-bold text-white
//       opacity-70 drop-shadow-xl"
//       >
//         מגה כותרת
//       </motion.h1>
//     </motion.section>
//   );
// };

// export default HeroSection;
