import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import AnimatedProcessPath from "../../../components/theProcess/AnimatedProcessPath";
import { content as pageContent } from "./content/processSectionContent";
import SvgShape from "../../../components/theProcess/SvgShape";
import { AppContext } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";
import TimeOfStep from "../../../components/timeOfStep/TimeOfStep";

const ProcessSection = () => {
  const nav = useNavigate();
  const { screenWidth } = useContext(AppContext);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

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
          const endPoint = getCenterOfElementInContainer(
            svgContainerRef.current[i + 1],
            sectionRef.current,
          );
          positions.push({ start: startPoint, end: endPoint });
        }
      });
      setPathsPositions(positions);
    }
  }, [svgContainerRef, screenWidth, isAnimationComplete]);

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
      className="horizontal-page-padding relative overflow-hidden bg-white pt-14"
    >
      <motion.div
        whileInView="to"
        initial="from"
        variants={enterAnimationVariants}
        viewport={{ once: true }}
        className="mb-10 text-right"
      >
        <h3 className="font-bold">איך נראה תהליך אדריכלתי מתחילתו ועד סופו?</h3>
        <h4>הנה חמישה שלבים עיקריים</h4>
      </motion.div>
      {/* שיחת תיאום ציפיות */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "backIn" }}
        viewport={{ once: true }}
        onAnimationComplete={() => setIsAnimationComplete(true)}
        key={pageContent[0].heading}
        className="relative z-20 my-16"
      >
        <div className="relative mb-28 w-96 max-w-[50%]">
          <h4 className="mb-1 font-semibold">{pageContent[0].heading}</h4>
          <p className="leading-tight">{pageContent[0].text}</p>
          <div
            ref={(e) => (svgContainerRef.current[0] = e)}
            className="absolute right-full top-1/2 "
          >
            <SvgShape
              areInView={areInView}
              setAreInView={setAreInView}
              key={0}
              i={0}
            />
          </div>
        </div>
      </motion.div>
      {/* הפקת תיק מידע */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "backIn" }}
        viewport={{ once: true }}
        onAnimationComplete={() => setIsAnimationComplete(true)}
        key={pageContent[1].heading}
        className="relative  z-20 my-16"
      >
        <div className="relative my-28 mr-auto w-96 max-w-[50%]">
          <div className="mb-1 flex flex-col items-start gap-1 sm:flex-row sm:items-end">
            <h4 className="font-semibold">{pageContent[1].heading}</h4>
            <TimeOfStep time={pageContent[1].time} />
          </div>
          <p className="leading-tight">{pageContent[1].text}</p>
          <div
            ref={(e) => (svgContainerRef.current[1] = e)}
            className="absolute -right-10 top-1/2"
          >
            <SvgShape
              areInView={areInView}
              setAreInView={setAreInView}
              key={0}
              i={1}
            />
          </div>
        </div>
      </motion.div>
      {/* תכנון המבנה */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "backIn" }}
        viewport={{ once: true }}
        onAnimationComplete={() => setIsAnimationComplete(true)}
        key={pageContent[2].heading}
        className="relative  z-20 my-16"
      >
        <div className="relative mb-28 w-96 max-w-[50%]">
          <div className="mb-1 flex flex-col items-start gap-1 sm:flex-row sm:items-end">
            <h4 className="font-semibold">{pageContent[2].heading}</h4>
            <TimeOfStep time={pageContent[2].time} />
          </div>
          <p className="leading-tight">{pageContent[2].text}</p>
          <div
            ref={(e) => (svgContainerRef.current[2] = e)}
            className="absolute right-full top-1/2 "
          >
            <SvgShape
              areInView={areInView}
              setAreInView={setAreInView}
              key={0}
              i={2}
            />
          </div>
        </div>
      </motion.div>
      {/* הגשת התוכניות לוועדה */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "backIn" }}
        viewport={{ once: true }}
        onAnimationComplete={() => setIsAnimationComplete(true)}
        key={pageContent[3].heading}
        className="relative  z-20 my-16"
      >
        <div className="relative my-28 mr-auto w-96 max-w-[50%]">
          <div className="mb-1 flex flex-col items-start gap-1 sm:flex-row sm:items-end">
            <h4 className="font-semibold">{pageContent[3].heading}</h4>
            <TimeOfStep time={pageContent[3].time} />
          </div>

          <p className="leading-tight">{pageContent[3].text}</p>
          <div
            ref={(e) => (svgContainerRef.current[3] = e)}
            className="absolute -right-14 top-1/2"
          >
            <SvgShape
              areInView={areInView}
              setAreInView={setAreInView}
              key={0}
              i={3}
            />
          </div>
        </div>
      </motion.div>
      {/* בנייה */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "backIn" }}
        viewport={{ once: true }}
        onAnimationComplete={() => setIsAnimationComplete(true)}
        key={pageContent[4].heading}
        className="relative  z-20 my-16"
      >
        <div className="relative z-50 mb-28 w-96 max-w-[50%]">
          <div className="mb-1 flex flex-col items-start gap-1 sm:flex-row sm:items-end">
            <h4 className="font-semibold">{pageContent[4].heading}</h4>
            <TimeOfStep time={pageContent[4].time} />
          </div>
          <p className="leading-tight">{pageContent[4].text}</p>
          <button
            onClick={() => nav("/the-process")}
            className="my-btn-primary btn-effect my-2"
          >
            עוד על התהליך
          </button>
          <div
            ref={(e) => (svgContainerRef.current[4] = e)}
            className="absolute right-full top-1/2 "
          >
            <SvgShape
              areInView={areInView}
              setAreInView={setAreInView}
              key={0}
              i={4}
            />
          </div>
        </div>
      </motion.div>
      <svg
        className="absolute inset-0 z-0"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMax meet"
      >
        {pathsPositions[0] &&
          pathsPositions.map((e, i) => (
            <AnimatedProcessPath
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
