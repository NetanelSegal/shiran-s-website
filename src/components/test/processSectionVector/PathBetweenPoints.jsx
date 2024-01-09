import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const PathBetweenPoints = ({ startPoint, endPoint, trigger }) => {
  if (!startPoint || !endPoint) {
    console.log("PathBetweenPoints points are null");
    return null;
  }

  const pathRef = useRef(null);
  const { x: startX, y: startY } = startPoint;
  const { x: endX, y: endY } = endPoint;

  const controlPoint1 = { x: startX + 100, y: startY - 20 };
  const controlPoint2 = { x: endX - 100, y: endY + 20 };

  const pathData = `M${startX} ${startY} C${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y}, ${endX} ${endY}`;

  const seconderyColor = getComputedStyle(
    document.documentElement,
  ).getPropertyValue("--secondary-light-color");

  const primaryColor = getComputedStyle(
    document.documentElement,
  ).getPropertyValue("--primary-dark-color");

  useEffect(() => {
    if (pathRef.current) {
      var path = pathRef.current;

      var length = path.getTotalLength();
      console.log(length);
    }
  }, [pathRef]);

  const controls = useAnimation();

  useEffect(() => {
    if (trigger) {
      controls.start({
        stroke: primaryColor,
        transition: { duration: 1.5 },
        strokeDashoffset: 0, // Animate from fully masked to fully revealed
      });
    }
  }, [trigger, controls, primaryColor]);

  return (
    <>
      <svg
        className="absolute"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMax meet"
      >
        {/* <path
          ref={pathRef}
          d={pathData}
          stroke={primaryColor}
          strokeWidth="5"
          strokeDasharray="20"
          fill="none"
        /> */}
        <path
          d={pathData}
          stroke={seconderyColor}
          strokeWidth="3"
          strokeDasharray="20"
          fill="none"
          strokeLinecap="round"
        />
        <motion.mask
          id="pathMask"
          maskUnits="userSpaceOnUse"
          width="100%"
          height="100%"
        >
          <motion.path
            d={pathData}
            strokeWidth="5"
            stroke="white"
            fill="none"
            strokeLinecap="round"
          />
        </motion.mask>

        {/* Visible Path */}
        <path
          d={pathData}
          stroke={seconderyColor}
          strokeWidth="3"
          strokeDasharray="20"
          fill="none"
          strokeLinecap="round"
          mask="url(#pathMask)"
        />
      </svg>
    </>
  );
};

export default PathBetweenPoints;
