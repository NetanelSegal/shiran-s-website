import React, { useRef, useState } from "react";

const ClickToCopy = ({ children }) => {
  const [isHover, setIsHover] = useState();
  const tooltipRef = useRef();

  const copyText = (e) => {
    navigator.clipboard.writeText(e.target.innerText);
    tooltipRef.current.innerText = "הועתק!";
  };

  return (
    <>
      <span
        className="relative cursor-pointer"
        onMouseLeave={() => {
          setIsHover(false);
        }}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onClick={copyText}
      >
        {children}
        {isHover && (
          <span
            dir="rtl"
            ref={tooltipRef}
            className="my-bg-secondary absolute left-full top-1/2 ml-2 w-max -translate-y-1/2  rounded-lg bg-white px-4 py-2  font-semibold"
          >
            לחץ להעתקה
          </span>
        )}
      </span>
    </>
  );
};

export default ClickToCopy;
