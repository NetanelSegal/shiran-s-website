import FooterForm from "./footerForm/FooterForm";
import srcIconTel from "../../assets/icons/tel.svg";
import srcIconMail from "../../assets/icons/mail.svg";
import srcIconFacebook from "../../assets/icons/facebook.svg";
import srcIconInstagram from "../../assets/icons/instagram.svg";
import srcShiranLogo from "../../assets/shiran_logo.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
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

  const navLinksUser = [
    { path: "/", title: "בית" },
    { path: "/projects", title: "פרויקטים" },
    { path: "/about", title: "עוד עלי" },
    { path: "/the-process", title: "תהליך" },
    { path: "/contact", title: "צור/י קשר" },
  ];

  const navLinksAdmin = [
    ...navLinksUser,
    { path: "/contact", title: "צור/י קשר" },
  ];

  const navLinks = user?.role === "admin" ? navLinksAdmin : navLinksUser;
  const variants = {
    from: { opacity: 0, y: 300 },
    to: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  return (
    <motion.footer
      variants={variants}
      initial="from"
      whileInView="to"
      viewport={{ once: true }}
      className="horizontal-page-padding my-bg-primary overflow-hidden py-20"
    >
      <div className="mb-5 lg:flex">
        <h2 className="my-5 font-semibold text-white lg:my-0 lg:w-1/3">
          מתה שנעבוד ביחד
        </h2>
        <FooterForm />
      </div>
      <div className="flex flex-col lg:flex-row-reverse lg:items-end lg:justify-between">
        <div className="w-full justify-end gap-5 sm:flex sm:flex-row-reverse">
          <div className="mb-5 w-full">
            {shiransContactInfo.map((e) => (
              <div
                key={e.srcIcon}
                className="mt-2 flex items-center justify-end"
              >
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
                    {navLinks.slice(i, i + 3).map((e) => (
                      <Link
                        key={e.title}
                        className="w-1/3 sm:text-start"
                        to={e.path}
                      >
                        <p>{e.title}</p>
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
    </motion.footer>
  );
};

export default Footer;
