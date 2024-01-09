import { motion } from "framer-motion";
import HelloSectionImage from "../../../components/helloSectionImage/HelloSectionImage";
import { useRef } from "react";

const HelloSection = () => {
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
          <h2 className="my-2 font-semibold">היי! אני שירן</h2>
          <p className="my-2">
            אדריכלית ומעצבת פנים, בתחום משנת 2015. התמחותי בעיצוב ותכנון של בתים
            פרטיים, דירות יוקרה, ופנטהאוזים. אצלי כל פרויקט הוא מיוחד ודורש
            מחשבה יצירתית, החל מהתכנון המדויק והפרקטי, ועד לבחירת גופי התאורה
            והכריות המתאימים.
          </p>
          <div>
            <button className="my-btn-primary btn-effect ml-2">
              צור/י קשר
            </button>
            <button className="my-btn-secondary btn-effect">פרוייקטים</button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HelloSection;
