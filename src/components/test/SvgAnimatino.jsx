import { useEffect, useRef, useState } from "react";
import PathBetweenPoints from "./processSectionVector/PathBetweenPoints";

const MyComponent = () => {
  const [trigger, setTrigger] = useState(false);
  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);
  const containerRef = useRef(null);

  const handleClick = () => {
    setTrigger(!trigger);
  };

  const [path1Pos, setPath1Pos] = useState({
    start: null,
    end: null,
  });

  useEffect(() => {
    if (buttonRef1.current && buttonRef2.current) {
      const startPoint = getCenterOfElementInContainer(
        buttonRef1.current,
        containerRef.current,
      );
      const endPoint = getCenterOfElementInContainer(
        buttonRef2.current,
        containerRef.current,
      );
      setPath1Pos({ start: startPoint, end: endPoint });
    }
  }, [buttonRef1, buttonRef2]);

  return (
    <div className="relative w-full">
      {/* Render the path using PathBetweenPoints component */}
      {path1Pos.start && path1Pos.end && (
        <PathBetweenPoints
          startPoint={path1Pos.start}
          endPoint={path1Pos.end}
          trigger
        />
      )}

      <div ref={containerRef} className="relative h-56 w-full">
        <button
          className="absolute left-5 top-2"
          ref={buttonRef1}
          onClick={handleClick}
        >
          Next Step
        </button>
        <button
          className="absolute right-14 top-2/3"
          ref={buttonRef2}
          onClick={handleClick}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

const getCenterOfElementInContainer = (elem, container) => {
  const rect = elem.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  const centerX = rect.left - containerRect.left + rect.width / 2;
  const centerY = rect.top - containerRect.top + rect.height / 2;

  return { x: centerX, y: centerY };
};

export default MyComponent;
