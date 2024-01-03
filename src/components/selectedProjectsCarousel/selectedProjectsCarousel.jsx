import React, { useState } from "react";
import src1 from "../../assets/selectedProjectsImages/pic1.jpg";
import src2 from "../../assets/selectedProjectsImages/pic2.jpg";
import src3 from "../../assets/selectedProjectsImages/pic3.jpg";
const selectedProjectsCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const selectedProjData = [
    {
      img: src1,
      title: "תמונה ראשונה - כותרת",
    },
    {
      img: src2,
      title: "תמונה שניה - כותרת בכאילו",
    },
    {
      img: src3,
      title: "תמונה שלישית - כותרת בכאילו אחרונה",
    },
  ];

  const handleLeftOnCLick = () => {
    setSelectedIndex((prevState) =>
      prevState == selectedProjData.length - 1 ? 0 : prevState + 1,
    );
  };

  const handleRightOnCLick = () => {
    setSelectedIndex((prevState) =>
      prevState == 0 ? selectedProjData.length - 1 : prevState - 1,
    );
  };

  return (
    <div>
      <div className="relative">
        <img
          className="absolute top-1/2 mb-1 aspect-video w-full -translate-y-1/2 translate-x-[100%] scale-90 rounded-xl object-cover"
          src={
            selectedProjData[
              selectedIndex == 0
                ? selectedProjData.length - 1
                : selectedIndex - 1
            ].img
          }
          alt=""
        />
        <img
          className="mb-1 aspect-video w-full rounded-xl object-cover"
          src={selectedProjData[selectedIndex].img}
          alt=""
        />
        <img
          className="absolute top-1/2 mb-1 aspect-video w-full -translate-y-1/2 translate-x-[-100%] scale-90 rounded-xl object-cover"
          src={
            selectedProjData[
              selectedIndex == selectedProjData.length - 1
                ? 0
                : selectedIndex + 1
            ].img
          }
          alt=""
        />
      </div>
      <div className="flex flex-col items-center gap-1 sm:flex-row">
        <div className="my-bg-primary w-full flex-grow rounded-xl py-1 pr-4 text-white sm:w-auto">
          <h5>{selectedProjData[selectedIndex].title}</h5>
        </div>
        <div className="text-center">
          <button
            onClick={handleRightOnCLick}
            className="my-btn-primary btn-effect ml-1"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          <button
            onClick={handleLeftOnCLick}
            className="my-btn-primary btn-effect ml-1"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="my-btn-secondary btn-effect">עוד פרוייקטים</button>
        </div>
      </div>
    </div>
  );
};

export default selectedProjectsCarousel;
