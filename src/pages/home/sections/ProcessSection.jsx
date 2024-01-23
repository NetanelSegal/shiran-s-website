import { motion, useInView } from "framer-motion";
// import SvgAnimatino from "../../../components/test/SvgAnimatino";
import { useEffect, useRef, useState } from "react";
import PathBetweenPoints from "../../../components/test/processSectionVector/PathBetweenPoints";
import { mainHeading, content as pageContent } from "./processSectionContent";
import svgSrc1 from "../../../assets/images/1.png";
import svgSrc2 from "../../../assets/images/2.png";
import svgSrc3 from "../../../assets/images/3.png";
import svgSrc4 from "../../../assets/images/4.png";
import svgSrc5 from "../../../assets/images/5.png";
import SvgShape from "../../../components/theProcess/SvgShape";

const srcs = [svgSrc1, svgSrc2, svgSrc3, svgSrc4, svgSrc5];

const ProcessSection = () => {
  const enterAnimationVariants = {
    from: { opacity: 0, y: 100 },
    to: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const svgContainerRef = useRef([]);
  const sectionRef = useRef(null);

  const [pathsPositions, setPathsPositions] = useState([]);

  useEffect(() => {
    if (svgContainerRef.current.length === 5) {
      const positions = [];
      svgContainerRef.current.forEach((e, i) => {
        if (i < svgContainerRef.current.length - 1) {
          const startPoint = getCenterOfElementInContainer(
            svgContainerRef.current[i],
            sectionRef.current,
          );
          // Adjust this logic based on your requirements
          const endPoint = getCenterOfElementInContainer(
            svgContainerRef.current[i + 1],
            sectionRef.current,
          );
          positions.push({ start: startPoint, end: endPoint });
        }
      });
      setPathsPositions(positions);
    }
  }, [svgContainerRef]);

  const [areInView, setAreInView] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <section
      ref={sectionRef}
      className="horizontal-page-padding section relative mb-32 overflow-hidden"
    >
      <motion.div
        whileInView="to"
        initial="from"
        variants={enterAnimationVariants}
        viewport={{ once: true }}
        className="mb-5 text-center"
      >
        <h2 className="font-bold">{mainHeading}</h2>
      </motion.div>
      {pageContent.map((eContent, i) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "backIn" }}
          viewport={{ once: true }}
          key={eContent.heading}
          className={"my-16 " + i == pageContent.length - 1 ? "mb-0" : ""}
        >
          <div
            className={
              i == 0
                ? "relative mb-28 w-96 max-w-[50%]"
                : i % 2 == 1
                  ? "relative my-28 mr-auto w-96 max-w-[50%]"
                  : "relative my-28 w-96 max-w-[50%]"
            }
          >
            <h4 className="font-semibold">{eContent.heading}</h4>
            <p>{eContent.text}</p>
            {i == pageContent.length - 1 && (
              <button className="my-btn-primary btn-effect my-2">
                עוד על התהליך
              </button>
            )}
            <div
              ref={(e) => (svgContainerRef.current[i] = e)}
              className={
                i == 3
                  ? "absolute -right-10 -z-20 h-7 w-9 "
                  : i % 2 == 1
                    ? "absolute -right-10 top-1/2 -z-20 h-7 w-7 "
                    : "absolute right-full top-1/2 -z-20 h-7 w-7 "
              }
            >
              <SvgShape
                areInView={areInView}
                setAreInView={setAreInView}
                src={srcs[i]}
                key={srcs[i]}
                i={i}
              />
            </div>
          </div>
        </motion.div>
      ))}
      <div className="text-center"></div>
      <svg
        className="absolute inset-0 -z-30"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMax meet"
      >
        {pathsPositions[0] &&
          pathsPositions.map((e, i) => (
            <PathBetweenPoints
              i={i}
              key={i + e.start}
              startPoint={e.start}
              endPoint={e.end}
              trigger={areInView[i] && true}
            />
          ))}
      </svg>
    </section>
  );
};

export default ProcessSection;

const getCenterOfElementInContainer = (elem, container) => {
  const rect = elem.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  const centerX = rect.left - containerRect.left + rect.width / 2;
  const centerY = rect.top - containerRect.top + rect.height / 2;
  return { x: centerX, y: centerY };
};
