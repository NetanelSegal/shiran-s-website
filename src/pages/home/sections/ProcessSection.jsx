import { motion } from "framer-motion";
import SvgAnimatino from "../../../components/test/SvgAnimatino";

const ProcessSection = () => {
  const enterAnimationVariants = {
    from: { opacity: 0, y: 300 },
    to: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      whileInView="to"
      initial="from"
      variants={enterAnimationVariants}
      viewport={{ once: true }}
      className="horizontal-page-padding section overflow-hidden"
    >
      <div className="mb-5 text-center">
        <h2 className="font-bold">קצת מהתהליך איתי</h2>
      </div>
      {/* step 1 */}
      <div className="my-16">
        <div className="relative w-96 max-w-[50%]">
          <h4 className="font-semibold">שיחת היכרות</h4>
          <p>לשם הבנת צרכי הלקוח והסקת מסקנות בהתאם לפרוייקט</p>
          <div className="absolute left-1/4 top-3/4 h-7 w-7 bg-black"></div>
        </div>
      </div>
      {/* step 2 */}
      <div className="my-16">
        <div className="relative mr-auto w-96 max-w-[50%]">
          <h4 className="font-semibold">תיק מידע </h4>
          <p>מכיל מידע תכנוני, הנדסי ומרחבי מפורט וחומרי עזר נוספים</p>
          <div className="absolute -right-3 top-2/4 h-7 w-7 bg-black"></div>
        </div>
      </div>
      {/* step 3 */}
      <div className="my-16">
        <div className="relative w-96 max-w-[50%]">
          <h4 className="font-semibold">תכנון המבנה והכנת הדמייה</h4>
          <p>
            זהו תהליך מורכב בו בודקים האם וכיצד ניתן לבנות או לשפץ את המבנה
            שלכם. התהליך מתחיל בבדיקת אישורי הבנייה ומסתיים בתוכנית אדריכלית
            מקיפה הכוללת שרטוטים ולעיתים גם הדמיות.
          </p>
          <div className="absolute left-0 top-1/2 h-7 w-7 bg-black"></div>
        </div>
      </div>
      {/* step 4 */}
      <div className="my-16">
        <div className="relative mr-auto w-96 max-w-[50%]">
          <h4 className="font-semibold">העברה לוועדה</h4>
          <p>
            הוועדה בודקת אם כל המסמכים הוגשו כראוי מדובר על בדיקה טכנית, כאשר אם
            יש חוסרים/ השלמות וכו', הבקשה חוזרת למגישים להשלמות/ תוספות.
          </p>
          <div className="absolute -right-3 top-3/4 h-7 w-7 bg-black"></div>
        </div>
      </div>
      {/* step 5 */}
      <div className="my-16">
        <div className="relative w-96 max-w-[50%]">
          <h4 className="font-semibold">בנייה</h4>
          <p>
            בשלב הזה יש לנו את כל מה שצריך כדי להתחיל לבנות ומה שנשאר זה לתת
            לבעלי מקצוע לעשות את עבודתם
          </p>
          <div className="absolute left-0 top-3/4 h-7 w-7 bg-black"></div>
        </div>
      </div>
      <SvgAnimatino />
    </motion.section>
  );
};

export default ProcessSection;
