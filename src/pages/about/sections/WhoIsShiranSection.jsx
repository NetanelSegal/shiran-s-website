import { motion } from "framer-motion";
import shiransImgSrc from "../../../assets/images/header-section-img.png";
import ParallaxEffect from "../../../shared/parallaxEffect/ParallaxEffect";
import { AppContext } from "../../../context/AppContext";
import { useContext, useRef } from "react";

const WhoIsShiranSection = () => {
  const { screenWidth } = useContext(AppContext);

  const variants = {
    from: { opacity: 0, y: 200 },
    to: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.2 },
    },
  };

  const variants2 = {
    from: { opacity: 0, y: 200 },
    to: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  const yearsContainerRef = useRef(null);
  const textContainerRef = useRef(null);

  return (
    <section className="horizontal-page-padding my-bg-secondary overflow-hidden py-8 pb-16 md:pb-24">
      <motion.div
        variants={variants}
        initial="from"
        animate="to"
        className="mb-5 flex flex-col gap-5 md:flex-row"
      >
        {/* Circle */}
        <motion.div
          variants={variants}
          className="aspect-square w-full overflow-hidden rounded-full object-cover"
        >
          <img
            width={"100%"}
            height={"100%"}
            src={shiransImgSrc}
            className="relative bottom-1/3"
            alt="Shiran's image in a working area"
          />
        </motion.div>
        {/* Long */}
        <motion.div
          ref={textContainerRef}
          variants={variants}
          className="my-bg-primary aspect-[3/1] w-full overflow-hidden rounded-2xl object-cover p-5 text-white md:aspect-[1/2] md:w-1/2"
        >
          <ParallaxEffect stiffness={"200%"} ref={textContainerRef}>
            <motion.p
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
              className="rounded-md bg-white p-3 font-semibold text-black xl:text-2xl"
            >
              למדתי במכללה מובילה בתחום, השכלה גבוהה בעיצוב פנים ואדריכלות. רקע
              חינוכי משולב עם ניסיון רב, הוא התחילה בשלב האקדמי שלי
            </motion.p>
          </ParallaxEffect>
        </motion.div>
      </motion.div>

      <motion.div
        variants={variants2}
        initial="from"
        animate="to"
        className="flex flex-row"
      >
        <motion.div
          variants={variants2}
          className="my-bg-primary relative aspect-square w-1/2 overflow-hidden 
      rounded-bl-2xl rounded-br-2xl rounded-tl-[100%] 
      rounded-tr-2xl object-cover p-5 text-base text-white"
        >
          <div className="absolute bottom-5 right-5 origin-bottom-right scale-[40%] font-black sm:scale-50 md:scale-75 lg:scale-100">
            <ParallaxEffect stiffness={"-200%"} ref={yearsContainerRef}>
              <div
                ref={yearsContainerRef}
                className="-mb-4 text-center text-9xl"
              >
                10
              </div>
              <p className="text-center text-4xl font-normal">שנים נסיון</p>
            </ParallaxEffect>
          </div>
        </motion.div>

        <motion.div
          variants={variants2}
          className="aspect-[2/1] w-full  
      rounded-b-[300px] rounded-t-2xl bg-white object-cover px-3 pt-2 text-center sm:p-12"
        >
          <p className="font-semibold sm:text-2xl">
            אני נותנת דגש רב על איכות ופרטים. חשוב לי להביא לכל פרויקט את
            המקסימום שבו, תוך שמירה על קשר טוב ושותפות אמיצה עם הלקוח.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhoIsShiranSection;
