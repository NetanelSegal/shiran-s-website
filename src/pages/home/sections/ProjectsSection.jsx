import { motion } from "framer-motion";
import { selectedProjData } from "./content/projectsSectionContent";
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
    <section className="horizontal-page-padding section overflow-hidden">
      <motion.div
        variants={enterAnimationVariants}
        initial="from"
        whileInView="to"
        viewport={{ once: true }}
        className="mb-5 items-end gap-2"
      >
        <motion.h2 variants={enterAnimationVariants} className="font-bold">
          הפרוייקטים שלנו
        </motion.h2>
        <FavoriteProjectsCarousel projects={selectedProjData} />
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
