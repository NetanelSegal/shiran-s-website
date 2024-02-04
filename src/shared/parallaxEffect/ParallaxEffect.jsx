import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxEffect = ({ stiffness = "50%", children, ref }) => {
  const useParallax = (value, distance) => {
    return useTransform(value, [0, 1], ["0%", distance]);
  };
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useParallax(scrollYProgress, stiffness);

  return (
    <motion.div className="h-full w-full" style={{ y }}>
      {children}
    </motion.div>
  );
};

export default ParallaxEffect;
