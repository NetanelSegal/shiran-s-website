import { motion } from "framer-motion";
import SelectedProjectsCarousel from "../../../components/selectedProjectsCarousel/selectedProjectsCarousel";
import { selectedProjData } from "./content/projectsSectionContent";
import FavoriteProjectsCarousel from "../../../components/favoriteProjectsCarousel/FavoriteProjectsCarousel";

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
          בונה חלומות
        </motion.h2>
        <motion.h5 variants={enterAnimationVariants}>
          הפרוייקטים מנצחים שלי
        </motion.h5>
      </motion.div>
      <FavoriteProjectsCarousel projects={selectedProjData} />
    </section>
  );
};

export default ProjectsSection;
