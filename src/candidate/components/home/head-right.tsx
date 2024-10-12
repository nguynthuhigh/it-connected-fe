import React from "react";
import CVVector from "../../assets/svg/cv-vector.svg?react";
import Graph from "../../assets/svg/graph.svg?react";
const HeadRight: React.FC = () => {
  return (
    <div>
      <div className=" relative max-lg:hidden">
        <CVVector className="mr-14" />
        <Graph className="absolute top-0 right-0 mt-3"></Graph>
      </div>
    </div>
  );
};

export default HeadRight;
