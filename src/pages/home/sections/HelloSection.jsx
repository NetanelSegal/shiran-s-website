import { motion } from "framer-motion";
import HelloSectionImage from "../../../components/helloSectionImage/HelloSectionImage";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const HelloSection = () => {
  const nav = useNavigate();

  const sectionRef = useRef(null);
  const variants = {
    from: { opacity: 0, y: 300 },
    to: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section
      ref={sectionRef}
      className="horizontal-page-padding section items-center justify-center
    overflow-hidden sm:flex"
    >
      <motion.div
        variants={variants}
        initial="from"
        whileInView="to"
        viewport={{ once: true }}
        className="flex flex-col items-end justify-center md:flex-row md:gap-5"
      >
        {/* image container */}
        <HelloSectionImage sectionRef={sectionRef} />
        {/* text container */}
        <motion.div
          variants={variants}
          className="max-w-[600px]
          md:w-[320px] md:translate-y-1/4 lg:w-[400px] lg:max-w-[600px]  lg:translate-y-0"
        >
          <h2 className="my-2 font-semibold">שירן גלעד</h2>
          <p className="my-2">
            עוסקת באדריכלות ועיצוב פנים משנת 2015. <br />
            מתמחה בתכנון בתים פרטיים, דירות יוקרה, ופנטהאוזים. המטרה שלי היא
            לתכנן עבורכם את הבית שתמיד חלמתם עליו, עם דגש על הפרטים הקטנים
            ביותר, שילוב בין חללים מדוייקים המתאימים לצרכים שלכם עם אסטטיקה
            עיצובית ופרקטיקה.
          </p>
          <div>
            <button
              onClick={() => nav("/about")}
              className="my-btn-primary btn-effect ml-2"
            >
              עוד עלי
            </button>
            <button
              onClick={() => nav("/projects")}
              className="my-btn-secondary btn-effect"
            >
              פרוייקטים
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HelloSection;
