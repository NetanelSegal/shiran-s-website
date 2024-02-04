import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ParallaxEffect = ({ stiffness = "50%", children, parentRef }) => {
  const useParallax = (value, distance) => {
    return useTransform(value, [0, 1], ["0%", distance]);
  };
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  const y = useParallax(scrollYProgress, stiffness);

  return (
    <motion.div className="h-full w-full" style={{ y }}>
      {children}
    </motion.div>
  );
};

export default ParallaxEffect;
