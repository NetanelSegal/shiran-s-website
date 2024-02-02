import WhoIsShiranSection from "./sections/WhoIsShiranSection";

import WhyShiranSection from "./sections/WhyShiranSection";
const AboutPage = () => {
  return (
    <div className="overflow-y-hidden">
      <h2 className="my-bg-secondary pb-5 pt-20 text-center font-bold">
        הסיפור שלי
      </h2>

      <WhoIsShiranSection />
      <WhyShiranSection />
    </div>
  );
};

export default AboutPage;
