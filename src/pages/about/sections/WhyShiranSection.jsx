import { motion } from "framer-motion";

const WhyShiranSection = () => {
  const variants = {
    from: { opacity: 0, y: 200 },
    to: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.2 },
    },
  };

  return (
    <motion.section
      variants={variants}
      initial="from"
      whileInView="to"
      viewport={{ once: true }}
      className="horizontal-page-padding section overflow-hidden"
    >
      <motion.h2
        variants={variants}
        className="mb-10 text-center text-5xl font-bold md:text-7xl"
      >
        אני רוצה שתחיו את הבית שלכם כל יום מחדש
      </motion.h2>
      <motion.div
        variants={variants}
        className="lg:1/3 w-full sm:w-2/3 md:w-1/2"
      >
        <h5 className="mb-5">
          אני אוהבת למצוא פתרונות לצרכים אנשים בגלל זה הגעתי למקצוע, כדי לפתור
          את החידות האלה ולגרום לאנשים להרגיש מקסימום נוחות בבית
        </h5>
        <h5>
          אני אוהבת למצוא פתרונות לצרכים אנשים בגלל זה הגעתי למקצוע, כדי לפתור
          את החידות האלה ולגרום לאנשים להרגיש מקסימום נוחות בבית
        </h5>
      </motion.div>
    </motion.section>
  );
};

export default WhyShiranSection;
