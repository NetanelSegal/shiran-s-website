import { motion } from "framer-motion";
import SelectedProjectsCarousel from "../../../components/selectedProjectsCarousel/SelectedProjectsCarousel";
const ProjectsSection = () => {
  const enterAnimationVariants = {
    from: { y: 200, opacity: 0 },
    to: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut", staggerChildren: 0.2 },
    },
  };

  return (
    <section className="section h-dvh">
      <motion.div
        whileInView="to"
        initial="from"
        variants={enterAnimationVariants}
        className="mb-5 items-end gap-2"
      >
        <h2 className="font-bold">בונה חלומות</h2>
        <h5>הפרוייקטים מנצחים שלי</h5>
      </motion.div>

      <SelectedProjectsCarousel />
    </section>
  );
};

export default ProjectsSection;
