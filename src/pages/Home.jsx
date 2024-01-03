import shiranImgSrc from "../assets/images/header-section-img.png";
import imgBgSrc from "../assets/shapes/header-section-shape.svg";
import SelectedProjects from "../components/selectedProjectsCarousel/selectedProjectsCarousel";

const Home = () => {
  return (
    <div className="page-padding">
      {/* header section */}
      <div className="section">
        <div className="flex flex-col items-center justify-center md:flex-row md:gap-5">
          <div>
            <div className="relative mx-auto h-[450px] w-[400px] max-w-[90%] md:w-[320px] lg:w-[400px] lg:max-w-[600px]">
              <img
                className="absolute bottom-0 left-1/2 w-11/12 translate-x-[-53%]"
                src={imgBgSrc}
                alt=""
              />
              <img
                className="absolute bottom-0 left-0 h-[450px] object-contain object-bottom"
                src={shiranImgSrc}
                alt=""
              />
            </div>
          </div>
          <div className="max-w-[600px] md:w-1/2 md:translate-y-1/4 lg:translate-y-0">
            <h2 className="my-2 font-semibold">היי! אני שירן</h2>
            <p className="my-2">
              אדריכלית ומעצבת פנים, בתחום משנת 2015. התמחותי בעיצוב ותכנון של
              בתים פרטיים, דירות יוקרה, ופנטהאוזים. אצלי כל פרויקט הוא מיוחד
              ודורש מחשבה יצירתית, החל מהתכנון המדויק והפרקטי, ועד לבחירת גופי
              התאורה והכריות המתאימים.
            </p>
            <div>
              <button className="my-btn-primary btn-effect ml-2">
                צור/י קשר
              </button>
              <button className="my-btn-secondary btn-effect">פרוייקטים</button>
            </div>
          </div>
        </div>
      </div>
      {/* projects section */}
      <div className="section">
        <div className="">
          <h2 className="mb-5 font-semibold">פרוייקטים</h2>
          <SelectedProjects />
        </div>
      </div>
    </div>
  );
};

export default Home;
