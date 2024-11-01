import { motion } from "framer-motion";
import FavoriteProjectsCarousel from "../../../shared/favoriteProjectsCarousel/FavoriteProjectsCarousel";

const ProjectsSection = () => {
  const enterAnimationVariants = {
    from: { opacity: 0 },
    to: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut", staggerChildren: 0.3 },
    },
  };

  return (
    <section className="horizontal-page-padding overflow-hidden bg-white">
      <motion.div
        variants={enterAnimationVariants}
        initial="from"
        whileInView="to"
        viewport={{ once: true }}
        className="mb-5 items-end gap-2"
      >
        <FavoriteProjectsCarousel />
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
