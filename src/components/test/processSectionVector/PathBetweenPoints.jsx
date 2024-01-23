import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const PathBetweenPoints = ({ startPoint, endPoint, trigger, i }) => {
  // const seconderyColor = getComputedStyle(
  //   document.documentElement,
  // ).getPropertyValue("--secondary-light-color");

  // const primaryColor = getComputedStyle(
  //   document.documentElement,
  // ).getPropertyValue("--primary-dark-color");

  const seconderyColor = "white";

  const primaryColor = getComputedStyle(
    document.documentElement,
  ).getPropertyValue("--secondary-light-color");

  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  const { x: startX, y: startY } = startPoint;
  const { x: endX, y: endY } = endPoint;

  const controlPoint1 = { x: startX + 0, y: startY + 60 };
  const controlPoint2 = { x: endX + 0, y: endY - 60 };

  const pathData = `M${startX} ${startY} C${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y}, ${endX} ${endY}`;

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [pathRef]);

  return (
    <>
      <mask
        id={"pathMask" + i}
        maskUnits="userSpaceOnUse"
        width="100%"
        height="100%"
      >
        <motion.path
          initial={{ strokeDashoffset: pathLength }}
          animate={{ strokeDashoffset: trigger ? 0 : pathLength }}
          transition={{ duration: 1, ease: "linear" }}
          d={pathData}
          strokeWidth="10"
          stroke="white"
          fill="none"
          strokeDasharray={pathLength}
          strokeLinecap="round"
        />
      </mask>
      <path
        ref={pathRef}
        d={pathData}
        stroke={`${seconderyColor}`}
        strokeWidth="3"
        strokeDasharray="20"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d={pathData}
        stroke={`${primaryColor}`}
        strokeWidth="3"
        strokeDasharray="20"
        fill="none"
        strokeLinecap="round"
        mask={"url(#pathMask" + i + ")"}
      />
    </>
  );
};

export default PathBetweenPoints;
