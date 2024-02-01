import shiransImgSrc from "../../../assets/images/header-section-img.png";

const WhoIsShiranSection = () => {
  return (
    <section className="horizontal-page-padding my-bg-secondary section">
      <div className="mb-8 flex flex-col gap-8 md:flex-row">
        {/* Circle */}
        <div className="aspect-square w-full overflow-hidden rounded-full object-cover">
          <img
            width={"100%"}
            height={"100%"}
            src={shiransImgSrc}
            className="relative bottom-1/3"
            alt="Shiran's image in a working area"
          />
        </div>

        {/* Long */}
        <div className="my-bg-primary aspect-[3/1] w-full overflow-hidden rounded-2xl object-cover p-5 text-white md:aspect-[1/2] md:w-1/2">
          <h5>שנים של ניסיון ועבודה במקומות שונים</h5>
        </div>
      </div>

      <div className="flex flex-row">
        <div
          className="my-bg-primary relative aspect-square w-1/2 overflow-hidden 
      rounded-bl-2xl rounded-br-2xl rounded-tl-[100%] 
      rounded-tr-2xl object-cover p-5 text-base text-white"
        >
          <p className="absolute bottom-5 font-semibold">
            textPath השכלה גבוהה במכללה מסויימת
          </p>
        </div>

        <div
          className="aspect-[2/1] w-full overflow-hidden 
      rounded-b-[300px] rounded-t-2xl bg-white object-cover p-5 text-center"
        >
          <p className="font-bold">
            אני עושה את המקסימום בצורה הכי טובה שיש, כדי שיהיה לכם הכי טוב
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoIsShiranSection;
