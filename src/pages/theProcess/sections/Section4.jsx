import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const Section2 = () => {
  const ref = useRef(null);

  function useParallax(value, distance) {
    return useSpring(useTransform(value, [0, 1], [-distance, distance]));
  }

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yV = useParallax(scrollYProgress, -100);
  const yPlans = useParallax(scrollYProgress, 50);

  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      ref={ref}
      className="horizontal-page-padding section"
    >
      {/* text container */}
      <div className="lg:absolute lg:left-40 lg:w-1/4 xl:left-[18%] xl:w-1/5">
        <h3 className="mb-2 font-semibold">הגשת התוכניות לוועדה</h3>
        <p>
          בשלב זה מהנדס הוועדה בודק את התכנון בצירוף מסמכים נוספים ומוודא שהכל
          נעשה כראוי ולפי התקן. וכך נעשה עד האישור הסופי - היתר הבנייה.
        </p>
      </div>
      {/* svg container */}
      <div className="w-full py-10">
        <svg overflow="visible" viewBox="0 0 1913.5 889.25">
          <motion.g style={{ y: yPlans }}>
            <path
              d="M0,575.9c-.11-.26,147.44-8.79,317.43-24.85,170.23-15.37,362.91-38.25,458.31-51.36,95.73-12.28,274.22-38.5,427.29-65,153.31-25.95,281.2-52.15,281.29-51.9q208.18,130.65,429.18,253.58C1388.68,756.45,846.64,841.7,292.36,889.25Q140.73,734.38,0,575.9"
              transform="translate(0)"
              fill="#ccbebc"
            />
            <path
              d="M0,518.07c-.11-.26,147.44-8.8,317.43-24.86C487.66,477.85,680.34,455,775.74,441.85c95.73-12.28,274.22-38.51,427.29-65,153.31-25.94,281.2-52.14,281.29-51.9q208.18,130.67,429.18,253.59C1388.68,698.61,846.64,783.86,292.36,831.42Q140.73,676.53,0,518.07"
              transform="translate(0)"
              fill="#002b49"
            />
            <path
              d="M0,460.23c-.11-.26,147.44-8.79,317.43-24.86C487.66,420,680.34,397.12,775.74,384c95.73-12.28,274.22-38.5,427.29-65,153.31-25.94,281.2-52.14,281.29-51.9q208.18,130.65,429.18,253.58C1388.68,640.78,846.64,726,292.36,773.58Q140.73,618.71,0,460.23"
              transform="translate(0)"
              fill="#ccbebc"
            />
            <path
              d="M368.36,487.91q445.14-42.59,878-118.17c10.21-1.78,22.6-.39,27.71,3.12q117.38,80.61,239.14,158.82c5.71,3.66,1.6,8.34-9.18,10.42h0q-457.09,88-929.11,140.48c-11.09,1.23-23.77-1.19-28.31-5.38q-96.91-89.41-189.84-180.33c-4-4,1.18-8,11.64-9"
              transform="translate(0)"
              fill="#002b49"
            />
            <path
              d="M926.24,562.08q235.62-33.55,467.46-76.35c9-1.64,20-.51,24.59,2.56Q1450,509.22,1481.93,530c4.78,3.1,1.3,7-7.81,8.76Q1238.38,583.56,998.55,619c-9.23,1.37-20.19-.26-24.46-3.6q-28.55-22.43-56.81-45c-4.14-3.3-.12-7,9-8.31"
              transform="translate(0)"
              fill="#ccbebc"
            />
            <path
              d="M784.69,445.85q225.59-29.85,447.73-68.26c11.68-2,25.84-.4,31.68,3.61q63.29,43.67,127.86,86.64c6.18,4.12,1.46,9.28-10.6,11.5q-229.48,42.11-462.8,75.25c-12.25,1.74-26.65-.48-32.19-4.93q-57.48-46.31-113.75-93.18c-5.17-4.32.24-9.06,12.06-10.63m590.85,29.59c5.78-1.06,8.06-3.53,5.09-5.51q-64.39-43.05-127.54-86.8c-2.8-1.93-9.6-2.71-15.21-1.74q-222.36,38.52-448.28,68.51c-5.69.76-8.28,3-5.79,5.11q56.43,46.8,114.08,93c2.66,2.13,9.57,3.19,15.44,2.36q232.95-33,462.22-75"
              transform="translate(0)"
              fill="#fff"
            />
            <path
              d="M964.41,453.2q7.53,5.85,15.09,11.68c.89.69,0,1.49-1.89,1.78q-21.76,3.24-43.56,6.39a8,8,0,0,1-5.12-.75L914,460.54c-.87-.7,0-1.48,1.91-1.76h0q21.71-3.12,43.38-6.31a8,8,0,0,1,5.1.74"
              transform="translate(0)"
              fill="#ccbebc"
            />
            <path
              d="M882.2,489.74q16.45-2.31,32.9-4.65a8.09,8.09,0,0,1,5.14.76q10,7.9,20,15.8c.9.71,0,1.51-1.92,1.79q-16.54,2.4-33.09,4.74a8.09,8.09,0,0,1-5.16-.78q-9.95-7.93-19.84-15.89c-.88-.71,0-1.5,1.94-1.77"
              transform="translate(0)"
              fill="#ccbebc"
            />
            <path
              d="M991.13,520.84q-7.71-6-15.39-11.93c-.91-.7,0-1.51,1.91-1.8q22-3.25,44-6.6a8.3,8.3,0,0,1,5.21.73l15.58,11.85c.92.7.08,1.51-1.89,1.81q-22.1,3.39-44.23,6.68a8.2,8.2,0,0,1-5.22-.75"
              transform="translate(0)"
              fill="#ccbebc"
            />
            <path
              d="M1073.39,483.1q-16.47,2.58-33,5.12a8.26,8.26,0,0,1-5.2-.72q-10.27-7.78-20.5-15.59c-.9-.69-.07-1.5,1.87-1.79q16.39-2.49,32.78-5a8.25,8.25,0,0,1,5.17.7q10.32,7.77,20.68,15.5c.93.69.1,1.5-1.85,1.81"
              transform="translate(0)"
              fill="#ccbebc"
            />
            <path
              d="M941.71,492.08c9.1,7.16,32.69,10.61,52.6,7.63s28.48-11.2,19.21-18.27S980.85,471.07,961.1,474h0c-19.74,2.9-28.46,11-19.38,18.11"
              transform="translate(0)"
              fill="#fff"
            />
            <path
              d="M1238.16,448.21q30.19-5.19,60.31-10.53c4.32-.76,6-2.59,3.88-4.08q-30.67-21-61-42.16c-2.12-1.47-7.28-2.07-11.53-1.34q-29.67,5.11-59.38,10.07c-4.27.71-6.05,2.49-4,4q29.86,21.42,60,42.67c2.14,1.51,7.39,2.13,11.72,1.39"
              transform="translate(0)"
              fill="#fff"
            />
            <path
              d="M395.75,490.82Q557.56,475,717.81,454.71c12.37-1.56,26.72.81,32.11,5.33q95.57,80.3,194.7,159c6,4.74.25,10.1-12.8,12Q762.77,655,591.9,674.13c-13.17,1.47-28.26-1.38-33.68-6.35q-89.85-82.46-176.28-166.24c-4.84-4.71,1.35-9.5,13.81-10.72m530.7,135.89c6.53-.92,9.4-3.6,6.42-6Q834,541.9,738.73,461.47c-2.7-2.27-9.9-3.46-16.11-2.67q-160.43,20.32-322.46,36.26c-6.26.62-9.35,3-6.92,5.39q86.72,83.66,176.85,166c2.73,2.49,10.29,3.91,16.88,3.18q170.63-19.08,339.48-42.94"
              transform="translate(0)"
              fill="#fff"
            />
            <path
              d="M731.93,520.61q-12,1.53-24.06,3a7.82,7.82,0,0,1-5.08-.87l-13.88-12c-.84-.73.07-1.5,2-1.74q12-1.47,24-3a7.84,7.84,0,0,1,5.07.86q7,6,14,11.92c.85.72-.05,1.51-2,1.76"
              transform="translate(0)"
              fill="#ccbebc"
            />
            <path
              d="M651.53,495.16l10.1,8.82c.83.72-.08,1.5-2,1.74q-16.19,1.95-32.37,3.85a7.63,7.63,0,0,1-5-.89l-10-8.86c-.81-.72.11-1.49,2-1.72h0q16.14-1.87,32.27-3.81a7.73,7.73,0,0,1,5,.88"
              transform="translate(0)"
              fill="#ccbebc"
            />
            <path
              d="M586.18,521.47q12-1.37,24-2.76a7.73,7.73,0,0,1,5,.9l13.63,12.08c.82.73-.11,1.51-2.07,1.73q-12.06,1.43-24.14,2.81a7.68,7.68,0,0,1-5-.92q-6.75-6-13.5-12.11c-.82-.73.12-1.51,2.08-1.73"
              transform="translate(0)"
              fill="#ccbebc"
            />
            <path
              d="M666.49,547.62l-10.24-9c-.84-.73.08-1.52,2.06-1.75L691,533a7.84,7.84,0,0,1,5.09.88l10.36,8.92c.85.73-.07,1.52-2,1.76q-16.36,2-32.75,4a7.89,7.89,0,0,1-5.11-.89"
              transform="translate(0)"
              fill="#ccbebc"
            />
            <path
              d="M647.52,511.26c-14.91,1.78-21.95,7.68-15.67,13.23s23.59,8.63,38.6,6.81,22-7.8,15.58-13.32S662.44,509.49,647.52,511.26Z"
              transform="translate(0)"
              fill="#e9d8c9"
            />
            <path
              d="M647,624.36q12.27,10.85,24.58,21.68c1.94,1.7,7.2,2.63,11.76,2.09Q789.54,635.35,895,620.72c4.53-.63,6.54-2.48,4.49-4.14q-13.05-10.51-26-21.08c-2-1.64-7.3-2.47-11.79-1.86h0Q757,607.91,651.74,620.34c-4.52.53-6.64,2.33-4.73,4"
              transform="translate(0)"
              fill="#ccbebc"
            />
            <path
              d="M547.93,556.67q-28.33,3.12-56.72,6.1c-4.44.47-6.59,2.2-4.81,3.88Q534,611.2,582.61,655.36c1.89,1.72,7.12,2.7,11.69,2.19q29.19-3.28,58.33-6.72c4.56-.53,6.68-2.35,4.76-4.06h0q-49.57-43.78-98.14-88c-1.83-1.66-6.89-2.6-11.33-2.12"
              transform="translate(0)"
              fill="#fff"
            />
          </motion.g>
          <motion.g style={{ y: yV }}>
            <path
              d="M1913.5,226.05c0-124.84-101.21-226-226-226s-226,101.21-226,226.05,101.2,226.05,226,226.05h0c124.84,0,226-101.21,226-226"
              fill="#002b49"
            />
            <path
              d="M1808.55,147.1,1624.48,308.72l-58.18-69.27"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="26.72"
            />
          </motion.g>
        </svg>
      </div>
    </motion.div>
  );
};

export default Section2;
