import { motion } from "framer-motion";
import shiranImgSrc from "../../assets/images/header-section-img.png";
import ParallaxEffect from "../../shared/parallaxEffect/ParallaxEffect";
import { useRef } from "react";

const seconderyColor = getComputedStyle(
  document.documentElement,
).getPropertyValue("--secondary-light-color");

const HelloSectionImage = () => {
  const sectionRef = useRef(null);
  return (
    <div
      ref={sectionRef}
      className="relative mx-auto h-[480px] w-[400px] max-w-[90%] md:m-0 md:w-[320px] lg:h-[500px] lg:w-[400px] lg:max-w-[600px]"
    >
      <div className=" relative h-full w-full overflow-hidden rounded-bl-[1000px] rounded-br-[1000px] rounded-tl-full rounded-tr-full bg-black ">
        <ParallaxEffect stiffness={"-50%"} parentRef={sectionRef}>
          <motion.img
            className="h-[150%] w-full object-cover"
            src={shiranImgSrc}
            alt="Image of Shiran the website owner"
            style={{ clipPath: "url(#clipPath)" }}
          />
        </ParallaxEffect>
      </div>
      <ParallaxEffect stiffness={"-100%"} parentRef={sectionRef}>
        <motion.svg
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
      </ParallaxEffect>
    </div>
  );
};

export default HelloSectionImage;
