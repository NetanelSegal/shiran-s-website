import FooterForm from "./footerForm/footerForm";
import srcIconTel from "../../assets/icons/tel.svg";
import srcIconMail from "../../assets/icons/mail.svg";
import srcIconFacebook from "../../assets/icons/facebook.svg";
import srcIconInstagram from "../../assets/icons/instagram.svg";
import srcShiranLogo from "../../assets/shiran_logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const shiransContactInfo = [
    {
      srcIcon: srcIconTel,
      text: "052-5174443",
    },
    {
      srcIcon: srcIconMail,
      text: "Studioimpact.shiran@gmail.com",
    },
    {
      srcIcon: srcIconFacebook,
      text: "Shiran_gilad",
    },
    {
      srcIcon: srcIconInstagram,
      text: "Shiran_gilad",
    },
  ];

  const navLinks = [
    { path: "/", title: "בית" },
    { path: "/about", title: "עוד עלי" },
    { path: "/projects", title: "פרוייקטים" },
    { path: "/the-process", title: "תהליך" },
    { path: "/contact", title: "צור קשר" },
  ];

  const inputClass =
    "absolute focus:outline-none z-0 inset-0 bg-transparent w-full";
  const lableClass = "absolute top-1/2 -x-translate- bg-transparent w-full";
  const inputContainerClass =
    "relative h-10 border bg-white rounded-xl w-full my-2";

  return (
    <section className="horizontal-page-padding my-bg-primary py-20">
      <div className="mb-5 lg:flex">
        <h2 className="my-5 font-semibold text-white lg:my-0 lg:w-1/3">
          מתה שנעבוד ביחד
        </h2>
        <FooterForm />
      </div>
      <div className="flex flex-col lg:flex-row-reverse lg:items-end lg:justify-between">
        <div className="w-full justify-end gap-5 sm:flex sm:flex-row-reverse">
          <div className="mb-5 w-full">
            {shiransContactInfo.map((e, i) => (
              <div className="mt-2 flex items-center justify-end">
                <p className="font-semibold text-white">{e.text}</p>
                <img className="mr-2" width="30" src={e.srcIcon} alt={e} />
              </div>
            ))}
          </div>
          <div className="mb-5 mt-2 w-full gap-10 whitespace-nowrap text-center font-semibold text-white underline sm:flex sm:w-full sm:justify-start lg:items-end">
            {navLinks.map(
              (e, i) =>
                i % 3 === 0 && (
                  <div key={i / 3} className="flex justify-start sm:flex-col">
                    {navLinks.slice(i, i + 3).map((link) => (
                      <Link
                        key={link.title}
                        className="w-1/3 sm:text-start"
                        to={link.path}
                      >
                        <p>{link.title}</p>
                      </Link>
                    ))}
                  </div>
                ),
            )}
          </div>
        </div>
        <img
          className="w-full p-4 lg:max-h-28 lg:w-1/3"
          src={srcShiranLogo}
          alt=""
        />
      </div>
    </section>
  );
};

export default Footer;
