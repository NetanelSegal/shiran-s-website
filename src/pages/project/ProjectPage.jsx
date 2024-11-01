import { useContext } from "react";
import { urls } from "../../constants/urls";
import FavoriteProjectsCarousel from "../../shared/favoriteProjectsCarousel/FavoriteProjectsCarousel";
import { AppContext } from "../../context/AppContext";
import { motion } from "framer-motion";
import { useDataContext } from "../../context/DataContext";

const ProjectPage = ({ data }) => {
  const { categoriesCodeMap } = useDataContext();
  const variants = { from: { opacity: 0 }, to: { opacity: 1 } };
  return (
    <>
      <div className="h-[70dvh] pt-14 md:h-[80dvh] lg:h-[90vh]">
        {/* main image */}
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="relative h-full overflow-hidden"
        >
          <motion.h3
            initial={{ bottom: "-100px" }}
            animate={{ bottom: "20px" }}
            transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
            style={{ textShadow: "0px 0px 20px rgba(0,0,0,0.5)" }}
            className="horizontal-page-padding absolute bottom-5 right-5 z-10 overflow-hidden font-semibold text-white  sm:text-6xl lg:text-8xl "
          >
            {data.title}
          </motion.h3>
          <img
            onError={(e) => {
              e.target.src = `https://placehold.co/1920x1080`;
            }}
            src={`${urls.assets}/${data.mainImage}`}
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
      <motion.div
        variants={variants}
        initial="from"
        animate="to"
        transition={{ duration: 0.8, ease: "easeInOut", staggerChildren: 0.2 }}
        className="section horizontal-page-padding -mb-10"
      >
        <motion.div
          variants={variants}
          className="mb-10 flex flex-col items-center"
        >
          <table className="mb-12 w-full max-w-3xl border-collapse rounded-2xl text-lg">
            <tbody>
              <tr className="border-b-2 border-[#ccbebc]">
                <td className="p-2 text-right">תגיות: </td>
                <th className="p-2 text-right">
                  <div className="flex gap-2">
                    {data.categories.map((catCode, i) => (
                      <p
                        key={catCode + i}
                        className="my-bg-secondary rounded-lg px-3 py-1
          text-center text-sm font-semibold"
                      >
                        {categoriesCodeMap[catCode]}
                      </p>
                    ))}
                  </div>
                </th>
              </tr>
              <tr className="border-b-2 border-[#ccbebc]">
                <td className="p-2 text-right">לקוח: </td>
                <th className="p-2 text-right">{data.client}</th>
              </tr>
              <tr className="border-b-2 border-[#ccbebc]">
                <td className="p-2 text-right">סטטוס:</td>
                <th className=" p-2 text-right">
                  {data.isCompleted ? "הושלם" : "בתהליך"}
                </th>
              </tr>
              <tr className="border-b-2 border-[#ccbebc]">
                <td className="p-2 text-right">שטח בנייה:</td>
                <th className=" p-2 text-right"> {data.constructionArea}</th>
              </tr>
              <tr className="">
                <td className="p-2 text-right">מיקום:</td>
                <th className=" p-2 text-right"> {data.location}</th>
              </tr>
            </tbody>
          </table>
          <motion.p
            variants={variants}
            className="mt-10 w-full break-words pl-[30%]"
          >
            {data.description}
          </motion.p>
        </motion.div>
        <h3>תוכניות</h3>
        <motion.div
          variants={variants}
          whileInView="to"
          className="my-5 flex w-full flex-col gap-2 md:flex-row"
        >
          {!data.images.length && <p>אין תוכניות עדיין</p>}

          {data.plans.map((img, i) => (
            <motion.img
              onError={(e) => {
                e.target.src = `https://placehold.co/600x400`;
              }}
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: i * 0.2 }}
              key={img}
              src={`${urls.assets}/${img}`}
              alt=""
              className="aspect-video shrink grow rounded-xl border-2 object-contain p-2 md:w-1/3 md:flex-shrink"
            />
          ))}
        </motion.div>
        <h3>תמונות</h3>
        <motion.div
          variants={variants}
          whileInView="to"
          className="my-5 mb-10 flex w-full flex-col justify-between gap-2 md:flex-row"
        >
          {!data.images.length && <p>אין תמונות עדיין</p>}
          {data.images.map((img, i) => (
            <motion.img
              onError={(e) => {
                e.target.src = `https://placehold.co/600x400`;
              }}
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: i * 0.2 }}
              key={img}
              src={`${urls.assets}/${img}`}
              alt=""
              className="aspect-video min-w-0 grow rounded-xl object-cover md:w-1/3"
            />
          ))}
        </motion.div>
      </motion.div>
      <div className="horizontal-page-padding mb-10">
        <FavoriteProjectsCarousel />
      </div>
    </>
  );
};

export default ProjectPage;
