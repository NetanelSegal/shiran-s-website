import FooterForm from "./footerForm/FooterForm";
import srcIconTel from "../../assets/icons/tel.svg";
import srcIconMail from "../../assets/icons/mail.svg";
import srcIconFacebook from "../../assets/icons/facebook.svg";
import srcIconInstagram from "../../assets/icons/instagram.svg";
import srcShiranLogo from "../../assets/shiran_logo.svg";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useUser } from "../../context/UserContext";
import ClickToCopy from "../../components/clickToCopy/ClickToCopy";

const Footer = () => {
  const { user } = useUser();
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
      url: "https://www.facebook.com/shiran.gilad.94",
    },
    {
      srcIcon: srcIconInstagram,
      text: "Shiran_gilad",
      url: "https://www.instagram.com/shiran_gilad/",
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
    { path: "/admin", title: "עמוד מנהל" },
    ...navLinksUser,
  ];

  const navLinks =
    user?.role == "admin" || user?.role == "developer"
      ? navLinksAdmin
      : navLinksUser;

  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const variants = {
    from: { opacity: 0, y: 400 },
    to: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };
  return (
    <footer
      ref={ref}
      className="horizontal-page-padding my-bg-primary overflow-hidden py-20"
    >
      <motion.div
        variants={variants}
        initial="from"
        animate={isInView ? "to" : "from"}
        className="mb-5 lg:flex"
      >
        <h2 className="my-5 font-semibold text-white lg:my-0 lg:w-1/3">
          מתה שנעבוד ביחד
        </h2>
        <FooterForm />
      </motion.div>
      <motion.div
        variants={variants}
        initial="from"
        animate={isInView ? "to" : "from"}
        className="flex flex-col lg:flex-row-reverse lg:items-end lg:justify-between"
      >
        <div className="w-full justify-evenly gap-5 sm:flex sm:flex-row-reverse md:flex md:grow">
          <div className="mb-5 w-full">
            {shiransContactInfo.map((e) => (
              <div
                key={e.srcIcon}
                className="mt-2 flex items-center justify-end"
              >
                {e.url ? (
                  <a target="_blank" href={e.url}>
                    <p className="font-semibold text-white">{e.text}</p>
                  </a>
                ) : (
                  <ClickToCopy>
                    <p className="font-semibold text-white">{e.text}</p>
                  </ClickToCopy>
                )}
                <img className="mr-2" width="30" src={e.srcIcon} alt={e} />
              </div>
            ))}
          </div>
          <div className="w-full gap-10 whitespace-nowrap pb-3 text-center font-semibold text-white underline sm:flex sm:w-full sm:justify-start lg:items-end">
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
        <div className="w-full text-center lg:w-1/3">
          <img
            className="h-full w-full object-contain p-4"
            src={srcShiranLogo}
            alt="Shiran logo image"
          />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
