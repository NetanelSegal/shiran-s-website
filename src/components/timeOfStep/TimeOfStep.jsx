import React from "react";

const TimeOfStep = ({ time }) => {
  if (time) {
    return (
      <span className="my-bg-primary text-nowrap rounded-2xl px-2 py-1 text-center text-sm text-white">
        {time.min} - {time.max} חודשים
      </span>
    );
  }
};

export default TimeOfStep;
