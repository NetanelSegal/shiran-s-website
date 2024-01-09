import { motion, useScroll, useTransform } from "framer-motion";
import shiranImgSrc from "../../assets/images/header-section-img.png";

const seconderyColor = getComputedStyle(
  document.documentElement,
).getPropertyValue("--secondary-light-color");

const HelloSectionImage = ({ sectionRef }) => {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  const circleBottom = useTransform(scrollYProgress, [0, 1], ["-20%", "100%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-200px", "0px"]);

  return (
    <div className="relative mx-auto h-[480px] w-[400px] max-w-[90%] md:m-0 md:w-[320px] lg:h-[500px] lg:w-[400px] lg:max-w-[600px]">
      <div className=" relative h-full w-full overflow-hidden rounded-bl-[1000px] rounded-br-[1000px] rounded-tl-full rounded-tr-full bg-black ">
        <motion.img
          className="top-0 h-[130%] w-full object-cover"
          src={shiranImgSrc}
          alt="Image of Shiran the website owner"
          style={{ clipPath: "url(#clipPath)", y: imgY }}
        />
      </div>

      <motion.svg
        style={{ bottom: circleBottom }}
        width="100"
        height="100"
        viewBox="0 0 145 145"
        className="absolute -right-20"
      >
        <circle
          cx="72.5"
          cy="72.5"
          r="72.5"
          fill={seconderyColor || "#ccbebc"}
        />
      </motion.svg>
    </div>
  );
};

export default HelloSectionImage;
