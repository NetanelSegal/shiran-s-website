import React from "react";

const ProjectPage = ({ data }) => {
  return (
    <div className="section horizontal-page-padding bg-black text-white">
      {data.title}
    </div>
  );
};

export default ProjectPage;
