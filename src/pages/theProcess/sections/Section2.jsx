import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import BoldParagraph from "../../../components/BoldParagraph";

const Section2 = () => {
  const ref = useRef(null);

  function useParallax(value, distance) {
    return useSpring(useTransform(value, [0, 1], [-distance, distance]));
  }

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yXV = useParallax(scrollYProgress, -100);
  const yGround = useParallax(scrollYProgress, 50);

  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      ref={ref}
      className="horizontal-page-padding section relative"
    >
      {/* text container */}
      <div className="lg:absolute lg:left-40 lg:w-1/4 xl:left-[18%] xl:w-1/5">
        <h3 className="mb-2 font-semibold">הפקת תיק מידע</h3>
        <p>
          זהו שלב טכני שבו הוועדה לתכנון ובנייה מקבצת את המידע הרלוונטי עבורנו.
          את המידע נקבל מגורמים שונים, כגון: פיקוד העורף, חברת חשמל, רשות
          העתיקות וכו'. מידע זה
          <BoldParagraph text={" ינחה וילווה אותנו "} />
          לאורך כל שלבי התכנון והתנהלות מול הוועדה עד לשלב קבלת היתר הבנייה.
        </p>
      </div>
      {/* svg container */}
      <div className="w-full py-10">
        <svg overflow="visible" viewBox="0 0 1913.5 1206.59">
          <motion.g style={{ y: yGround }}>
            <g>
              <path
                d="M1738.28,797.54,878.47,634.79a32.18,32.18,0,0,0-12.06,0L6.6,797.54a7.89,7.89,0,0,0-6.6,8v29.81a7.89,7.89,0,0,0,6.6,8L866.41,1006a32.18,32.18,0,0,0,12.06,0l859.81-162.75a7.88,7.88,0,0,0,6.59-8V805.5a7.89,7.89,0,0,0-6.59-8"
                transform="translate(0)"
                fill="#002b49"
              />
            </g>
            <g>
              <path
                d="M6.6,813.47,866.41,976.22a32.6,32.6,0,0,0,12.06,0l859.81-162.75a8.11,8.11,0,0,0,0-15.93L878.47,634.79a32.18,32.18,0,0,0-12.06,0L6.6,797.54a8.11,8.11,0,0,0,0,15.93"
                transform="translate(0)"
                fill="#ccbebc"
              />
            </g>
          </motion.g>
          <motion.g style={{ y: yXV }}>
            <rect
              x="746.1"
              width="1167.4"
              height="708.55"
              rx="32.43"
              fill="#002b49"
            />
            <g>
              <g>
                <g>
                  <line
                    x1="1461.07"
                    y1="146.99"
                    x2="890.4"
                    y2="146.99"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="16.21"
                  />
                  <line
                    x1="1461.07"
                    y1="209"
                    x2="890.4"
                    y2="209"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="16.21"
                  />
                  <line
                    x1="1461.07"
                    y1="271.01"
                    x2="890.4"
                    y2="271.01"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="16.21"
                  />
                </g>
                <path
                  d="M1769.17,131.59,1590.29,288.65l-56.54-67.31"
                  transform="translate(0)"
                  fill="#002b49"
                  stroke="#44923c"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16.21"
                />
              </g>
              <g>
                <g>
                  <line
                    x1="1736.24"
                    y1="406.42"
                    x2="1565.25"
                    y2="577.41"
                    fill="none"
                    stroke="#a23a3a"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16.21"
                  />
                  <line
                    x1="1736.24"
                    y1="577.41"
                    x2="1565.25"
                    y2="406.42"
                    fill="none"
                    stroke="#a23a3a"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16.21"
                  />
                </g>
                <g>
                  <line
                    x1="1461.07"
                    y1="429.12"
                    x2="890.4"
                    y2="429.12"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="16.21"
                  />
                  <line
                    x1="1461.07"
                    y1="491.13"
                    x2="890.4"
                    y2="491.13"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="16.21"
                  />
                  <line
                    x1="1461.07"
                    y1="553.13"
                    x2="890.4"
                    y2="553.13"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="16.21"
                  />
                </g>
              </g>
            </g>
          </motion.g>
        </svg>
      </div>
    </motion.div>
  );
};

export default Section2;
