import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../../context/AppContext";

// const seconderyColor = getComputedStyle(
//   document.documentElement,
// ).getPropertyValue("--secondary-light-color");

// const primaryColor = getComputedStyle(
//   document.documentElement,
// ).getPropertyValue("--primary-dark-color");

const AnimatedProcessPath = ({ startPoint, endPoint, trigger, i }) => {
  const { screenWidth } = useContext(AppContext);

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

  const initialPathData = `M${startX} ${startY} C${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y}, ${endX} ${endY}`;
  const [pathData, setPathData] = useState(initialPathData);
  useEffect(() => {
    setPathData(
      `M${startX} ${startY} C${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y}, ${endX} ${endY}`,
    );
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [pathRef, screenWidth, pathData]);

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

export default AnimatedProcessPath;
