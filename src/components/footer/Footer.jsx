import Joi from "joi";
import FooterForm from "./footerForm/footerForm";

const Footer = () => {
  const inputClass =
    "absolute focus:outline-none z-0 inset-0 bg-transparent w-full";
  const lableClass = "absolute top-1/2 -x-translate- bg-transparent w-full";
  const inputContainerClass =
    "relative h-10 border bg-white rounded-xl w-full my-2";

  return (
    <section className="horizontal-page-padding section my-bg-primary">
      <h2 className="my-5 font-semibold text-white">מתה שנעבוד ביחד</h2>
      <FooterForm />
    </section>
  );
};

export default Footer;
