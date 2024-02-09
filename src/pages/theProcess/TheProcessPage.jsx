import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";

const TheProcessPage = () => {
  return (
    <div className="overflow-y-hidden">
      <h2 className="pb-5 pt-20 text-center font-bold">התהליך</h2>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
};

export default TheProcessPage;
