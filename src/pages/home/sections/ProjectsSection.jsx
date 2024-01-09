import { motion } from "framer-motion";
import SelectedProjectsCarousel from "../../../components/selectedProjectsCarousel/SelectedProjectsCarousel";

const ProjectsSection = () => {
  const enterAnimationVariants = {
    from: { opacity: 0, y: 300 },
    to: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      whileInView="to"
      initial="from"
      variants={enterAnimationVariants}
      viewport={{ once: true }}
      className="horizontal-page-padding section overflow-hidden"
    >
      <div className="mb-5 items-end gap-2">
        <h2 className="font-bold">בונה חלומות</h2>
        <h5>הפרוייקטים מנצחים שלי</h5>
      </div>

      <SelectedProjectsCarousel />
    </motion.section>
  );
};

export default ProjectsSection;
