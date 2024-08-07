import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";
import BoldParagraph from "../../../components/BoldParagraph";

const Section1 = () => {
  const ref = useRef(null);

  function useParallax(value, distance) {
    return useSpring(useTransform(value, [0, 1], [-distance, distance]));
  }

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yNotebook = useParallax(scrollYProgress, 100);
  const yBubble = useParallax(scrollYProgress, -50);

  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      ref={ref}
      className="horizontal-page-padding relative mt-10 pb-14 sm:pb-20 md:pb-24 lg:pb-32"
    >
      {/* text container */}
      <div className=" lg:absolute lg:w-1/4">
        <h3 className="mb-2 font-semibold">שיחת תיאום ציפיות </h3>
        <p className="leading-tight">
          לאחר שהחלטנו להמשיך יחד, השלב הראשון הוא
          <BoldParagraph text={" הבנת הצרכים "} />
          של בני הבית. נמלא יחד פרוגרמה שתפרט את הדברים שחשובים לכם בתכון הבית,
          כגון: מה יראו כשנכנסים הביתה, האם הילדים יהיו בחדר ביחד, צריך משרד
          ביתי או לא, נרד עד לפרטים
          <BoldParagraph text={" הכי קטנים "} />
          של האופן בו אתם חיים. נמשיך לשלב לא פחות חשוב שהוא
          <BoldParagraph text={" ניהול תקציב "} />, נבין בדיוק מה המצב הנתון,
          ואם צריך לגייס כספים נוספים, טיפול במשכנתא וכו' ונעשה התאמה בין בית
          החלומות שלכם לתקציב הנתון כדי שנצא לדרך
          <BoldParagraph text={" ובלי הפתעות כלכליות"} />.
        </p>
      </div>
      {/* svg container */}
      <div className="w-full py-10">
        <svg overflow="visible" viewBox="0 0 1920 914.65">
          <motion.g style={{ y: yNotebook }} id="notebook">
            <path
              id="Path_23"
              data-name="Path 23"
              d="M1917,312.14l-6.09-8.55-3.32,1.38a17.22,17.22,0,0,0-5.28-.81h-226c-9.69,0-18.75,7.39-20.23,16.49l-43.25,265-.34-.41-2.23,3.83,3.92,6.54s0,.08.07.13l3,3.29-2.58-2.61c2.56,3.94,9.77,9.09,15.46,9.09h226c9.68,0,18.74-7.39,20.23-16.5l43.37-265.78a13.86,13.86,0,0,0-2.75-11.09"
              fill="#ccbebc"
            />
            <path
              id="Path_24"
              data-name="Path 24"
              d="M1849.69,596.44h-226c-9.69,0-16.34-7.38-14.85-16.49l43.38-265.78c1.48-9.11,10.54-16.49,20.23-16.49h226c9.69,0,16.34,7.38,14.85,16.49L1869.92,580c-1.49,9.11-10.55,16.49-20.23,16.49"
              fill="#002b49"
            />
            <line
              id="Line_3"
              data-name="Line 3"
              x1="1817.05"
              y1="360.28"
              x2="1690.6"
              y2="360.28"
              fill="none"
              stroke="#ccbebc"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="6.48"
            />
            <path
              id="Path_25"
              data-name="Path 25"
              d="M1854.73,349.84h-14.85a4.53,4.53,0,0,0-4.38,3.57l-2.24,13.73a3.06,3.06,0,0,0,3.22,3.57h14.84a4.51,4.51,0,0,0,4.38-3.57l2.24-13.73a3.05,3.05,0,0,0-2.48-3.53,3.58,3.58,0,0,0-.73,0"
              fill="#ccbebc"
            />
            <path
              id="Path_26"
              data-name="Path 26"
              d="M1861.58,349.84,1844.23,365l-5.48-6.51"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="6.48"
            />
            <line
              id="Line_4"
              data-name="Line 4"
              x1="1811.94"
              y1="391.58"
              x2="1685.49"
              y2="391.58"
              fill="none"
              stroke="#ccbebc"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="6.48"
            />
            <path
              id="Path_27"
              data-name="Path 27"
              d="M1849.62,381.15h-14.85a4.49,4.49,0,0,0-4.37,3.56l-2.24,13.73a3.05,3.05,0,0,0,2.47,3.53,2.63,2.63,0,0,0,.74,0h14.84a4.5,4.5,0,0,0,4.38-3.57l2.24-13.73a3.05,3.05,0,0,0-2.48-3.53,3,3,0,0,0-.73,0"
              fill="#ccbebc"
            />
            <path
              id="Path_28"
              data-name="Path 28"
              d="M1856.47,381.15l-17.34,15.17-5.49-6.5"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="6.48"
            />
            <line
              id="Line_5"
              data-name="Line 5"
              x1="1806.83"
              y1="422.87"
              x2="1680.38"
              y2="422.87"
              fill="none"
              stroke="#ccbebc"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="6.48"
            />
            <path
              id="Path_29"
              data-name="Path 29"
              d="M1844.52,412.44h-14.85a4.53,4.53,0,0,0-4.38,3.57l-2.24,13.73a3.05,3.05,0,0,0,2.48,3.53,3.58,3.58,0,0,0,.73,0h14.85a4.51,4.51,0,0,0,4.38-3.57l2.24-13.73a3.05,3.05,0,0,0-2.48-3.53,3,3,0,0,0-.73,0"
              fill="#ccbebc"
            />
            <path
              id="Path_30"
              data-name="Path 30"
              d="M1851.36,412.44,1834,427.62l-5.49-6.51"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="6.48"
            />
            <line
              id="Line_6"
              data-name="Line 6"
              x1="1801.73"
              y1="454.17"
              x2="1675.28"
              y2="454.17"
              fill="none"
              stroke="#ccbebc"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="6.48"
            />
            <path
              id="Path_31"
              data-name="Path 31"
              d="M1839.4,443.74h-14.84a4.51,4.51,0,0,0-4.38,3.57L1817.94,461a3.05,3.05,0,0,0,2.48,3.53,3.58,3.58,0,0,0,.73,0H1836a4.51,4.51,0,0,0,4.37-3.57l2.25-13.73a3.06,3.06,0,0,0-3.22-3.57"
              fill="#ccbebc"
            />
            <path
              id="Path_32"
              data-name="Path 32"
              d="M1846.26,443.74l-17.35,15.18-5.48-6.51"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="6.48"
            />
            <line
              id="Line_7"
              data-name="Line 7"
              x1="1796.62"
              y1="485.47"
              x2="1670.17"
              y2="485.47"
              fill="none"
              stroke="#ccbebc"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="6.48"
            />
            <path
              id="Path_33"
              data-name="Path 33"
              d="M1834.3,475h-14.85a4.51,4.51,0,0,0-4.38,3.57l-2.24,13.73a3.05,3.05,0,0,0,2.48,3.53,3.58,3.58,0,0,0,.73,0h14.85a4.53,4.53,0,0,0,4.38-3.57l2.24-13.73a3.05,3.05,0,0,0-2.48-3.53,3,3,0,0,0-.73,0"
              fill="#ccbebc"
            />
            <path
              id="Path_34"
              data-name="Path 34"
              d="M1841.15,475l-17.35,15.18-5.48-6.51"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="6.48"
            />
          </motion.g>
          <motion.g
            id="bubble_talk"
            style={{ y: yBubble }}
            data-name="bubble talk"
          >
            <path
              id="bubble"
              d="M624.27,362.35c-61-18.93-92.73-51.08-108.82-75.46a180.71,180.71,0,0,0,14.38-70.49C529.84,96.89,411.23,0,264.92,0S0,96.89,0,216.4,118.61,432.79,264.92,432.79c80.05,0,151.8-29,200.38-74.83,90.92,27.86,159,4.39,159,4.39"
              fill="#002b49"
            />
            <g id="people">
              <g id="Group_279" data-name="Group 279">
                <path
                  id="Path_36"
                  data-name="Path 36"
                  d="M408.65,186.85a13.76,13.76,0,1,1-13.76-13.76h0a13.76,13.76,0,0,1,13.76,13.76"
                  fill="#ccbebc"
                />
                <path
                  id="Line_8"
                  data-name="Line 8"
                  d="M394.89,259.15a5.18,5.18,0,0,1-5.18-5.18V208.62a5.18,5.18,0,0,1,10.36,0V254A5.18,5.18,0,0,1,394.89,259.15Z"
                  fill="#ccbebc"
                />
                <path
                  id="Path_37"
                  data-name="Path 37"
                  d="M419.29,229.51a5.09,5.09,0,0,1-3-.93l-21.52-15-21.38,14.85a5.18,5.18,0,0,1-5.91-8.51l24.34-16.9a5.16,5.16,0,0,1,5.91,0l24.47,17a5.17,5.17,0,0,1-3,9.43Z"
                  fill="#ccbebc"
                />
                <path
                  id="Path_38"
                  data-name="Path 38"
                  d="M416.71,295.43a5.19,5.19,0,0,1-4.52-2.64L394.83,262,377.6,292.57a5.18,5.18,0,0,1-9.09-5l.06-.1,21.75-38.64a5.18,5.18,0,0,1,9,0l21.88,38.87a5.17,5.17,0,0,1-2,7.05,5.12,5.12,0,0,1-2.53.67Z"
                  fill="#ccbebc"
                />
                <path
                  id="Path_39"
                  data-name="Path 39"
                  d="M339.52,186.85a13.76,13.76,0,1,1-13.76-13.76h0a13.76,13.76,0,0,1,13.76,13.76"
                  fill="#ccbebc"
                />
                <path
                  id="Line_9"
                  data-name="Line 9"
                  d="M325.76,259.15a5.18,5.18,0,0,1-5.19-5.18V208.62a5.19,5.19,0,0,1,10.37,0V254A5.18,5.18,0,0,1,325.76,259.15Z"
                  fill="#ccbebc"
                />
                <path
                  id="Path_40"
                  data-name="Path 40"
                  d="M350.16,229.51a5.14,5.14,0,0,1-3-.93l-21.51-15-21.38,14.85a5.18,5.18,0,1,1-5.94-8.49l0,0,24.33-16.9a5.18,5.18,0,0,1,5.92,0l24.47,17a5.18,5.18,0,0,1-3,9.43Z"
                  fill="#ccbebc"
                />
                <path
                  id="Path_41"
                  data-name="Path 41"
                  d="M347.58,295.43a5.18,5.18,0,0,1-4.52-2.64L325.7,262l-17.23,30.62a5.18,5.18,0,0,1-9.09-5,.31.31,0,0,0,.05-.1l21.76-38.64a5.19,5.19,0,0,1,9,0l21.88,38.87a5.19,5.19,0,0,1-4.52,7.72Z"
                  fill="#ccbebc"
                />
                <path
                  id="Path_42"
                  data-name="Path 42"
                  d="M259.32,144a19.54,19.54,0,1,1-19.54-19.53A19.54,19.54,0,0,1,259.32,144h0"
                  fill="#ccbebc"
                />
                <path
                  id="Line_10"
                  data-name="Line 10"
                  d="M239.78,245.2a6.48,6.48,0,0,1-6.48-6.48V174.34a6.48,6.48,0,0,1,13,0v64.38A6.48,6.48,0,0,1,239.78,245.2Z"
                  fill="#ccbebc"
                />
                <path
                  id="Path_43"
                  data-name="Path 43"
                  d="M274.43,203.12a6.47,6.47,0,0,1-3.68-1.16l-31.07-21.58-30.86,21.44a6.48,6.48,0,0,1-7.39-10.64l34.56-24a6.49,6.49,0,0,1,7.39,0l34.75,24.14a6.47,6.47,0,0,1-3.7,11.79Z"
                  fill="#ccbebc"
                />
                <path
                  id="Path_44"
                  data-name="Path 44"
                  d="M270.77,296.72a6.49,6.49,0,0,1-5.66-3.3l-25.42-45.16L214.45,293.1a6.48,6.48,0,1,1-11.35-6.25l.06-.1,30.89-54.88a6.47,6.47,0,0,1,8.82-2.46,6.55,6.55,0,0,1,2.47,2.46l31.06,55.19a6.47,6.47,0,0,1-5.63,9.66Z"
                  fill="#ccbebc"
                />
                <path
                  id="Path_45"
                  data-name="Path 45"
                  d="M163,144a19.54,19.54,0,1,1-19.54-19.53A19.54,19.54,0,0,1,163,144h0"
                  fill="#ccbebc"
                />
                <path
                  id="Line_11"
                  data-name="Line 11"
                  d="M143.44,245.2a6.48,6.48,0,0,1-6.47-6.48V174.34a6.48,6.48,0,1,1,12.95,0v64.38A6.48,6.48,0,0,1,143.44,245.2Z"
                  fill="#ccbebc"
                />
                <path
                  id="Path_46"
                  data-name="Path 46"
                  d="M178.1,203.12a6.48,6.48,0,0,1-3.69-1.16l-31.07-21.58-30.86,21.44a6.48,6.48,0,0,1-7.38-10.64l34.56-24a6.47,6.47,0,0,1,7.38,0l34.76,24.14a6.47,6.47,0,0,1-3.7,11.79Z"
                  fill="#ccbebc"
                />
                <path
                  id="Path_47"
                  data-name="Path 47"
                  d="M174.43,296.72a6.49,6.49,0,0,1-5.65-3.3l-25.43-45.16L118.11,293.1a6.47,6.47,0,1,1-11.34-6.25.31.31,0,0,1,0-.1l30.89-54.88a6.47,6.47,0,0,1,11.29,0l31.07,55.19a6.48,6.48,0,0,1-5.64,9.66Z"
                  fill="#ccbebc"
                />
              </g>
            </g>
          </motion.g>
          <g id="people-2" data-name="people">
            <g id="איש_-_ימין" data-name="איש - ימין">
              <path
                id="Path_22"
                data-name="Path 22"
                d="M1428.34,491.17A107.37,107.37,0,1,0,1321,598.54a107.36,107.36,0,0,0,107.36-107.37"
                fill="#002b49"
              />
              <path
                id="Rectangle_120"
                data-name="Rectangle 120"
                d="M1302,606.31h37.57c128.79,0,233.19,104.4,233.19,233.19v49.23a25.92,25.92,0,0,1-25.91,25.92H1094.72a25.92,25.92,0,0,1-25.91-25.92V839.5C1068.81,710.71,1173.22,606.31,1302,606.31Z"
                fill="#002b49"
              />
            </g>
            <g id="איש_-_ימין-2" data-name="איש - ימין-2">
              <path
                id="Path_22-2"
                data-name="Path 22-2"
                d="M898,491.17A107.37,107.37,0,1,0,790.65,598.54,107.36,107.36,0,0,0,898,491.17"
                fill="#002b49"
              />
              <path
                id="Rectangle_120-2"
                data-name="Rectangle 120-2"
                d="M771.68,606.31h37.57c128.79,0,233.2,104.4,233.2,233.19v49.23a25.93,25.93,0,0,1-25.92,25.92H564.39a25.92,25.92,0,0,1-25.91-25.92V839.5C538.48,710.71,642.89,606.31,771.68,606.31Z"
                fill="#002b49"
              />
            </g>
          </g>
        </svg>
      </div>
    </motion.div>
  );
};

export default Section1;
