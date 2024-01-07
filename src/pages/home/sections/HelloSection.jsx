import shiranImgSrc from "../../../assets/images/header-section-img.png";
import imgBgSrc from "../../../assets/shapes/header-section-shape.svg";
import { motion } from "framer-motion";

const HelloSection = () => {
  const variants = {
    from: { opacity: 0, y: 300 },
    to: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.2 } },
  };

  return (
    <section
      className="horizontal-page-padding section flex h-dvh items-center
    justify-center overflow-hidden"
    >
      <motion.div
        variants={variants}
        initial="from"
        whileInView="to"
        className="flex flex-col items-end justify-center md:flex-row md:gap-5"
      >
        {/* image container */}
        <motion.div
          variants={variants}
          className="relative mx-auto h-[480px] w-[400px] max-w-[90%] overflow-y-hidden md:m-0 md:w-[320px] lg:h-[500px] lg:w-[400px] lg:max-w-[600px]"
        >
          <img
            className="absolute bottom-0 left-1/2 w-11/12 -translate-x-1/2"
            src={imgBgSrc}
            alt=""
          />
          <img
            className="absolute bottom-0 left-0 h-[450px] object-contain object-bottom"
            src={shiranImgSrc}
            alt=""
          />
        </motion.div>
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
