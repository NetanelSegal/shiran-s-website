import { motion } from "framer-motion";
import shiranImgSrc from "../../../assets/images/header-section-img.png";
import imgBgSrc from "../../../assets/shapes/header-section-shape.svg";

const HelloSection = () => {
  const shiranImgVariants = {
    from: { y: 150, opacity: 0 },
    to: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const textContainerVariants = {
    from: { y: 200, opacity: 0 },
    to: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut", staggerChildren: 0.2 },
    },
  };

  return (
    <section className="section">
      <div className="flex flex-col items-end justify-center md:flex-row md:gap-5">
        {/* image container */}
        <div className="relative mx-auto h-[480px] w-[400px] max-w-[90%] overflow-y-hidden md:m-0 md:w-[320px] lg:h-[500px] lg:w-[400px] lg:max-w-[600px]">
          <motion.img
            initial={{ y: 100, x: "-53%" }}
            animate={{ y: 0, x: "-53%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/2 w-11/12"
            src={imgBgSrc}
            alt=""
          />
          <motion.img
            variants={shiranImgVariants}
            initial="from"
            animate="to"
            className="absolute bottom-0 left-0 h-[450px] object-contain object-bottom"
            src={shiranImgSrc}
            alt=""
          />
        </div>
        {/* text container */}
        <motion.div
          variants={textContainerVariants}
          initial="from"
          animate="to"
          className="max-w-[600px]
          md:w-[320px] md:translate-y-1/4 lg:w-[400px] lg:max-w-[600px]  lg:translate-y-0"
        >
          <motion.h2
            variants={textContainerVariants}
            className="my-2 font-semibold"
          >
            היי! אני שירן
          </motion.h2>
          <motion.p variants={textContainerVariants} className="my-2">
            אדריכלית ומעצבת פנים, בתחום משנת 2015. התמחותי בעיצוב ותכנון של בתים
            פרטיים, דירות יוקרה, ופנטהאוזים. אצלי כל פרויקט הוא מיוחד ודורש
            מחשבה יצירתית, החל מהתכנון המדויק והפרקטי, ועד לבחירת גופי התאורה
            והכריות המתאימים.
          </motion.p>
          <motion.div variants={textContainerVariants}>
            <button className="my-btn-primary btn-effect ml-2">
              צור/י קשר
            </button>
            <button className="my-btn-secondary btn-effect">פרוייקטים</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HelloSection;
