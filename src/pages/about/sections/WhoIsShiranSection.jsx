import { motion } from "framer-motion";
import shiransImgSrc from "../../../assets/images/header-section-img.png";

const WhoIsShiranSection = () => {
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
          variants={variants}
          className="my-bg-primary aspect-[3/1] w-full overflow-hidden rounded-2xl object-cover p-5 text-white md:aspect-[1/2] md:w-1/2"
        >
          <h5>שנים של ניסיון ועבודה במקומות שונים</h5>
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
          <p className="absolute bottom-5 font-semibold">
            השכלה גבוהה במכללה מסויימת
          </p>
        </motion.div>

        <motion.div
          variants={variants2}
          className="aspect-[2/1] w-full overflow-hidden 
      rounded-b-[300px] rounded-t-2xl bg-white object-cover p-5 text-center"
        >
          <p className="font-bold">
            אני עושה את המקסימום בצורה הכי טובה שיש, כדי שיהיה לכם הכי טוב
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhoIsShiranSection;
