import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const SvgShape = ({ src, i, setAreInView, areInView }) => {
  const shapeRef = useRef(null);

  const isInView = useInView(shapeRef, {
    margin: "200px 0px -400px 0px",
    // once: true,
  });

  useEffect(() => {
    if (isInView) {
      setAreInView((prev) => {
        const updatedArray = [...prev];
        updatedArray[i] = true;
        return updatedArray;
      });
    } else {
      setAreInView((prev) => {
        const updatedArray = [...prev];
        updatedArray[i] = false;
        return updatedArray;
      });
    }
  }, [isInView]);

  return (
    <img
      ref={shapeRef}
      className="h-full w-full object-contain"
      src={src}
      alt=""
    />
  );
};

export default SvgShape;
